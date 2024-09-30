import React, { useState } from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoMdCall } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
// import ContactWithCaptcha from './contact-with-captcha';
// import ContactWithoutCaptcha from './contact-without-captcha';

const personalData = {
  email: 'kulkarnichaitanya001@gmail.com',
  phone: '+91 9359386557',
  address: 'Ap Gheradi Tal.Sangola Dist. Solapur',
  github: 'https://github.com/your_profile',
  linkedIn: 'https://linkedin.com/in/your_profile',
  twitter: 'https://twitter.com/your_profile',
  stackOverflow: 'https://stackoverflow.com/users/your_profile',
  facebook: 'https://facebook.com/your_profile',
};

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const loginUser = async () => {
    const url = 'https://whiskerwag-backend.onrender.com/api/token/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'new_user',
          password: 1234,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();
      return data; // This could include tokens or user info
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendEmail = async () => {
    const url = 'https://whiskerwag-backend.onrender.com/api/send-email/';

    try {
      const token = await loginUser();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.access}`, // Use the actual token here
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to send email:', errorData);
        throw new Error(errorData.detail || 'Failed to send email');
      }

      const data = await response.json();
      console.log('Email sent successfully:', data);
      return data; // Response data if needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div id="contact" className="my-12 ml-24 h-screen lg:my-16 text-white relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <form className="flex flex-col gap-5 lg:gap-9" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 border rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md transition duration-300 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="lg:w-3/4 flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-lg flex items-center gap-3">
            <MdAlternateEmail className="text-blue-500" size={24} />
            <span>{personalData.email}</span>
          </p>
          <p className="text-lg flex items-center gap-3">
            <IoMdCall className="text-blue-500" size={24} />
            <span>{personalData.phone}</span>
          </p>
          <p className="text-lg flex items-center gap-3">
            <CiLocationOn className="text-blue-500" size={24} />
            <span>{personalData.address}</span>
          </p>

          <div className="flex space-x-4 mt-4">
            <a target="_blank" href={personalData.github}>
              <IoLogoGithub className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300" size={40} />
            </a>
            <a target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300" size={40} />
            </a>
            <a target="_blank" href={personalData.twitter}>
              <FaXTwitter className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300" size={40} />
            </a>
            <a target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300" size={40} />
            </a>
            <a target="_blank" href={personalData.facebook}>
              <FaFacebook className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300" size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
