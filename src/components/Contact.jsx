
"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import Globe from "@/components/contact/Globe";

function ContactInfoItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="group flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Icon
          className="text-[#8fd8a8] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#8fd8a8] group-active:drop-shadow-[0_0_8px_#8fd8a8]"
          size={18}
        />

        <span className="text-white font-semibold text-sm sm:text-base transition-all duration-300 group-hover:text-[#8fd8a8] group-active:text-[#8fd8a8]">
          {label}
        </span>
      </div>

      <p className="text-zinc-400 text-sm sm:text-base pl-7 group-hover:text-zinc-200 transition-colors">
        {value}
      </p>

      <div className="relative h-px w-full bg-white/10 overflow-hidden mt-1">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8fd8a8] to-white opacity-0 group-hover:opacity-100 group-active:opacity-100 animate-shooting-star transition-opacity duration-300" />
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "কিছু একটা ভুল হয়েছে, আবার চেষ্টা করো।"
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-xs sm:text-sm text-zinc-400">
          Name
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#8fd8a8]/60 transition-colors"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-xs sm:text-sm text-zinc-400">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#8fd8a8]/60 transition-colors"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs sm:text-sm text-zinc-400">
          Message
        </label>

        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#8fd8a8]/60 transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white text-sm sm:text-base font-medium px-6 py-3 hover:border-[#8fd8a8] hover:text-[#8fd8a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaPaperPlane size={14} />

        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <p className="text-sm text-[#8fd8a8]">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMsg}
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-[#060810] via-[#0a0e1a] to-[#06070c]"
    >
      {/* Section Heading */}
      <div className="relative z-10 w-full flex items-center justify-center py-6 md:py-10 mb-14 md:mb-20">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-widest text-white/10 whitespace-nowrap select-none pointer-events-none"
        >
          Contact
        </span>

        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] bg-clip-text text-transparent text-center">
          Let&apos;s Connect
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Contact Information */}
        <div className="flex flex-col gap-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-500">
            Get in Touch
          </p>

          <ContactInfoItem
            icon={FaEnvelope}
            label="Email"
            value="shawon4166@gmail.com"
            href="mailto:shawon4166@gmail.com"
          />

          <ContactInfoItem
            icon={FaPhone}
            label="Phone"
            value="+880 1308454166"
            href="tel:+8801308454166"
          />

          <ContactInfoItem
            icon={FaMapMarkerAlt}
            label="Location"
            value="Pabna, Bangladesh"
          />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Desktop Earth Background */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Globe Glow */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[-14%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-[radial-gradient(circle,rgba(143,216,168,0.18)_0%,rgba(143,216,168,0.07)_30%,transparent_62%)]
            blur-2xl
          "
        />

        {/* Globe */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[-24%]
            w-[560px]
            h-[560px]
            opacity-95
            pointer-events-auto
          "
        >
          <Globe />
        </div>
      </div>

      {/* Mobile / Tablet Earth */}
      <div className="lg:hidden relative z-0 flex justify-center mt-2 sm:mt-4 overflow-hidden h-[220px] sm:h-[300px]">
        <div
          className="
            relative
            w-[360px]
            h-[360px]
            sm:w-[480px]
            sm:h-[480px]
            shrink-0
            translate-y-[10px]
            sm:translate-y-[20px]
          "
        >
          <Globe />
        </div>
      </div>
    </section>
  );
}

