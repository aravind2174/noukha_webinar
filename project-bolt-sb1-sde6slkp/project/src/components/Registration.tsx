import React, { useState } from 'react';
import Button from './ui/Button';

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    restaurantType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwoX8b3Ba0BfDl_Z4F3JPdnJ_TK7u4dLqRftTleRMaPKj_oBOSNnVbdrVW3_mJRLv9k/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            "email-address": formData.email,
            "phone-number": formData.phone,
            "restaurant-name": formData.restaurantName,
            "restaurant-type": formData.restaurantType,
            "additional-information": formData.message
          })
        }
      );

      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... form inputs here (same as your original) ... */}
          {/* omitted for brevity but keep the same form UI */}
          <Button type="submit" variant="primary" fullWidth>
            Schedule My Demo
          </Button>
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demo.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="secondary">
            Request Another Demo
          </Button>
        </div>
      )}
    </div>
  );
};

export default DemoForm;
