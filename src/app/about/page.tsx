// src/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Target, Heart, Zap, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality First',
      description: 'Committed to delivering exceptional quality in every project, ensuring robust and reliable software solutions.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'Always staying updated with latest testing tools, methodologies, and industry best practices.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Strong believer in agile methodologies and effective communication with cross-functional teams.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly exploring new approaches to automate and optimize testing processes for better efficiency.'
    }
  ];

  const highlights = [
    '2.5+ years of comprehensive QA experience',
    '100% attendance record demonstrating strong commitment',
    'Successfully delivered 5+ major e-commerce projects',
    'Multiple awards for excellence and outstanding performance',
    'Expertise in both manual and automation testing',
    'Proven track record in performance optimization',
    'Chrome extension development experience',
    'Active hackathon participant with multiple wins'
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate QA Engineer dedicated to ensuring software excellence through comprehensive testing strategies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-profile.jpg"
                  alt="Kishorkumar Dhanabose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a meticulous QA Engineer with nearly 2.5 years of experience across 
                Manual, Automation, AEM, and Performance Testing. My journey in quality 
                assurance has been marked by a proven track record of delivering high-quality 
                solutions for web, mobile, and API layers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My expertise extends beyond traditional testing - I've developed innovative 
                automation scripts and even created Chrome extensions, reflecting my 
                adaptability and commitment to excellence. I believe in going above and 
                beyond to ensure every product meets the highest quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets me apart is my ability to rapidly adapt to new domains, maintain 
                100% attendance demonstrating strong commitment, and consistently receive 
                recognition for exceptional performance. Whether it's solo testing during 
                critical periods or collaborating with large teams, I deliver results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">2.5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-accent-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">4+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Attendance</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3"
              >
                <Award className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            "Quality is not an act, it is a habit. I believe in meticulous attention to detail, 
            continuous improvement, and delivering excellence in every line of code tested. 
            My goal is not just to find bugs, but to prevent them and ensure the best possible 
            user experience."
          </p>
        </motion.div>
      </div>
    </div>
  );
}