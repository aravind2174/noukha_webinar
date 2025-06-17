import React, { useState, useEffect } from "react";
import { Send, Calendar, Clock, CheckCircle, UploadCloud } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    expectation: "",
  });
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const elapsed = (minutes % 30) * 60 + seconds;
      const remaining = 1800 - elapsed;
      setTimeLeft(remaining);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    console.log("File selected for upload:", file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxhH0OlLup8EpqJuJAqloxHwo5MSApxDHYLZlOGUVsGZq2vN4WdnBYlM6Rv0Du2YZpk/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            university: formData.university,
            learningGoal: formData.expectation,
          }),
        }
      );

      // Redirect to Google Form after successful data submission
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSd7haLkR0iOrrpMDYVPYF_eBLs2oRCiMYywN-_9_dNu9M1ZDg/viewform?usp=header";
    } catch (error) {
      console.error("Submission failed:", error);
      // Still redirect to Google Form even if fetch fails
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSd7haLkR0iOrrpMDYVPYF_eBLs2oRCiMYywN-_9_dNu9M1ZDg/viewform?usp=header";
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch shadow-xl rounded-xl overflow-hidden">
            <div className="lg:w-1/2 bg-[#179E42] p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
              <p className="text-white/90 text-lg mb-6">
                Secure your spot for this exclusive paid workshop and take the first step toward leveraging AI for your future in tech and entrepreneurship.
              </p>

              <div className="mb-8 bg-white/10 p-6 rounded-xl text-center">
                <h3 className="font-bold text-2xl mb-2">
                  <span className="line-through mr-4 text-gray-300">₹999/-</span>
                  <span>₹299/-</span>
                </h3>
                <p className="text-white/80 mb-4">Grab your seat before the offer ends!</p>
                <div className="text-xl font-mono tracking-wide">{formatTime(timeLeft)}</div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                    placeholder="Your WhatsApp number"
                  />
                </div>

                <div>
                  <label htmlFor="university" className="block text-gray-700 font-medium mb-2">
                    University/Institution
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                    placeholder="Your university or institution"
                  />
                </div>

                <div>
                  <label htmlFor="expectation" className="block text-gray-700 font-medium mb-2">
                    What do you hope to learn?
                  </label>
                  <textarea
                    id="expectation"
                    name="expectation"
                    value={formData.expectation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent h-32 resize-none"
                    placeholder="I'm interested in learning about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#179E42] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-colors flex items-center justify-center"
                >
                  Click here to Make the payment <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
