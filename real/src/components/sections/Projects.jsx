import React, { useEffect, useState } from "react";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Our Projects</h2>
        <p className="text-center text-gray-600 mb-8">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md overflow-hidden text-center"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
