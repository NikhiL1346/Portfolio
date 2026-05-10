import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    const formData = new FormData(e.target);
    formData.append('access_key', '<your_web3forms_access_key>');
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    const data = await res.json();
    setResult(data.success ? 'Message sent successfully!' : data.message);
    if (data.success) e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >Connect with me</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >Get in touch</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            name='name' type='text' placeholder='Your name' required
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
              focus:border-gray-600 focus:ring-1 focus:ring-gray-300 transition
              dark:bg-darkHover/30 dark:border-white/50 dark:focus:border-white dark:text-white'
          />
          <input
            name='email' type='email' placeholder='Your email' required
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
              focus:border-gray-600 focus:ring-1 focus:ring-gray-300 transition
              dark:bg-darkHover/30 dark:border-white/50 dark:focus:border-white dark:text-white'
          />
        </div>
        <textarea
          name='message' rows='6' placeholder='Your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
            focus:border-gray-600 focus:ring-1 focus:ring-gray-300 transition
            dark:bg-darkHover/30 dark:border-white/50 dark:focus:border-white dark:text-white'
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          type='submit'
          className='py-3 px-8 w-max flex items-center gap-2 bg-black text-white rounded-full mx-auto
            hover:bg-gray-800 duration-300 dark:bg-transparent dark:border dark:border-white/60 dark:hover:bg-darkHover'
        >
          Submit now
          <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className='w-4' />
        </motion.button>
        {result && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-5 text-center text-sm text-gray-600 dark:text-white/70'
          >{result}</motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
