import React from "react";

const TEAM = [
  { name: "Jane Doe", role: "Founder and CEO" },
  { name: "John Smith", role: "Chief Technology Officer" },
  { name: "Sara Lee", role: "Head of Marketing" },
  { name: "Mike Brown", role: "Customer Service Manager" },
];

const TESTIMONIALS = [
  {
    quote:
      "GizmoHub has the best electronics selection I've ever seen. Their customer service is top-notch, and they always go the extra mile.",
    author: "Alex Johnson",
  },
  {
    quote:
      "I've purchased several items from GizmoHub, and each time I'm impressed with the quality and quick shipping.",
    author: "Emily Davis",
  },
  {
    quote:
      "Great products, great prices, and fantastic customer support. GizmoHub is my go-to for all my electronic needs.",
    author: "Michael Smith",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About GizmoHub
        </h1>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Company Overview
          </h2>
          <p className="leading-relaxed mb-4">
            Welcome to GizmoHub, your number one source for all things electronics.
            We&apos;re dedicated to providing you with the very best in consumer
            electronics, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="leading-relaxed">
            Founded in 2020, GizmoHub has grown from a home office into a store
            serving customers all over the world.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            Our mission is to provide high-quality electronic products that combine
            performance with value pricing, while building lasting relationships
            with our customers and suppliers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full mb-3 flex items-center justify-center bg-brand-600 text-white text-xl font-semibold">
                  {initials(member.name)}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Customer Testimonials
          </h2>
          <div className="space-y-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg"
              >
                <p className="leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
                <footer className="font-semibold text-gray-900 dark:text-white">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
