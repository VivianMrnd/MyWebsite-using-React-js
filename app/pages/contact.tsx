import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Error response:", result);
        setStatus(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-[#F9FFFE] to-[#F0FFFC] p-5 md:p-8 rounded-2xl shadow-lg space-y-4 dark:from-[#1A2625] dark:to-[#152321]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[#4ECDC4]">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#4ECDC4]">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-[#4ECDC4]">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[#4ECDC4]">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D4F1F9] rounded-xl h-24 md:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#4ECDC4] hover:bg-[#3DBDB4] text-white border-none rounded-xl py-4 md:py-6 text-base md:text-lg shadow-md"
      >
        Send Message
      </button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;