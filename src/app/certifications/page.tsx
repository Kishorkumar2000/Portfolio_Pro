// src/app/certifications/page.tsx
'use client';

import { motion } from 'framer-motion';
import { certificates } from '@/data/portfolio';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export default function Certifications() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all text-sm font-medium"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certification Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What These Certifications Mean</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ISTQB Foundation Level</h3>
                  <p className="text-gray-700">
                    Demonstrates comprehensive knowledge of software testing fundamentals, 
                    terminology, and best practices recognized globally across the industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">LambdaTest Selenium Java</h3>
                  <p className="text-gray-700">
                    Advanced proficiency in Selenium automation with Java, including 
                    cross-browser testing and cloud-based test execution strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Commitment to Excellence</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            These certifications represent my dedication to staying current with industry 
            standards and best practices. I continuously pursue new learning opportunities 
            to expand my expertise and deliver the highest quality work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <div className="text-2xl font-bold mb-1">2+</div>
              <div className="text-sm opacity-90">Certifications</div>
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <div className="text-2xl font-bold mb-1">∞</div>
              <div className="text-sm opacity-90">Learning Journey</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}