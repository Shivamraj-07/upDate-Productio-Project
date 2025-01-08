import React, { useEffect, useRef } from 'react';
import './interview.css';

function Interviewque() {
    const searchInputRef = useRef(null);
    const domainRefs = useRef([]);

    useEffect(() => {
        const handleSearch = () => {
            const searchText = searchInputRef.current.value.toLowerCase();
            domainRefs.current.forEach((domain) => {
                const heading = domain.querySelector("h2").textContent.toLowerCase();
                const content = domain.textContent.toLowerCase();
                if (heading.includes(searchText) || content.includes(searchText)) {
                    domain.style.display = "block";
                } else {
                    domain.style.display = "none";
                }
            });
        };

        const searchInput = searchInputRef.current;
        searchInput.addEventListener("input", handleSearch);

        return () => {
            searchInput.removeEventListener("input", handleSearch);
        };
    }, []);

    return (
        <div>
            <header className="gari_header">
                <h1 className="garima_h">Interview Preparation Guide</h1>
                <p className="my_para_gari">Prepare for your next interview with questions across multiple domains.</p>
                <input type="text" ref={searchInputRef} placeholder="Search for a domain" />
            </header>

            <main className="main_gari">
                <section id="domain_garis">
                    {[
                        { title: "Web Development", desc: "Questions on HTML, CSS, JavaScript, and frameworks like React and Angular.", questions: ["What are semantic tags in HTML?", "Explain the difference between padding and margin in CSS.", "What is the purpose of React hooks?"] },
                        { title: "Data Science", desc: "Statistics, machine learning, and data visualization questions.", questions: ["What is cross-validation, and why is it used?", "Explain precision and recall in the context of classification models.", "What is dimensionality reduction, and why is it important?"] },
                        { title: "Cyber Security", desc: "Covering network security, cryptography, and basic ethical hacking.", questions: ["What is a man-in-the-middle attack?", "Explain the principle of least privilege..", "how does encryption differ from hashing?"] },
                        { title: "DevOps", desc: "Questions on devops and infrastructure.", questions: ["What is the difference between a virtual machine and a container?", "What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?"] },
                        { title: "Cloud Computing", desc: "Questions on cloud computing and cloud services.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Artificial Intelligence", desc: "Questions on AI and ML.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "System Design", desc: "Questions on system design.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Machine Learning", desc: "Questions on ML and AI.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Data Structures", desc: "Questions on data structures.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Algorithms", desc: "Questions on algorithms.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Operating Systems", desc: "Questions on operating systems.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "System Design", desc: "Questions on system design.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Databases", desc: "Questions on databases.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Networking", desc: "Questions on networking.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Computer Networks", desc: "Questions on computer networks.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Computer Architecture", desc: "Questions on computer architecture.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Computer Organization", desc: "Questions on computer organization.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                        { title: "Computer Architecture", desc: "Questions on computer architecture.", questions: ["What is the difference between a server and a cluster?", "What is the difference between a load balancer and a reverse proxy?", "What is the difference between a virtual machine and a container?"] },
                    {    title: " Management", 
        desc: "Questions on leadership, strategic planning, and decision-making skills.", 
        questions: [
            "How do you prioritize tasks in a high-pressure environment?", 
            "Describe a time you had to resolve a conflict within your team.", 
            "What is your approach to setting and achieving long-term goals?", 
            "How do you handle underperforming team members?", 
            "What metrics do you use to measure team performance?"
        ]
    },
    { 
        title: " Customer Care", 
        desc: "Questions on communication, problem-solving, and customer relationship management.", 
        questions: [
            "How would you handle a customer complaint about a defective product?", 
            "Describe a situation where you turned a dissatisfied customer into a happy one.", 
            "What steps would you take to de-escalate a situation with an angry customer?", 
            "How do you keep track of customer issues and follow up effectively?", 
            "What does excellent customer service mean to you?"
        ]
    },
    { 
        title: " Game Development", 
        desc: "", 
        questions: [
            "Explain the concept of rendering pipelines in game engines.", 
            "What is the purpose of collision detection in games?", 
            "How are animations optimized in a game engine?", 
            "What are shaders, and how are they used in game graphics?", 
            "Describe the role of AI in modern game development."
        ]
    },
    { 
        title: " Robotics", 
        desc: "", 
        questions: [
            "What are the different types of sensors used in robots?", 
            "Explain inverse kinematics in robotics.", 
            "How is machine learning applied in robotic systems?", 
            "What is the function of actuators in robotics?", 
            "Discuss safety considerations in human-robot interaction."
        ]
    },
    { 
        title: " Automotive Engineering", 
        desc: "", 
        questions: [
            "What are the key considerations in designing electric vehicles?", 
            "Explain the role of aerodynamics in automotive design.", 
            "How does regenerative braking work in hybrid cars?", 
            "Describe the purpose of vehicle stability control systems.", 
            "What are the components of an automotive fuel system?"
        ]
    },
    { 
        title: " Aerospace Engineering", 
        desc: "", 
        questions: [
            "Explain how flight control systems work in modern aircraft.", 
            "What materials are commonly used in aircraft construction?", 
            "Describe the principles of lift and thrust in aviation.", 
            "How does GPS assist in navigation for aerospace applications?", 
            "What is the role of aerodynamics in spacecraft design?"
        ]
    },
    { 
        title: " Product Management", 
        desc: "", 
        questions: [
            "How do you prioritize features in product development?", 
            "Explain the importance of a product roadmap.", 
            "What is a Minimum Viable Product (MVP) and why is it useful?", 
            "How do you manage feedback from diverse stakeholders?", 
            "Describe the process of conducting market research."
        ]
    },
    { 
        title: " Supply Chain Management", 
        desc: "", 
        questions: [
            "Describe the process of demand forecasting.", 
            "What is inventory turnover and why is it important?", 
            "Explain the concept of Just-in-Time (JIT) inventory.", 
            "How is supply chain risk management performed?", 
            "What is the bullwhip effect in supply chains?"
        ]
    },
    { 
        title: " Architecture", 
        desc: "", 
        questions: [
            "What factors are important in sustainable building design?", 
            "Explain the concept of green architecture.", 
            "How is building information modeling (BIM) used in architecture?", 
            "What are the principles of passive solar design?", 
            "Describe the importance of site analysis in architecture."
        ]
    },
    { 
        title: " Civil Engineering", 
        desc: "", 
        questions: [
            "Explain the purpose of soil testing in construction projects.", 
            "What is reinforced concrete, and why is it used?", 
            "Describe the process of highway design and construction.", 
            "How are load-bearing structures designed in civil engineering?", 
            "What is the importance of environmental impact assessments?"
        ]
    },
    { 
        title: " Biomedical Engineering", 
        desc: "", 
        questions: [
            "How is tissue engineering applied in medical treatments?", 
            "What are the types of biomedical imaging technologies?", 
            "Explain the role of bioinformatics in biomedical research.", 
            "How are wearable health monitoring devices designed?", 
            "What are the ethical considerations in biomedical engineering?"
        ]
    },
    { 
        title: " Environmental Science", 
        desc: "", 
        questions: [
            "What are the methods used to measure air pollution?", 
            "Explain the process of environmental impact assessment.", 
            "How do ecosystems respond to climate change?", 
            "Describe the process of waste management and recycling.", 
            "What are renewable energy sources, and why are they important?"
        ]
    },
    { 
        title: " Marketing", 
        desc: "", 
        questions: [
            "How do you develop a digital marketing strategy?", 
            "Explain the concept of brand positioning.", 
            "What is customer segmentation, and why is it important?", 
            "Describe the process of running a successful ad campaign.", 
            "How do you measure the effectiveness of a marketing campaign?"
        ]
    },
    { 
        title: " Content Writing", 
        desc: "", 
        questions: [
            "What is the importance of SEO in content creation?", 
            "How do you tailor content for a specific audience?", 
            "Explain the difference between content writing and copywriting.", 
            "Describe the elements of an engaging blog post.", 
            "How do you handle writer's block?"
        ]
    },
    { 
        title: " Public Relations", 
        desc: "", 
        questions: [
            "How do you handle a PR crisis for a brand?", 
            "What is the role of media relations in PR?", 
            "Describe the steps in creating a press release.", 
            "How do you measure the success of a PR campaign?", 
            "What are the ethical considerations in public relations?"
        ]
    },
    { 
        title: " Event Planning", 
        desc: "", 
        questions: [
            "What are the key steps in organizing a corporate event?", 
            "How do you manage budgets in event planning?", 
            "Describe the process of vendor selection for events.", 
            "How do you handle last-minute changes during an event?", 
            "What are some effective strategies for promoting an event?"
        ]
    },
    { 
        title: " Fashion Design", 
        desc: "", 
        questions: [
            "What are the current trends in sustainable fashion?", 
            "How is fashion forecasting performed?", 
            "Explain the process of garment construction.", 
            "What are the factors influencing fabric selection?", 
            "How does fashion design impact consumer behavior?"
        ]
    },
    { 
        title: " Machine Learning", 
        desc: "Concepts of algorithms, supervised and unsupervised learning, and model evaluation.", 
        questions: [
            "What is a decision tree?", 
            "Explain k-means clustering.", 
            "What is bias-variance tradeoff?"
        ]
    }
                      


                    ].map((domain, index) => (
                        <div
                            className="domain"
                            key={index}
                            ref={(el) => (domainRefs.current[index] = el)}
                        >
                            <h2 className="garima_h">{index + 1}. {domain.title}</h2>
                            <p className="my_para_gari">{domain.desc}</p>
                            <ul className="ul_gari">
                                {domain.questions.map((question, qIndex) => (
                                    <li key={qIndex} className="my_li_gari">{question}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Interviewque;
