import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '5',
    incidentType: '',
    contactPreference: 'email',
    phone: '', // New phone number field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced form validation (optional):
    // - Check for empty required fields
    // - Validate email format if contactPreference is 'email'
    // - Display appropriate error messages if validation fails

    console.log(formData);
    alert('Thank you for your feedback!');

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: '5',
      incidentType: '',
      contactPreference: 'email',
      phone: '', // Clear the phone number field
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-navy">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-navy">Police Service Feedback</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-navy">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
              required
            />
          </div>
          <div>
            <label className="block text-navy">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
              required
            />
          </div>
          <div>
            <label className="block text-navy">Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-navy">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
            >
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Good</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
          </div>
          <div>
            <label className="block text-navy">Incident Type (Optional)</label>
            <select
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
            >
              <option value="">-- Select --</option>
              <option value="crime">Crime</option>
              <option value="traffic">Traffic</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-navy">Preferred Contact Method:</label>
            <div className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={formData.contactPreference === 'email'}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Email</label>
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                checked={formData.contactPreference === 'phone'}
                onChange={handleChange}
                className="ml-4 mr-2"
              />
              <label>Phone</label>
            </div>
          </div>
          <div>
            <label className="block text-navy">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-navy rounded-md focus:outline-none focus:ring focus:ring-navy"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy text-white py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-navy"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
