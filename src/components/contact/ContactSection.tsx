"use client";

import React, { useState } from "react";
import { PROFILE_DATA } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, FileDown, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const hasFormEndpoint = Boolean(
    PROFILE_DATA.TODO_FORM_ENDPOINT &&
    !PROFILE_DATA.TODO_FORM_ENDPOINT.startsWith("TODO")
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasFormEndpoint) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(PROFILE_DATA.TODO_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Transmission failed. Please use direct email link.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please transmit directly to email.");
    }
  };

  const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
    formData.subject || "Mobile Engineering & Product Opportunity"
  )}&body=${encodeURIComponent(
    `Hi Hameesh,\n\n${formData.message || "I would like to discuss a Flutter engineering opportunity."}\n\nBest regards,\n${formData.name || ""}`
  )}`;

  return (
    <section id="contact" className="py-20" aria-label="Direct Channels and Transmission">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Transmission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Initiate Contact
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-400">
            DIRECT INBOX CHANNEL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-5">
              <span className="font-mono text-xs text-cyan-400 block font-semibold">
                COMMUNICATION ENDPOINTS
              </span>

              <p className="text-sm text-slate-300 leading-relaxed">
                Available for Flutter Developer and Product Engineering roles requiring high-reliability mobile architecture, white-label scaling, and pragmatic client-side security.
              </p>

              {/* Direct email card */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-3.5 p-3.5 bg-white/[0.03] rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all group focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Primary Email
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                </a>

                {/* Direct phone card */}
                {PROFILE_DATA.phone && (
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3.5 p-3.5 bg-white/[0.03] rounded-xl border border-white/10 hover:border-indigo-400/50 hover:bg-white/[0.06] transition-all group focus-visible:outline-2 focus-visible:outline-cyan-400"
                  >
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Voice / WhatsApp
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {PROFILE_DATA.phone}
                      </span>
                    </div>
                  </a>
                )}

                {/* Location card */}
                <div className="flex items-center gap-3.5 p-3.5 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Base Location
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white">
                      {PROFILE_DATA.location} (IST / UTC+5:30)
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume download button */}
              <div className="pt-2 border-t border-white/5">
                <a
                  href={PROFILE_DATA.TODO_RESUME_PDF}
                  download="Mohamed-Hameesh-C-Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-xl font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 focus-visible:outline-2 focus-visible:outline-cyan-400"
                  aria-label="Download resume (PDF)"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form / Direct Launcher Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-3">
                <span className="text-white font-semibold flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Transmission Dispatch
                </span>
                <span className="text-emerald-400 font-medium">Status: Ready</span>
              </div>

              {hasFormEndpoint ? (
                /* Configured Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Sender Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor (Acme Corp)"
                      className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Return Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@acmecorp.com"
                      className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Subject / Role Context
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Mobile Engineer opportunity / Project inquiry"
                      className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Transmission Payload (Message)
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details regarding your platform, team requirements, or project scope..."
                      className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs font-mono text-red-400 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {status === "success" && (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Transmission received successfully. I will follow up shortly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full gap-2 font-semibold text-sm py-3 rounded-xl"
                  >
                    <Send className="h-4 w-4" />
                    <span>{status === "submitting" ? "Transmitting..." : "Send Transmission"}</span>
                  </Button>
                </form>
              ) : (
                /* Direct 1-Click Mail Launcher */
                <div className="space-y-4">
                  <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 space-y-2">
                    <span className="font-mono text-xs text-cyan-300 block font-semibold">
                      DIRECT INBOX TRANSMISSION
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      To guarantee prompt response and zero spam drop, direct transmissions open seamlessly in your email client.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1 font-medium">
                        Quick Topic / Context
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Flutter Engineer position at [Company]"
                        className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1 font-medium">
                        Message Preview
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Hameesh, I'd like to discuss a Flutter engineering opportunity..."
                        className="w-full px-4 py-2.5 bg-white/[0.04] rounded-xl border border-white/10 focus:border-cyan-400 text-sm font-sans text-white outline-none transition-colors resize-none"
                      />
                    </div>

                    <a
                      href={mailtoUrl}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Transmit Email to hameeshkinki@gmail.com</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
