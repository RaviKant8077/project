import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/29602431/pexels-photo-29602431/free-photo-of-cozy-workspace-with-coffee-and-tablet-in-istanbul-cafe.jpeg')",
            }}>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg relative z-10">
                <h1 className="text-4xl font-bold text-center mb-6">Contact us</h1>
                <p className="text-gray text-center mb-4">
                    We would love to hear from you! Please fill out the form below to get in touch with us or contact us directly.
                </p>
                <form className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="block text-2xl font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            required
                            className="block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="block text-2xl font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            className="block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="block text-2xl font-medium text-gray-700">Message</label>
                        <textarea
                            rows="5"
                            required
                            className="block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Submit
                    </button>
                </form>

                {/* Contact Info Section */}
                <div className="mt-8 text-center">
                    <h1 className="text-lg font-semibold">Contact Information</h1>
                    <div className="flex flex-col items-center space-y-2 mt-4">
                        <div className="flex items-center">
                            <FaPhone className="text-blue-500 mr-2" />
                            <span className="text-gray-700">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-500 mr-2" />
                            <span className="text-gray-700">findursoul@radhey.com</span>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={() => setShowMap(true)}>
                            <FaMapMarkedAlt className="text-blue-500 mr-2" />
                            <span className="text-blue-600 underline">Goverdhan-prikrama Talhati, Goverdhan 281502</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {showMap && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-3xl p-4 relative">
                        <button
                            onClick={() => setShowMap(false)}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                        <div className="flex items-center  space-x-6 mb-4">
                            <img
                                src="https://staticimg.amarujala.com/assets/images/2019/05/17/danghati-mandir_1558113633.jpeg?w=750"
                                alt="Location"
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="text-gray-800 font-semibold">
                                Goverdhan-prikrama Talhati, Goverdhan 281502
                            </div>
                        </div>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56349.71154388173!2d77.45668295!3d27.529477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973739ae0dc8f8f%3A0x1f478c1c0b2577a2!2sGovardhan%2C%20Uttar%20Pradesh%20281502%2C%20India!5e0!3m2!1sen!2sin!4v1649423604430!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
