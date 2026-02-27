"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // For now, just simulate form submission
    // Replace with actual form handler (Formspree, Server Action, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="py-8 text-center">
        <p className="font-heading text-xl font-semibold text-primary">
          Message Sent!
        </p>
        <p className="mt-2 text-muted">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1.5 w-full rounded-2xl border border-border bg-card-alt px-4 py-3 text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-primary focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5 w-full rounded-2xl border border-border bg-card-alt px-4 py-3 text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-primary focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground"
        >
          Phone{" "}
          <span className="text-muted">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1.5 w-full rounded-2xl border border-border bg-card-alt px-4 py-3 text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-primary focus:outline-none"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none rounded-2xl border border-border bg-card-alt px-4 py-3 text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-primary focus:outline-none"
          placeholder="How can we help you?"
        />
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
