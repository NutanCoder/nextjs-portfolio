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

    // Hide success after 5s
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-lg transition"
    >
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 focus:ring focus:ring-blue-400 outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 focus:ring focus:ring-blue-400 outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          rows={4}
          name="message"
          placeholder="Your message..."
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 focus:ring focus:ring-blue-400 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 w-full cursor-pointer hover:bg-blue-700 disabled:opacity-60 text-white font-medium px-6 py-2 rounded-md shadow transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-3">
          ✅ Your message was sent successfully!
        </p>
      )}
    </form>
  );
}
