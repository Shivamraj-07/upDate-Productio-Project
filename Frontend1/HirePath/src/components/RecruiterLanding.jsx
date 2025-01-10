import React from 'react';
import { FaUserTie, FaSearch, FaChartLine, FaBriefcase, FaHandshake, FaClock, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaArrowRight, FaUserPlus, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const RecruiterLanding = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Enhanced Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Welcome to <span className="text-blue-400">upDate</span> Recruiter
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-8">
              Empowering recruiters to find top talent effortlessly
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg flex items-center">
                Get Started Now
                <FaArrowRight className="ml-2" />
              </button>
              <a href="#learn-more" className="text-blue-300 hover:text-blue-400 font-semibold text-lg underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>








   {/* Main Content */}
   <div className="container mx-auto px-4 py-16">
     <div className="mb-20">
       <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">Why Choose upDate?</h2>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {[
           { icon: <FaUserTie />, title: "Quality Candidates", description: "Access a pool of pre-screened, highly qualified professionals" },
           { icon: <FaSearch />, title: "Advanced Search", description: "Find the right fit with our powerful search and filtering tools" },
           { icon: <FaChartLine />, title: "Analytics Dashboard", description: "Track your hiring process with insightful analytics" },
           { icon: <FaBriefcase />, title: "Job Posting Made Easy", description: "Create and manage job listings with our intuitive interface" },
           { icon: <FaHandshake />, title: "Candidate Engagement", description: "Communicate seamlessly with potential hires through our platform" },
           { icon: <FaClock />, title: "Time-Saving Tools", description: "Automate repetitive tasks and focus on what matters most" },
         ].map((item, index) => (
           <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
             <div className="flex items-center mb-4">
               <div className="text-4xl text-blue-400 mr-4">
                 {item.icon}
               </div>
               <h3 className="text-xl font-semibold text-blue-300">{item.title}</h3>
             </div>
             <p className="text-gray-300">{item.description}</p>
           </div>
         ))}
       </div>
     </div>
   
   

       
     <div className="my-20 px-4">
  <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">How It Works</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { icon: <FaUserPlus />, title: "Create Your Profile", description: "Set up your company profile and showcase your employer brand" },
      { icon: <FaBriefcase />, title: "Post Job Openings", description: "Easily create and manage job listings to attract top talent" },
      { icon: <FaHandshake />, title: "Connect with Candidates", description: "Review applications, schedule interviews, and hire the best fit" },
    ].map((item, index) => (
      <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-5xl text-blue-400 mb-6">{item.icon}</div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">
          {index + 1}. {item.title}
        </h3>
        <p className="text-gray-300 text-lg">{item.description}</p>
        <div className="mt-6">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>






        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-100">Ready to Transform Your Hiring Process?</h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-6 rounded-full transition duration-300 text-lg">
            Get Started Now
          </button>




{/* New content starts here */}
<div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl shadow-2xl p-8 mt-20">
  <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
    <div className="space-y-8">
      <h3 className="text-3xl font-bold mb-6 text-blue-300 border-b-2 border-blue-500 pb-2 inline-block">Why Recruiters Love upDate</h3>
      <ul className="space-y-6 text-left">
        {[
          "Access to a diverse pool of qualified candidates",
          "AI-powered matching algorithm for better candidate suggestions",
          "Customizable screening questions to filter applicants",
          "Collaborative hiring tools for team decision-making"
        ].map((item, index) => (
          <li key={index} className="flex items-start group transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 p-3 rounded-lg">
            <FaCheckCircle className="text-green-400 mt-1 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-200 group-hover:text-white">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="space-y-8">
      <h3 className="text-3xl font-bold mb-6 text-yellow-300 border-b-2 border-yellow-500 pb-2 inline-block">Our Commitment to You</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">At upDate, we're dedicated to your success. Our platform is constantly evolving to meet the changing needs of modern recruiters and HR professionals.</p>
      <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 shadow-inner">
        <h4 className="text-xl font-semibold mb-4 text-yellow-200">We offer:</h4>
        <ul className="space-y-4 text-left">
          {[
            "24/7 customer support",
            "Regular platform updates and new features",
            "Comprehensive onboarding and training",
            "Data-driven insights to optimize your hiring process"
          ].map((item, index) => (
            <li key={index} className="flex items-center group">
              <FaCheckCircle className="text-green-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="mb-6">Our team is here to help you get the most out of upDate.</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+1234567890" className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300">
                <FaPhoneAlt className="mr-2" />
                <span>Call Us</span>
              </a>
              <a href="mailto:support@upDate.com" className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300">
                <FaEnvelope className="mr-2" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





{/* Footer */}
<footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-300 py-12 mt-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">upDate</h3>
        <p className="text-sm">Empowering recruiters to find top talent effortlessly.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-blue-400 transition duration-300">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 mb-4">Resources</h4>
        <ul className="space-y-2">
          {['Blog', 'FAQ', 'Support', 'Terms of Service'].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-blue-400 transition duration-300">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} upDate. All rights reserved.</p>
    </div>
  </div>
</footer>



export default RecruiterLanding;



