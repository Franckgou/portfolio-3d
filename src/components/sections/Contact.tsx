import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

// Initialize with public key
//emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    // Add validation
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.publicKey
      )
      .then(
        result => {
          console.log('SUCCESS!', result.text);
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm(INITIAL_STATE);
        },
        error => {
          console.error('FAILED...', error);
          setLoading(false);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="modern-card flex-[0.75] p-10"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Add contact details section */}
        <div className="mt-6 mb-8 text-gray-600">
          <div className="flex flex-col gap-3">
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              Email: tayofranck07@gmail.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              Phone: (678) 469-3055
            </p>
            <p className="flex items-center">
              <span className="mr-2">📍</span>
              Location: Atlanta, GA
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/Franckgou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/franck-cabrel-tayo-gouonpegne-407a44204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-gray-50 placeholder:text-gray-400 rounded-xl border border-gray-200 px-5 py-3.5 font-medium text-gray-700 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  {...(input === 'message' && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover w-fit rounded-xl px-8 py-3.5 font-medium text-white shadow-sm hover:shadow-md transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 hidden xl:block"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
