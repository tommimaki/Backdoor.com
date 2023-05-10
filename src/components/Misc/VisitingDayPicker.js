// components/VisitingDayPicker.js
import { useState } from "react";
import axios from "axios";

const VisitingDayPicker = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const isValidInput = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phonePattern = /^\+?[\d\s\-()]+$/;

    if (
      !name.trim() ||
      !email.trim() ||
      !emailPattern.test(email) ||
      !phone.trim() ||
      !phonePattern.test(phone) ||
      !selectedDate
    ) {
      return false;
    }

    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDateObj <= currentDate) {
      return false;
    }

    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput()) {
      alert("Please enter valid input.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}visit-requests`,
        {
          name,
          email,
          phone,
          date: selectedDate,
        }
      );

      if (response.status === 200 || response.status === 201) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Error submitting visit request", error.message);
    }
  };

  return (
    <div>
      <h3 className="text-2xl text-center mb-4 font-semibold ">
        Book a showing:
      </h3>
      {showSuccess && (
        <div
          class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 "
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Success alert!</span> Request for a
            showing sent for {selectedDate}, we will get back to you with a
            confirmation ASAP!
          </div>
        </div>
      )}
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
          min={new Date().toISOString().split("T")[0]}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <button className="bg-accent text-white font-text  border w-full border-accent rounded-md px-4 py-2 hover:bg-bgLight hover:text-black">
          Suggest A Date!
        </button>
      </form>
    </div>
  );
};

export default VisitingDayPicker;
