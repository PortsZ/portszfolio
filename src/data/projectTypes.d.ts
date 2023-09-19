export interface ProjectInterface {
    id: string;
    preview: {
      title: string;
      description: string;
      logo: string;
      shortStack: string;
    };
    techStack: string[];
    features: string[];
  }
  