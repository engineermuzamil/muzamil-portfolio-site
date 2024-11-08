import React from 'react';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';

export default function Contact() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 54a4e1c (fix: update id of every section)
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Get in Touch</h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
=======
    <section className="container mx-auto px-4 py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Get in Touch</h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
<<<<<<< HEAD
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-slate-300 mb-6">
>>>>>>> b6f3ed2 (initial commit)
=======
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
>>>>>>> 451c72e (fix: light bg issues)
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss potential projects 
              or just want to connect!
            </p>
            <div className="space-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="text-blue-500 dark:text-blue-400" size={20} />
                <span>muhammadmuzamilhussain5@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="text-blue-500 dark:text-blue-400" size={20} />
                <span>+92 318 233 3460</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="text-blue-500 dark:text-blue-400" size={20} />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Calendar className="text-blue-500 dark:text-blue-400" size={20} />
=======
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-blue-400" size={20} />
=======
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="text-blue-500 dark:text-blue-400" size={20} />
>>>>>>> 451c72e (fix: light bg issues)
                <span>muhammadmuzamilhussain5@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="text-blue-500 dark:text-blue-400" size={20} />
                <span>+92 318 233 3460</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="text-blue-500 dark:text-blue-400" size={20} />
                <span>Karachi, Pakistan</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="text-blue-400" size={20} />
>>>>>>> b6f3ed2 (initial commit)
=======
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Calendar className="text-blue-500 dark:text-blue-400" size={20} />
>>>>>>> 451c72e (fix: light bg issues)
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
=======
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:border-blue-400"
>>>>>>> b6f3ed2 (initial commit)
=======
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
>>>>>>> 451c72e (fix: light bg issues)
                placeholder="Your Name"
              />
            </div>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
=======
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:border-blue-400"
>>>>>>> b6f3ed2 (initial commit)
=======
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
>>>>>>> 451c72e (fix: light bg issues)
                placeholder="your@email.com"
              />
            </div>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
=======
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:border-blue-400"
>>>>>>> b6f3ed2 (initial commit)
=======
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
>>>>>>> 451c72e (fix: light bg issues)
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}