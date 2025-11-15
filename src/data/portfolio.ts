// src/data/portfolio.ts
import { Experience, Project, Skill, Certificate, Hackathon, Competition, Award, Education } from '../app/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Leading American Knife Seller',
    role: 'Associate Consultant',
    duration: 'Feb 2023 - Mar 2024',
    location: 'E-commerce Application',
    type: 'work',
    description: [
      'Automated test cases using WDIO for Angular-based applications (Web/Mobile)',
      'Performed cross-browser and mobile testing using Sauce Labs and real devices',
      'Authored and executed robust automation scripts ensuring functional integrity',
      'Collaborated with developers for defect resolution and quality improvements',
      'Participated actively in Agile ceremonies',
      'Maintained 100% attendance demonstrating strong commitment',
      'Refactored automation scripts for better performance and readability'
    ],
    techStack: ['WDIO', 'Angular', 'Sauce Labs', 'JavaScript', 'Selenium', 'Agile']
  },
  {
    id: '2',
    company: 'Internal Tools',
    role: 'Associate Consultant',
    duration: 'Mar 2024 - Aug 2024',
    location: 'Internal Projects',
    type: 'work',
    description: [
      'Explored ETL Testing using Snowflake and Azure Databricks, validating large-scale data transformations',
      'Successfully migrated an internal Chrome extension from Manifest V2 to Manifest V3',
      'Addressed deprecated APIs, resolved listener issues, and converted code to ES modules',
      'Implemented background messaging, performance script integration, and Promise-based async patterns',
      'Set up Gulp and Webpack build processes to bundle and optimize extension code',
      'Received notable appreciation from original developer team despite being from QA - recognition for strong initiative and development capability'
    ],
    techStack: ['Snowflake', 'Azure Databricks', 'Chrome Extension', 'JavaScript', 'Webpack', 'Gulp', 'ETL Testing']
  },
  {
    id: '3',
    company: 'Global Frozen Foods Manufacturer',
    role: 'QA Tester',
    duration: 'Aug 2024 - Sep 2024',
    location: 'E-commerce Application',
    type: 'work',
    description: [
      'Sole QA responsible for AEM component testing and validation',
      'Rapidly adapted to new domain and identified critical defects',
      'Created onboarding material for ATF scripting and best practices',
      'Successfully delivered project in tight deadlines without leave'
    ],
    techStack: ['AEM', 'Manual Testing', 'ATF Scripting', 'Component Testing']
  },
  {
    id: '4',
    company: 'Tools & Equipment Retailer',
    role: 'Performance QA',
    duration: 'Oct 2024 - Jan 2025',
    location: 'E-commerce Application',
    type: 'work',
    description: [
      'Designed and executed performance tests covering inventory, cart, and checkout flows',
      'Parsed dynamic HTML using Jsoup to tailor test scenarios',
      'Identified bottlenecks and optimized app performance'
    ],
    techStack: ['JMeter', 'Jsoup', 'Performance Testing', 'Load Testing']
  },
  {
    id: '5',
    company: 'Tools & Equipment Retailer',
    role: 'Manual QA',
    duration: 'Jan 2025 - Present',
    location: 'E-commerce Application',
    type: 'work',
    description: [
      'Handled manual testing as a solo tester during critical absence of team',
      'Reported multiple defects and ensured functional reliability',
      'Maintained product quality through comprehensive test coverage'
    ],
    techStack: ['Manual Testing', 'Bug Reporting', 'Test Execution']
  }
];

