import React, { useState, useEffect } from 'react';
import { Send, Calendar, Clock, CheckCircle, UploadCloud } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    expectation: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    updateTimer(); // initial call
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
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
    // You will handle the upload separately using Supabase
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
            university: formData.university,
            learningGoal: formData.expectation,
          }),
        }
      );

      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
      console.error("Submission failed:", error);
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
                Secure your spot for this exclusive paid webinar and take the first step toward leveraging AI for your future in tech and entrepreneurship.
              </p>

              <div className="mb-8 bg-white/10 p-6 rounded-xl text-center">
                <h3 className="font-bold text-2xl mb-2">
                  <span className="line-through mr-4 text-gray-300">₹999/-</span>
                  <span>₹299/-</span>
                </h3>
                <p className="text-white/80 mb-4">Grab your seat before the offer ends!</p>
                <div className="text-xl font-mono tracking-wide">{formatTime(timeLeft)}</div>
              </div>

              <div className="text-center">
                <p className="mb-4 text-white/80">Scan & Pay ₹299</p>
                <img
                  src="https://myonlinevipani.com/wp-content/uploads/2020/11/My-Online-Vipani-Google-Pay-QR-Code-300x300.jpg" // make sure this is correctly placed in your `public/` folder
                  alt="QR Code"
                  className="mx-auto w-40 h-40 rounded-md border-2 border-white"
                />
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12">
              {!isSubmitted ? (
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

                  {/* File Upload (handled separately) */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Upload Payment Screenshot
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#179E42]/90 file:text-white file:cursor-pointer hover:file:bg-[#0f7a31]"
                      />
                      <UploadCloud className="text-[#179E42]" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#179E42] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-colors flex items-center justify-center"
                  >
                    Register for Webinar ₹299/- <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-[#179E42]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-[#179E42]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for the AI & Startups webinar. We've sent a confirmation email to{' '}
                    <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <p className="text-gray-600">
                    You'll receive the webinar link and additional details closer to the event date.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
