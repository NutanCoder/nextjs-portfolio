"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const formData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Message</label>
        <textarea
          rows={4}
          name="message"
          placeholder="Your message..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow transition"
      >
        Send Message
      </button>
    </form>
  );
}
