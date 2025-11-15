// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="text-gradient">
                  Kishorkumar
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
                QA Engineer & Automation Specialist
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Meticulous QA Engineer with 2.5+ years of experience in Manual, 
                Automation, AEM, and Performance Testing. Proven track record of 
                delivering high-quality solutions for web, mobile, and API layers. 
                Passionate about ensuring seamless product deliveries through innovative 
                test strategies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/resume" className="btn-primary inline-flex items-center">
                  View Resume
                  <Download className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600">Connect with me:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/kishorkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kishorkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:dkishorkumar7@gmail.com"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+916385691033"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all"
                    aria-label="Phone"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/profile.jpg"
                    alt="Kishorkumar Dhanabose"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">2.5+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
              <div className="text-gray-600">Hackathons Won</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Attendance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-subtitle">
              Specialized in quality assurance across multiple testing domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Automation Testing',
                skills: ['WDIO', 'Selenium', 'Playwright', 'Cypress'],
                icon: '🤖',
              },
              {
                title: 'Performance Testing',
                skills: ['JMeter', 'Load Testing', 'Bottleneck Analysis'],
                icon: '⚡',
              },
              {
                title: 'Manual Testing',
                skills: ['Test Planning', 'Bug Reporting', 'AEM Testing'],
                icon: '🔍',
              },
              {
                title: 'API Testing',
                skills: ['Postman', 'REST APIs', 'Integration Testing'],
                icon: '🔌',
              },
              {
                title: 'Mobile Testing',
                skills: ['Appium', 'Real Devices', 'Sauce Labs'],
                icon: '📱',
              },
              {
                title: 'Development',
                skills: ['Chrome Extensions', 'JavaScript', 'Java'],
                icon: '💻',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card hover:border-primary-200 border border-transparent"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Looking for a dedicated QA Engineer to ensure your product quality? 
              Let's discuss how I can help your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-all font-semibold"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}