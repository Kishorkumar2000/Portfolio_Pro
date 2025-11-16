// src/app/resume/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, Eye, Printer } from 'lucide-react';

export default function Resume() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/documents/Kishorkumar_Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Kishorkumar_Dhanabose_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Resume download failed. Please try again.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download or view my complete professional resume
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownload}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Printer className="w-5 h-5" />
              Print Resume
            </button>
            <a
              href="/documents/Kishorkumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View in New Tab
            </a>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="card p-8 md:p-12 bg-white shadow-2xl">
            {/* Resume Content */}
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">KISHORKUMAR DHANABOSE</h1>
                <p className="text-gray-600">QA Engineer | Automation & Performance Testing Specialist</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
                  <span>📧 dkishorkumar7@gmail.com</span>
                  <span>📱 +91 6385691033</span>
                  <span>📍 Tamil Nadu, India</span>
                </div>
              </div>

              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-700">
                  Meticulous QA Engineer with nearly 2.5 years of experience across Manual, Automation, 
                  AEM, and Performance Testing. Proven track record of delivering high-quality solutions 
                  for web, mobile, and API layers, developing innovative test strategies, and ensuring 
                  seamless product deliveries. Expertise extends to automation scripts and development 
                  of Chrome extensions, reflecting adaptability and commitment to excellence.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  PROFESSIONAL EXPERIENCE
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Associate Consultant</h3>
                        <p className="text-gray-700 font-medium">Leading American Knife Seller</p>
                      </div>
                      <p className="text-gray-600 text-sm">Feb 2023 - Mar 2024</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Automated test cases using WDIO for Angular-based applications</li>
                      <li>Performed cross-browser and mobile testing using Sauce Labs</li>
                      <li>Maintained 100% attendance demonstrating strong commitment</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Associate Consultant</h3>
                        <p className="text-gray-700 font-medium">Internal Tools Development</p>
                      </div>
                      <p className="text-gray-600 text-sm">Mar 2024 - Aug 2024</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Explored ETL Testing using Snowflake and Azure Databricks</li>
                      <li>Migrated Chrome extension from Manifest V2 to V3</li>
                      <li>Received appreciation from developer team for strong initiative</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Performance QA</h3>
                        <p className="text-gray-700 font-medium">Tools & Equipment Retailer</p>
                      </div>
                      <p className="text-gray-600 text-sm">Oct 2024 - Present</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Designed and executed performance tests using JMeter</li>
                      <li>Identified bottlenecks and optimized application performance</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p><strong>Automation:</strong> WDIO, Selenium, Playwright, Cypress, Appium</p>
                  </div>
                  <div>
                    <p><strong>Testing:</strong> Manual, API, Mobile, Performance, AEM</p>
                  </div>
                  <div>
                    <p><strong>Performance:</strong> JMeter, Load Testing</p>
                  </div>
                  <div>
                    <p><strong>Languages:</strong> Java, JavaScript, Python, SQL</p>
                  </div>
                  <div>
                    <p><strong>Tools:</strong> Postman, Git, VS Code, Android Studio</p>
                  </div>
                  <div>
                    <p><strong>Cloud:</strong> Snowflake, Azure Databricks, Sauce Labs</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  EDUCATION
                </h2>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bachelor of Engineering</h3>
                    <p className="text-gray-700">Surya Group of Institutions & Technologies</p>
                  </div>
                  <p className="text-gray-600">2018 - 2022</p>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  CERTIFICATIONS
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>ISTQB Certified Tester - Foundation Level</li>
                  <li>LambdaTest Selenium Java - Advanced Certification</li>
                </ul>
              </section>

              {/* Awards */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                  AWARDS & ACHIEVEMENTS
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Pat on the Back Award (x2) for excellence in quality assurance</li>
                  <li>Above and Beyond Award for outstanding commitment</li>
                  <li>Automation Challenge Spot Awards</li>
                  <li>Top 5 Placement - US Techlab International Hackathon</li>
                  <li>Winner - PrivacyMirror & Junk Mapper Hackathons</li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Want to know more about my work? Check out my detailed portfolio sections
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/experience" className="text-primary-600 hover:text-primary-700 font-medium">
              View Experience →
            </a>
            <a href="/projects" className="text-primary-600 hover:text-primary-700 font-medium">
              View Projects →
            </a>
            <a href="/skills" className="text-primary-600 hover:text-primary-700 font-medium">
              View Skills →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}