"use client";
import React from "react";
import { useAppStore } from "@/store";

const About = () => {
  const isDarkMode = useAppStore((state) => state.night);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } p-8`}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About GizmoHub</h1>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Company Overview</h2>
          <p className="leading-relaxed mb-4">
            Welcome to GizmoHub, your number one source for all things
            electronics. We're dedicated to providing you with the very best in
            consumer electronics, with a focus on quality, customer service, and
            uniqueness.
          </p>
          <p className="leading-relaxed">
            Founded in 2020 by Jane Doe, GizmoHub has come a long way from its
            beginnings in a home office. When Jane first started out, her
            passion for eco-friendly gadgets drove her to start her own
            business. We now serve customers all over the world and are thrilled
            that we're able to turn our passion into our own website.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is to provide high-quality electronic products that
            combine performance with value pricing while establishing a
            successful relationship with our customers and our suppliers. We
            continually strive to meet or exceed our customer needs and
            expectations of price, service, and selection.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <img
                src="/images/team/jane.jpg"
                alt="Jane Doe"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600">Founder and CEO</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <img
                src="/images/team/john.jpg"
                alt="John Smith"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <img
                src="/images/team/sara.jpg"
                alt="Sara Lee"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Sara Lee</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <img
                src="/images/team/mike.jpg"
                alt="Mike Brown"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Mike Brown</h3>
              <p className="text-gray-600">Customer Service Manager</p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Customer Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="leading-relaxed mb-4">
                "GizmoHub has the best electronics selection I've ever seen.
                Their customer service is top-notch, and they always go the
                extra mile to ensure customer satisfaction."
              </p>
              <h3 className="text-xl font-semibold">- Alex Johnson</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="leading-relaxed mb-4">
                "I've purchased several items from GizmoHub, and each time I'm
                impressed with the quality and quick shipping. Highly recommend
                this site!"
              </p>
              <h3 className="text-xl font-semibold">- Emily Davis</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="leading-relaxed mb-4">
                "Great products, great prices, and fantastic customer support.
                GizmoHub is my go-to for all my electronic needs."
              </p>
              <h3 className="text-xl font-semibold">Michael Smith</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
