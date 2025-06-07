import React, { useState, useEffect } from 'react';
import { Send, Calendar, Clock, CheckCircle } from 'lucide-react';

const Registration = () => {
  // ** IMPORTANT: Your Deployed Google Apps Script Web App URL **
  const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzq0qXvLEW00o5hpxg5OzAmpUyXayP8o_gc2EZgtVhueocN4KcpnD8Szw1r0DXUOGgT/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    expectation: '',
    screenshot: null, // Stores the File object
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [submissionError, setSubmissionError] = useState(null); // State to hold submission errors

  // Timer logic for the offer countdown
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const elapsed = (minutes % 30) * 60 + seconds; // Resets every 30 minutes
      const remaining = 1800 - elapsed; // 1800 seconds = 30 minutes
      setTimeLeft(remaining);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  // Handles text and textarea input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles file input changes (for screenshot)
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, screenshot: file }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null); // Clear any previous errors

    // Create a FormData object to send form data, including the file
    const submissionData = new FormData();
    submissionData.append('fullName', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('university', formData.university);
    submissionData.append('learningGoal', formData.expectation);
    if (formData.screenshot) {
      // Append the file using its original name
      submissionData.append('screenshot', formData.screenshot, formData.screenshot.name);
    }

    try {
      const response = await fetch(
        APPS_SCRIPT_WEB_APP_URL, // Use the defined Apps Script URL
        {
          method: 'POST',
          body: submissionData, // FormData object handles multipart/form-data
        }
      );

      // Check if the HTTP response was successful
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }

      // Parse the JSON response from Apps Script
      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        console.log('Registration successful! Image URL:', result.imageUrl);
        // Optionally, clear the form after successful submission
        // setFormData({ name: '', email: '', university: '', expectation: '', screenshot: null });
      } else {
        // Handle error reported by Apps Script
        setSubmissionError(result.error || 'Submission failed on server side.');
        console.error('Submission failed:', result.error);
      }
    } catch (error) {
      // Handle network errors or other client-side issues
      setSubmissionError(error.message || 'An unexpected error occurred during submission.');
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch shadow-xl rounded-xl overflow-hidden">
            {/* Left Section: Webinar Details and Timer */}
            <div className="lg:w-1/2 bg-[#179E42] p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
              <p className="text-white/90 text-lg mb-6">
                Secure your spot for this exclusive paid webinar and take the first step toward leveraging AI for your future in tech and entrepreneurship.
              </p>
              <div className="mb-8 bg-white/10 p-6 rounded-xl text-center">
                <h3 className="font-bold text-2xl mb-2">
                  <span className="line-through mr-4 text-gray-300">₹799/-</span>
                  <span>₹99/-</span>
                </h3>
                <p className="text-white/80 mb-4">Grab your seat before the offer ends!</p>
                <div className="text-xl font-mono tracking-wide">{formatTime(timeLeft)}</div>
              </div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">June 15, 2025</h3>
                    <p className="text-white/80">Mark your calendar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">10:00 AM - 11:00 AM (IST)</h3>
                    <p className="text-white/80">1 hour of pure insight + live Q&A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Registration Form / Success Message */}
            <div className="lg:w-1/2 bg-white p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42]" placeholder="Your full name" />
                  </div>
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42]" placeholder="Your email address" />
                  </div>
                  {/* University/Institution */}
                  <div>
                    <label htmlFor="university" className="block text-gray-700 font-medium mb-2">University/Institution</label>
                    <input type="text" id="university" name="university" value={formData.university} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42]" placeholder="Your university or institution" />
                  </div>
                  {/* Learning Goal */}
                  <div>
                    <label htmlFor="expectation" className="block text-gray-700 font-medium mb-2">What do you hope to learn?</label>
                    <textarea id="expectation" name="expectation" value={formData.expectation} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] h-32 resize-none" placeholder="I'm interested in learning about..." />
                  </div>
                  {/* Payment Details (QR Code) */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Make Payment (₹99/-)</label>
                    <details className="bg-gray-100 p-4 rounded-md cursor-pointer">
                      <summary className="cursor-pointer font-medium text-[#179E42]">Show QR Code</summary>
                      <div className="mt-4 text-center">
                        <img src="https://res.cloudinary.com/dhn6uszk0/image/upload/v1749282975/WhatsApp_Image_2025-06-07_at_13.24.46_2bbd4448_hn4z3d.jpg" alt="QR Code" className="mx-auto max-w-[200px] rounded" />
                        <p className="mt-2 text-sm text-gray-600">Scan to pay ₹99/-</p>
                      </div>
                    </details>
                  </div>
                  {/* Payment Screenshot Upload */}
                  <div>
                    <label htmlFor="screenshot" className="block text-gray-700 font-medium mb-2">Upload Payment Screenshot</label>
                    <input type="file" id="screenshot" name="screenshot" accept="image/*" onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42]" required />
                  </div>

                  {/* Submission Button */}
                  <button type="submit" className="w-full bg-[#179E42] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-colors flex items-center justify-center">
                    Register for Webinar ₹99/- <Send className="ml-2 h-5 w-5" />
                  </button>

                  {/* Submission Error Message */}
                  {submissionError && (
                    <p className="text-red-600 text-sm mt-2">Error: {submissionError}</p>
                  )}
                </form>
              ) : (
                // Success Message
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
