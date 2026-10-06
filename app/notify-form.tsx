"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="rounded-3xl bg-white/15 px-6 py-3 font-display text-lg font-semibold text-zappy-yellow">
        Yay! We&apos;ll ping you when we launch 🎉
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send the email to a backend / mailing list service.
        setSubmitted(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-xl"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="Enter your email"
        autoComplete="email"
        inputMode="email"
        className="h-12 w-full min-w-0 rounded-full bg-white px-5 text-base text-zinc-900 sm:flex-1 placeholder:text-zinc-400 outline-none focus-visible:ring-2 focus-visible:ring-zappy-yellow sm:bg-transparent sm:focus-visible:ring-0"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-zappy-yellow px-6 font-display text-lg font-bold text-zappy-red-dark transition-transform hover:scale-105 active:scale-95"
      >
        Notify me
      </button>
    </form>
  );
}
