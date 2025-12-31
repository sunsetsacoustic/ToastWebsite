"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, FormEvent } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";

function ContactContent() {
    const searchParams = useSearchParams();
    const [defaultMessage, setDefaultMessage] = useState("");

    // Form State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const type = searchParams.get("type");
        if (type === "mini") {
            setDefaultMessage("I'm interested in the TOAST Mini Package! 🥤");
        }
    }, [searchParams]);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            date: formData.get("date"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            setStatus("success");
            // Reset form
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center space-y-6"
            >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
                <div>
                    <h3 className="text-3xl font-serif text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400 max-w-md mx-auto">
                        Thanks for reaching out! We've received your inquiry and will get back to you shortly with a quote.
                    </p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-brand-primary hover:text-white transition-colors underline underline-offset-4"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                    >
                        Name
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white/90 focus:outline-none focus:border-white transition-colors"
                    />
                    <label
                        htmlFor="date"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
                    >
                        Date
                    </label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                    >
                        Email
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                    >
                        Phone
                    </label>
                </div>
            </div>

            <div className="relative group">
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder=" "
                    defaultValue={defaultMessage}
                    key={defaultMessage}
                />
                <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                >
                    Tell us about your event
                </label>
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                    <AlertCircle size={20} />
                    <p className="text-sm">{errorMessage}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-5 rounded-xl uppercase tracking-widest hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send Inquiry"
                )}
            </button>
        </form>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-brand-dark pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">You're Invited.</h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Ready to elevate your event? Let's start the conversation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl min-h-[600px] flex items-center justify-center"
                >
                    <div className="w-full">
                        <Suspense fallback={<div className="text-center text-white/50">Loading form...</div>}>
                            <ContactContent />
                        </Suspense>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
