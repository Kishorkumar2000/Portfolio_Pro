export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  techStack?: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  category?: string;
  achievements?: string[];
};

export type Skill = {
  id: string;
  name: string;
  category?: string;
  proficiency?: number;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export type Hackathon = {
  id: string;
  name: string;
  title?: string;
  description?: string;
  achievement?: string;
  date?: string;
  techStack?: string[];
  highlights?: string[];
};

export type Competition = {
  id: string;
  name: string;
  title?: string;
  description?: string;
  achievement?: string;
  date?: string;
  round?: string;
};

export type Award = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  duration?: string;
  location?: string;
};
