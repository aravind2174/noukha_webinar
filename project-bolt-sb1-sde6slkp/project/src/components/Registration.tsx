import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    expectation: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxhH0OlLup8EpqJuJAqloxHwo5MSApxDHYLZlOGUVsGZq2vN4WdnBYlM6Rv0Du2YZpk/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
        }
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
      setIsSubmitted(true); // still show success (no-cors won't return error)
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'phone', 'university'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block mb-2 font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                type="text"
                required
                value={(formData as any)[field]}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          ))}
          <div>
            <label htmlFor="expectation" className="block mb-2 font-medium text-gray-700">
              What do you expect to learn?
            </label>
            <textarea
              id="expectation"
              name="expectation"
              value={formData.expectation}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md flex items-center"
          >
            Register Now <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      ) : (
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-bold">Registration Successful</h3>
          <p>Thanks for registering! You’ll receive the link via email soon.</p>
        </div>
      )}
    </div>
  );
};

export default Registration;
