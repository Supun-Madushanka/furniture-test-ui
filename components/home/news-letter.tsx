"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8 md:px-12 rounded-2xl"
        style={{ backgroundColor: "var(--olive)" }}
      >

        {/* Left - Icon + Text */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-semibold text-white">
              Stay inspired
            </span>
            <span className="text-sm text-white/70">
              Join our newsletter for new arrivals, offers & inspiration.
            </span>
          </div>
        </div>

        {/* Right - Email Input */}
        <div className="flex items-center w-full md:w-auto">
          <div className="flex items-center bg-white rounded-full px-4 py-2 gap-2 w-full md:w-80">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Enter your email"
              className="flex-1 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none"
            />
            <button
              onClick={handleSubmit}
              className="shrink-0 w-8 h-8 rounded-full bg-olive flex items-center justify-center hover:bg-olive/80 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-background" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}