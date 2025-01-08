import React from 'react';
import NavBar from '../LandingPage/NavBar';


const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">1. Introduction</h2>
          <p className="mb-2">
            Welcome to upDate ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
          <p>
            upDate is located in Raipur, Chhattisgarh, India. We provide job seeking and recruiting services through our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">For Job Seekers:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal information (name, email, phone number)</li>
            <li>Professional information (resume, work history, skills)</li>
            <li>Job search preferences</li>
          </ul>
          <h3 className="text-xl font-medium mb-2">For Recruiters:</h3>
          <ul className="list-disc pl-6">
            <li>Company information</li>
            <li>Contact details</li>
            <li>Job postings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">3. How We Use Your Information</h2>
          <p className="mb-2">We use the collected information to:</p>
          <ul className="list-disc pl-6">
            <li>Facilitate job matching between seekers and recruiters</li>
            <li>Improve our services and user experience</li>
            <li>Communicate with you about your account and our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">5. Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request the deletion of your personal data</li>
            <li>Object to the processing of your personal data</li>
            <li>Restrict the processing of your personal data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="mt-2">
            upDate<br />
            Raipur, Chhattisgarh, India<br />
            Email: privacy@update.com<br />
            Phone: +91 123 456 7890
          </address>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;