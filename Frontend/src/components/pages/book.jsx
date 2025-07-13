import React, { useState } from 'react';

const BookTour = () => {
  const [formData, setFormData] = useState({
    name: '',
    bookingDate: '',
    members: '',
    location: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    console.log("Token in BookTour:", token);
  
    if (!token) {
      alert("Please login to book the tour.");
      return;
    }
  
    try {
      const res = await fetch('https://tour-znrn.onrender.com/api/auth/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
  
      const text = await res.text(); // catch if server returns HTML
      console.log("Raw server response:", text);
  
      if (!res.ok) {
        throw new Error("Booking failed.");
      }
  
      const result = JSON.parse(text);
      setMessage("🎉 Tour booked successfully!");
      setFormData({ name: '', bookingDate: '', members: '', location: '' });
    } catch (err) {
      console.error("Error booking tour:", err.message);
      alert("Booking failed.");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Book Your Tour</h2>
        
        {message && <p className="text-green-600 mb-4 text-center font-semibold">{message}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Booking Date</label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Number of Members</label>
            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g. 4"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Destination</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter location"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTour;
