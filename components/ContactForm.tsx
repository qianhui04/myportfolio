"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="mono text-xs text-muted uppercase">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-sm border border-line bg-bg px-3 py-2 text-text"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="mono text-xs text-muted uppercase">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-sm border border-line bg-bg px-3 py-2 text-text"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="mono text-xs text-muted uppercase">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y rounded-sm border border-line bg-bg px-3 py-2 text-text"
        />
      </label>
      <button
        type="submit"
        className="justify-self-start rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-[#111]"
      >
        Send message
      </button>
      {status === "sent" ? (
        <p className="text-sm text-muted" role="status">
          Opening your email client. If nothing happens, write directly to {site.email}.
        </p>
      ) : null}
    </form>
  );
}
