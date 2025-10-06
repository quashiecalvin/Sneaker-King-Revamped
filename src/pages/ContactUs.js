import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';



function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-0">
      {/* Main Content Container */}
      <div
        className="w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://thumbs.dreamstime.com/b/stylish-blue-sneaker-sports-shoe-vector-illustration-70994813.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* Form Container */}
        <div className="w-full max-w-4xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg mb-14 mt-14">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-600">Contact Us</h1>

          {/* Form and Contact Details Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            {/* Left Column - Contact Details */}
            <div className="flex-1 p-6 border border-gray-300 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-600">Get in Touch</h2>
              <p className="text-gray-600 font-semibold mb-4">Feel free to reach out using the details below:</p>
              <p className="flex items-center text-gray-600 mb-2">
                <FaPhoneAlt className="mr-2 text-blue-600" /> 0243228371
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <FaEnvelope className="mr-2 text-blue-600" /> sneakerking@gmail.com
              </p>
              <p className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-600" /> 22 Palas Street
              </p>
            </div>

            {/* Right Column - Send Us a Message Form */}
            <div className="flex-1 p-6 border border-gray-300 rounded-lg bg-white bg-opacity-90 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold mb-4 text-gray-600">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-600">Message</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your Message"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <h1 className="text-3xl font-bold mt-32 text-center text-gray-600">Our Location</h1>
      
      {/* Map Section */}
      <div className="w-full max-w-7xl h-72 rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-80 mt-8 mb-8">
        <iframe
          title="Sneaker King Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9985333411713!2d-122.08424928468991!3d37.422065279821576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02f7686e4b%3A0x4ed31a562c0dd25c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613741665828!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
