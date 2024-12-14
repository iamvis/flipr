import React, { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/api/clients") // Replace this URL with your backend endpoint
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 text-sm mb-4">{client.description}</p>
              <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
              <p className="text-sm text-blue-500">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