export const hackathons: Hackathon[] = [
  {
    id: '1',
    name: 'PrivacyMirror',
    title: 'Privacy-Focused Browser Extension',
    description: 'A comprehensive browser extension that helps users understand and control their online privacy by detecting tracking technologies and providing actionable insights.',
    achievement: 'Winner',
    date: '2024',
    techStack: ['JavaScript', 'Chrome Extension API', 'AI/ML', 'Local Storage'],
    highlights: [
      'Detected cookies, trackers, and fingerprinting scripts in real-time',
      'Calculated real-time privacy scores using rule-based AI logic',
      'Suggested privacy-friendly alternatives to users',
      'Implemented 100% offline-first design using local storage only'
    ]
  },
  {
    id: '2',
    name: 'Junk Mapper',
    title: 'Smart Recycling Education App',
    description: 'An innovative Android application that educates users about recyclable materials and connects them with local recycling facilities using intelligent mapping.',
    achievement: 'Winner',
    date: '2024',
    techStack: ['Java', 'XML', 'Machine Learning', 'OpenStreetMap', 'Android'],
    highlights: [
      'Built using Java, XML, and ML models for material recognition',
      'Integrated OpenStreetMap for location-based recycling centers',
      'Educated users about recyclable materials and local recycling instructions',
      'Implemented ML-based material classification system'
    ]
  },
  {
    id: '3',
    name: 'US Techlab Competition',
    title: 'Top 5 Placement',
    description: 'Participated in a prestigious international hackathon organized by US Techlab, competing against talented developers from around the world.',
    achievement: 'Top 5 Team - Honorable Mention',
    date: '2024',
    techStack: ['React', 'Node.js', 'API Integration', 'UI/UX Design'],
    highlights: [
      'Placed in the top 5 teams out of hundreds of participants',
      'Received honorable mention and congratulations from US judges',
      'Demonstrated exceptional problem-solving and teamwork skills',
      'Developed innovative solution under tight time constraints'
    ]
  }
];

export const competitions: Competition[] = [
  {
    id: '1',
    name: 'ALLSPARK Competition',
    title: 'Innovative Tech Talk Presentation',
    description: 'A prestigious tech talk competition where participants present innovative ideas covering problem identification, solution design, implementation strategy, and market impact analysis.',
    achievement: 'Selected for Final Round',
    date: '2024',
    round: 'Finals'
  }
];

