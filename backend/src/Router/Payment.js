const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());
const payment = express.Router();

const MERCHANT_KEY="96434309-7796-489d-8924-ab56988a6076"
const MERCHANT_ID="PGTESTPAYUAT86"

// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/status"

const MERCHANT_BASE_URL="https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
const MERCHANT_STATUS_URL="https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status"

const redirectUrl="http://localhost:8000/status"

const successUrl="http://localhost:5173/payment-success"
const failureUrl="http://localhost:5173/payment-failure"


payment.post('/payment', async (req, res) => {

    const {name, mobileNumber, amount} = req.body;
    const orderId = uuidv4()

    //payment
    const paymentPayload = {
        merchantId : MERCHANT_ID,
        merchantUserId: name,
        mobileNumber: mobileNumber,
        amount : amount * 100,
        merchantTransactionId: orderId,
        redirectUrl: `${redirectUrl}/?id=${orderId}`,
        redirectMode: 'POST',
        paymentInstrument: {
            type: 'PAY_PAGE'
        }
    }

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
    const keyIndex = 1
    const string  = payload + '/pg/v1/pay' + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const option = {
        method: 'POST',
        url:MERCHANT_BASE_URL,
        headers: {
            accept : 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
        },
        data :{
            request : payload
        }
    }
    try {
        
        const response = await axios.request(option);
        console.log(response.data.data.instrumentResponse.redirectInfo.url)
         res.send(response.data.data.instrumentResponse.redirectInfo.url)
    } catch (error) {
        console.log("error in payment", error)
        res.status(500).json({error : 'Failed to initiate payment'})
    }

});


payment.post('/status/:id', async (req, res) => {
    const merchantTransactionId = req.params.id;
    console.log(merchantTransactionId);

    const keyIndex = 1;
    const string  = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const option = {
        method: 'GET',
        url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
            accept : 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': MERCHANT_ID
        },
    };

    try {
        const response = await axios.request(option);
        if (response.data.success === true) {
            console.log("Payment Successful");
            // Redirect to homepage after success
            return res.redirect(`${successUrl}?status=success&id=${merchantTransactionId}`);
        } else {
            console.log("Payment Failed");
            // Redirect to failure page after failure
            return res.redirect(`${failureUrl}?status=failure&id=${merchantTransactionId}`);
        }
    } catch (error) {
        console.log("Error during payment verification:", error);
        // Redirect to failure page if error occurs
        return res.redirect(`${failureUrl}?status=error&id=${merchantTransactionId}`);
    }
});





module.exports=payment