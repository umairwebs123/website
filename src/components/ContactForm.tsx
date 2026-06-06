import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Clock, AlertCircle, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('membership');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    
    // Check validation constraints
    const validationErrors: string[] = [];
    if (!name.trim()) validationErrors.push('Please provide your name.');
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) validationErrors.push('Please enter a valid email address.');
    if (message.trim().length < 15) validationErrors.push('Your message must be at least 15 characters long.');

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate real server side submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Clear form inputs
      setName('');
      setEmail('');
      setSubject('membership');
      setMessage('');
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 dark:text-amber-400 block mb-2">Connect With Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 dark:text-white mb-4">
            Spread Goodwill, Support Our Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Have a project idea for Sahiwal, want to volunteer, or proposed a joint fellowship? Drop us a line of hope.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Headquarters Info Cards Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-950 dark:text-white font-serif italic">
              Club Administration Sahiwal
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Our working committee meets regularly to plan and execute projects. Our offices and assembly meeting rooms are located at the heart of Sahiwal city.
            </p>

            <div className="space-y-4">
              
              {/* Card 1: Map Address */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150/50 dark:border-slate-850 flex items-start space-x-4 transition-colors"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-indigo-650 dark:text-amber-400 border border-slate-100 dark:border-slate-800 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Assemble Point</span>
                  <span className="text-sm font-semibold text-indigo-950 dark:text-white">
                    Clubs Block, Civil Lines, Sahiwal, Punjab, Pakistan
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Meetings Schedule */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150/50 dark:border-slate-850 flex items-start space-x-4 transition-colors"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-pink-605 dark:text-pink-400 border border-slate-100 dark:border-slate-800 shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">General assembly Schedule</span>
                  <span className="text-sm font-semibold text-indigo-950 dark:text-white flex items-center">
                    <Clock className="w-4 h-4 mr-1.5 text-amber-500" />
                    First Friday of every month @ 4:30 PM
                  </span>
                </div>
              </motion.div>

              {/* Card 3: Contact Mail */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150/50 dark:border-slate-850 flex items-start space-x-4 transition-colors"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-teal-655 dark:text-teal-400 border border-slate-100 dark:border-slate-800 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">E-Mail Address</span>
                  <a
                    href="mailto:contact@innerwheelclubsahiwal.org"
                    className="text-sm font-semibold text-indigo-650 dark:text-amber-400 hover:underline block break-all"
                  >
                    contact@innerwheelclubsahiwal.org
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Contact Interactive Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-150/50 dark:border-slate-850 p-6 sm:p-10 rounded-3xl relative"
          >
            
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 dark:text-white">
                    Thank You, Your Message Spreads Hope!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Our Club Correspondent has logged your communication. We will review it in our next weekly assembly and reply to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-250 cursor-pointer transition-colors"
                  >
                    Submit New Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  layout
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-extrabold text-indigo-950 dark:text-white">
                    Dispatch an Official Inquiry
                  </h4>

                  {/* Error notifications */}
                  {errors.length > 0 && (
                    <div className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 rounded-2xl flex flex-col space-y-1 text-rose-800 dark:text-rose-450 text-xs">
                      <div className="flex items-center space-x-1.5 font-bold mb-1">
                        <AlertCircle className="w-4 h-4 text-rose-500" />
                        <span>Form Submission Incomplete</span>
                      </div>
                      {errors.map((err, i) => (
                        <div key={i} className="list-item list-inside">{err}</div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name-input" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-550 transition-all font-medium"
                        required
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email-input" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ayesha@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-550 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="subject-select" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      Subject Matter
                    </label>
                    <select
                      id="subject-select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-550 transition-all font-semibold"
                    >
                      <option value="membership">Membership application / Inquiry</option>
                      <option value="volunteer">Volunteer support request</option>
                      <option value="service">Community development suggestion</option>
                      <option value="press">Press / Newsletter dispatch</option>
                      <option value="other">General friendly lookup</option>
                    </select>
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message-textarea" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      Message Content * (Min 15 chars)
                    </label>
                    <textarea
                      id="message-textarea"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your ideas or message with the administrative team..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-550 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-message-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-slate-950 shadow-md hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span className="animate-pulse">DECODING INQUIRY COMMS...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
