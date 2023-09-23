export interface ProjectInterface {
    id: string;
    description?: string;
    preview: {
      title: string;
      description: string;
      logo: string;
      link?: string;
      code?: string;
      shortStack: string;
    };
    techStack: string[];
    features: string[];
    mockup?: string;
    responsibilities?: string;
  }
  