export const skills: Skill[] = [
  // Automation Tools
  { id: '1', name: 'WDIO', category: 'automation', proficiency: 95 },
  { id: '2', name: 'Selenium (Java)', category: 'automation', proficiency: 90 },
  { id: '3', name: 'Selenium (Python)', category: 'automation', proficiency: 85 },
  { id: '4', name: 'Playwright', category: 'automation', proficiency: 80 },
  { id: '5', name: 'Cypress', category: 'automation', proficiency: 80 },
  { id: '6', name: 'Appium', category: 'automation', proficiency: 85 },
  { id: '7', name: 'TestNG', category: 'automation', proficiency: 90 },
  
  // Testing Types
  { id: '8', name: 'Manual Testing', category: 'testing', proficiency: 95 },
  { id: '9', name: 'API Testing', category: 'testing', proficiency: 85 },
  { id: '10', name: 'Mobile Testing', category: 'testing', proficiency: 90 },
  { id: '11', name: 'Desktop Testing', category: 'testing', proficiency: 80 },
  { id: '12', name: 'AEM Testing', category: 'testing', proficiency: 85 },
  { id: '13', name: 'ETL Testing', category: 'testing', proficiency: 75 },
  
  // Performance Testing
  { id: '14', name: 'JMeter', category: 'performance', proficiency: 90 },
  { id: '15', name: 'Load Testing', category: 'performance', proficiency: 85 },
  { id: '16', name: 'Performance Analysis', category: 'performance', proficiency: 85 },
  
  // Languages & Tech
  { id: '17', name: 'Java', category: 'languages', proficiency: 85 },
  { id: '18', name: 'JavaScript', category: 'languages', proficiency: 90 },
  { id: '19', name: 'HTML/CSS', category: 'languages', proficiency: 85 },
  { id: '20', name: 'MySQL', category: 'languages', proficiency: 75 },
  { id: '21', name: 'Python', category: 'languages', proficiency: 80 },
  
  // Tools
  { id: '22', name: 'Postman', category: 'tools', proficiency: 90 },
  { id: '23', name: 'GitHub', category: 'tools', proficiency: 85 },
  { id: '24', name: 'VS Code', category: 'tools', proficiency: 95 },
  { id: '25', name: 'Eclipse', category: 'tools', proficiency: 85 },
  { id: '26', name: 'Android Studio', category: 'tools', proficiency: 80 },
  { id: '27', name: 'Sauce Labs', category: 'tools', proficiency: 85 },
  { id: '28', name: 'Snowflake', category: 'tools', proficiency: 70 },
  { id: '29', name: 'Azure Databricks', category: 'tools', proficiency: 70 },
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'ISTQB Certified Tester - Foundation Level',
    issuer: 'ISTQB',
    date: '2023',
    credentialUrl: '#'
  },
  {
    id: '2',
    title: 'LambdaTest Selenium Java - Advanced Certification',
    issuer: 'LambdaTest',
    date: '2023',
    credentialUrl: '#'
  }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'Pat on the Back Award',
    description: 'Recognized for excellence in quality assurance and consistent delivery of high-quality work',
    date: '2023',
    category: 'Performance'
  },
  {
    id: '2',
    title: 'Pat on the Back Award',
    description: 'Second recognition for outstanding contribution to project quality and team collaboration',
    date: '2024',
    category: 'Performance'
  },
  {
    id: '3',
    title: 'Above and Beyond Award',
    description: 'Recognized for exceptional commitment, going beyond expectations, and delivering outstanding results',
    date: '2024',
    category: 'Excellence'
  },
  {
    id: '4',
    title: 'Automation Challenge - Spot Award',
    description: 'Won spot award for successfully completing automation challenges and demonstrating technical excellence',
    date: '2024',
    category: 'Technical'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Engineering',
    institution: 'Surya Group of Institutions & Technologies',
    duration: 'Sep 2018 - 2022',
    location: 'Tamil Nadu, India'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'PrivacyMirror Chrome Extension',
    description: 'Privacy-focused browser extension that detects tracking technologies, calculates privacy scores, and suggests alternatives using AI-powered analysis.',
    image: '/images/projects/privacy-mirror.jpg',
    techStack: ['JavaScript', 'Chrome API', 'AI/ML', 'Local Storage'],
    category: 'Extension Development',
    achievements: ['Hackathon Winner', '100% Offline-First', 'Real-time Analysis']
  },
  {
    id: '2',
    title: 'Junk Mapper Mobile App',
    description: 'Android application for recycling education using ML-based material recognition and OpenStreetMap integration for locating recycling centers.',
    image: '/images/projects/junk-mapper.jpg',
    techStack: ['Java', 'XML', 'Machine Learning', 'OpenStreetMap', 'Android'],
    category: 'Mobile Development',
    achievements: ['Hackathon Winner', 'ML Integration', 'Environmental Impact']
  },
  {
    id: '3',
    title: 'E-commerce Automation Framework',
    description: 'Comprehensive WDIO-based automation framework for Angular e-commerce applications with cross-browser and mobile testing capabilities.',
    image: '/images/projects/automation-framework.jpg',
    techStack: ['WDIO', 'Selenium', 'Angular', 'Sauce Labs', 'JavaScript'],
    category: 'Automation Testing',
    achievements: ['100% Test Coverage', 'CI/CD Integration', 'Multi-platform Support']
  },
  {
    id: '4',
    title: 'Chrome Extension V3 Migration',
    description: 'Successfully migrated complex internal Chrome extension from Manifest V2 to V3, modernizing architecture and improving performance.',
    image: '/images/projects/extension-migration.jpg',
    techStack: ['JavaScript', 'ES Modules', 'Webpack', 'Gulp', 'Chrome API'],
    category: 'Development',
    achievements: ['Team Recognition', 'Performance Optimization', 'Modern Architecture']
  },
  {
    id: '5',
    title: 'Performance Testing Framework',
    description: 'JMeter-based performance testing framework for e-commerce applications with dynamic HTML parsing and bottleneck identification.',
    image: '/images/projects/performance-testing.jpg',
    techStack: ['JMeter', 'Jsoup', 'Performance Testing', 'Load Testing'],
    category: 'Performance Testing',
    achievements: ['Bottleneck Identification', 'Performance Optimization', 'Scalability Testing']
  }
];