// components/VisitingDayPicker.js
import { useState } from "react";

const VisitingDayPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting request for a showing on ${selectedDate}`);
    // Submit the data to the server or API here.
  };

  return (
    <div>
      <h3 className="text-xl text-center font-semibold ">Book a showing:</h3>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          placeholder="John Doe"
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          placeholder="name@example.com"
        />
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          placeholder="+1 (555) 123-4567"
        />
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <button type="submit" className="greenButton">
          Suggest a date
        </button>
      </form>
    </div>
  );
};

export default VisitingDayPicker;
