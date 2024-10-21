// Define the structure of a project document
export interface TProject {
  title: string;
  description: string;
  github: {
    frontend: string;
    backend: string;
  };
  live: string;
  technologies: string[];
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
