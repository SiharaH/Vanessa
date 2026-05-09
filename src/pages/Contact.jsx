import React, { useState } from 'react'
import api from '../api/axios'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')

    try {
      await api.post('/contact', form)

      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })

    } catch (err) {
      setError('Failed to send message. Try again.')
    }

    setLoading(false)
  }

  return (
    <section className='bg-gradient-to-b from-pink-50/40 to-white py-16 px-6 lg:px-12'>

      <div className='max-w-6xl mx-auto'>

        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Contact <span className='text-pink-500'>Us</span>
          </h2>

          <p className='text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto'>
            We’d love to hear from you. Whether you have a question about our products, orders, or anything else.
          </p>
        </div>

        {/* Grid */}
        <div className='grid lg:grid-cols-2 gap-10'>

          {/* FORM */}
          <div className='bg-white border border-pink-100 rounded-2xl shadow-sm p-8'>

            <h3 className='text-lg font-semibold mb-6 text-gray-800'>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-4'>

              <input
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your Name'
                className='w-full px-4 py-3 border rounded-lg focus:border-pink-400 outline-none'
                required
              />

              <input
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Your Email'
                className='w-full px-4 py-3 border rounded-lg focus:border-pink-400 outline-none'
                required
              />

              <input
                name='subject'
                value={form.subject}
                onChange={handleChange}
                placeholder='Subject'
                className='w-full px-4 py-3 border rounded-lg focus:border-pink-400 outline-none'
                required
              />

              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Your Message'
                rows='5'
                className='w-full px-4 py-3 border rounded-lg focus:border-pink-400 outline-none resize-none'
                required
              />

              <button
                type='submit'
                disabled={loading}
                className='w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition'
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <p className='text-green-600 text-sm text-center'>
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className='text-red-500 text-sm text-center'>
                  {error}
                </p>
              )}

            </form>
          </div>

          {/* INFO */}
          <div className='space-y-6'>

            <div className='bg-white/30 backdrop-blur-lg border border-pink-100 rounded-2xl p-6'>

              <h3 className='text-lg font-semibold mb-4'>
                Get in Touch
              </h3>

              <div className='space-y-4 text-sm text-gray-600'>

                <p>📍 Colombo, Sri Lanka</p>
                <p>📞 +94 77 123 4567</p>
                <p>✉️ contact@vanessa.com</p>
                <p>⏰ Mon - Fri: 9AM - 6PM</p>

              </div>

            </div>

            <div className='bg-pink-50 border border-pink-100 rounded-2xl p-6'>
              <h3 className='text-pink-500 font-semibold mb-2'>
                Customer Support
              </h3>
              <p className='text-sm text-gray-600'>
                We respond within 24 hours for all inquiries.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact