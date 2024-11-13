import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Calendar, MessageCircle, X, Heart, Baby, Stethoscope, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  const slides = [
    {
      title: "Providing Comprehensive Maternity & Surgical Care",
      subtitle: "In a Safe and Caring Environment",
      image: "/hero1.jpeg"
    },
    {
      title: "Expert Medical Care for Women and Children",
      subtitle: "State-of-the-Art Facilities & Experienced Doctors",
      image: "/hero2.jpeg"
    }
  ];

  const services = [
    { icon: Baby, title: 'Maternity Care', desc: 'Comprehensive care for expectant mothers' },
    { icon: Activity, title: 'Surgical Laparoscopy', desc: 'Advanced minimally invasive procedures' },
    { icon: Heart, title: 'Gynecology', desc: "Complete women's healthcare services" },
    { icon: Stethoscope, title: 'Pediatrics', desc: 'Specialized care for children' }
  ];

  const doctors = [
    {
      name: "Dr. T. Chaithanya Sravanti",
      specialty: "Obstetrics and Gynecology (OBG)",
      regNumber: "60674",
      image: "https://api.dicebear.com/6.x/avataaars/svg?seed=DrPraveen"

    },
    {
      name: "Dr.Praveen Sirasani",
      specialty: "General Surgery (GS)",
      regNumber: "61964",
      image: "https://api.dicebear.com/6.x/avataaars/svg?seed=DrSravanti"

    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span>Our Nursing Home sees over 1000+ patients every month</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              8344 27 1555
            </span>
            <span>|</span>
            <span>Mon-Fri: 8am – 7pm</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Sravanti Nursing Home Logo" className="w-16 h-16 mr-2" />
              <span className="text-2xl font-bold text-blue-600">Sravanti Nursing Home</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {['Home', 'About Us', 'Services', 'Our Doctors', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-blue-600 transition duration-300">
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
              </motion.button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Medical Care"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
                <p className="text-xl mb-8">{slides[currentSlide].subtitle}</p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Book Appointment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Doctors */}
        <section id="our-doctors" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Expert Doctors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full md:w-1/3 object-cover h-48 md:h-auto"
                    />
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                      <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                      <p className="text-gray-600 mb-4">Registration Number: {doctor.regNumber}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                      >
                        Book Appointment
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Phone, title: "Emergency Cases", content: ["24/7 Emergency Support", "8344 27 1555"] },
                { icon: Clock, title: "Working Hours", content: ["Monday - Friday: 8:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM"] },
                { icon: MapPin, title: "Location", content: ["123 Hospital Street", "Hyderabad, Telangana"] }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.content.map((line, i) => (
                    <p key={i} className={i === 0 ? "mb-2" : ""}>{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Sravanti Nursing Home provides comprehensive maternity and surgical care in a safe and caring environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Our Services', 'Our Doctors', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title} className="text-gray-400">{service.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  8344 27 1555
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  info@sravantinursinghome.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  123 Hospital Street, Hyderabad
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sravanti Nursing Home. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        {chatOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-xl w-80"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Live Chat</h3>
              <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm">How can we help you today?</p>
              <textarea
                placeholder="Type your message here..."
                rows={3}
                className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatOpen(true)}
            className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
