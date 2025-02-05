import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail, Code, GraduationCap, User, Wrench } from "lucide-react";

const portfolioData = {
  name: "Sagar",
  tagline: "Data Science | AI | Software Engineering",
  about:
    "I'm a passionate data scientist and software engineer with over 3 years of experience in data engineering, AI, and machine learning. I specialize in building scalable data-driven solutions, optimizing machine learning workflows, and deploying end-to-end AI applications. My expertise spans cloud computing, big data analytics, and AI model optimization.",
  skills: {
    "Data Engineering": ["SQL", "Apache Iceberg", "BigQuery", "AWS", "GCP", "Terraform", "Airflow", "Docker"],
    "AI Engineering": ["TensorFlow", "PyTorch", "FastAPI", "Flask", "Streamlit"],
    "ML Engineering": ["Scikit-learn", "XGBoost", "Random Forest", "SVM"],
    "Data Science": ["Python", "R", "Pandas", "Tableau", "Apache Superset", "Power BI"],
    "Soft Skills": ["Leadership", "Collaboration", "Problem-Solving", "Communication"]
  },
  projects: [
    { name: "Loan Default Prediction", description: "Predicting loan defaults using ML models.", link: "#", tech: ["Python", "Scikit-learn", "Pandas"] },
    { name: "Apache Iceberg Data Lake", description: "Built an ACID-compliant data lake on AWS S3.", link: "#", tech: ["AWS S3", "Apache Iceberg", "Redshift"] },
    { name: "ShinyProxy Deployment", description: "Deployed 50+ R applications securely.", link: "#", tech: ["Docker", "ShinyProxy", "Nginx"] },
    { name: "Economic Policy & Stock Market", description: "Analyzing FRED economic data’s impact on stock volatility.", link: "#", tech: ["BigQuery", "Tableau"] },
    { name: "E-commerce AWS Deployment", description: "Designed and deployed a scalable e-commerce platform using AWS.", link: "#", tech: ["AWS Lambda", "DynamoDB", "CloudFront"] }
  ],
  education: [
    { degree: "M.S. in Information Management", institution: "University of Maryland", year: "2023-2025" },
    { degree: "B.Tech in Computer Science", institution: "Your Undergrad Institution", year: "XXXX" }
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "#",
    github: "#"
  }
};

export default function Portfolio() {
  return (
    <div className="container mx-auto p-8 grid gap-8">
      <Card className="text-center p-6 shadow-lg">
        <h1 className="text-5xl font-bold flex items-center justify-center gap-2">
          <User className="text-blue-500" /> {portfolioData.name}
        </h1>
        <p className="text-xl text-gray-600">{portfolioData.tagline}</p>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">{portfolioData.about}</p>
      </Card>

      <h2 className="text-2xl font-semibold">Skills & Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(portfolioData.skills).map(([category, skills], index) => (
          <Card key={index} className="p-4 shadow-md hover:scale-105 transition-transform">
            <CardContent>
              <h3 className="font-bold text-lg">{category}</h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-200 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold">Projects Completed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="p-4 shadow-lg hover:scale-105 transition-transform">
            <CardContent>
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-200 rounded-md text-sm">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="text-blue-500 underline block mt-2">View Project</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}