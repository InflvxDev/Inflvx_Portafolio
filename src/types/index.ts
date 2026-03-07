export interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link?: string;
  repo?: string;
  web?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: {
    start: { year: number; month: string };
    end: { year: number; month: string };
  };
  description: string;
  technologies: string[];
  tools?: string[];
  achievements: string[];
}
