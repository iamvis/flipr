import React, { useEffect, useState } from "react";

export default function AdminPanel() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForms, setContactForms] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch("/api/projects").then((res) => res.json()).then((data) => setProjects(data));
    fetch("/api/clients").then((res) => res.json()).then((data) => setClients(data));
    fetch("/api/contact").then((res) => res.json()).then((data) => setContactForms(data));
    fetch("/api/subscribers").then((res) => res.json()).then((data) => setSubscribers(data));
  }, []);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">Admin Panel</h1>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Project Management</h2>
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              addProject({
                image: formData.get("image"),
                name: formData.get("name"),
                description: formData.get("description"),
              });
            }}
          >
            <input type="text" name="name" placeholder="Project Name" className="border p-2 mb-2 w-full" />
            <input type="text" name="image" placeholder="Project Image URL" className="border p-2 mb-2 w-full" />
            <textarea
              name="description"
              placeholder="Project Description"
              className="border p-2 mb-2 w-full"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Project
            </button>
          </form>
        </div>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="p-2 border mb-2">
              {project.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Client Management</h2>
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              addClient({
                image: formData.get("image"),
                name: formData.get("name"),
                description: formData.get("description"),
                designation: formData.get("designation"),
              });
            }}
          >
            <input type="text" name="name" placeholder="Client Name" className="border p-2 mb-2 w-full" />
            <input type="text" name="image" placeholder="Client Image URL" className="border p-2 mb-2 w-full" />
            <textarea
              name="description"
              placeholder="Client Description"
              className="border p-2 mb-2 w-full"
            ></textarea>
            <input
              type="text"
              name="designation"
              placeholder="Client Designation"
              className="border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Client
            </button>
          </form>
        </div>
        <ul>
          {clients.map((client, index) => (
            <li key={index} className="p-2 border mb-2">
              {client.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Contact Form Responses</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {contactForms.map((form, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{form.name}</td>
                <td className="border px-4 py-2">{form.email}</td>
                <td className="border px-4 py-2">{form.mobile}</td>
                <td className="border px-4 py-2">{form.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Subscribed Users</h2>
        <ul className="bg-white shadow-md rounded-md p-4">
          {subscribers.map((subscriber, index) => (
            <li key={index} className="border-b py-2">
              {subscriber.email}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
