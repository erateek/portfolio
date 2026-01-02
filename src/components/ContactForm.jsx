'use client';

import React, { useState } from 'react';

const ContactForm = ({ dict }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  // Fallback to avoid crashes if dict is missing (during refactoring)
  const t = dict?.contact?.form || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(t.success || 'Message Sent!');
        e.target.reset();
      } else {
        throw new Error(data.error || 'Error sending message');
      }
    } catch (error) {
      setStatus('error');
      setMessage(t.error || 'Error sending message');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-foreground mb-2"
        >
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
          placeholder={t.namePlaceholder}
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-foreground mb-2"
        >
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
          placeholder={t.emailPlaceholder}
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-bold text-foreground mb-2"
        >
          {t.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
          placeholder={t.subjectPlaceholder}
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-foreground mb-2"
        >
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder={t.messagePlaceholder}
          required
          disabled={status === 'loading'}
        ></textarea>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl ${
            status === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white px-6 py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'loading' ? t.submitting : t.submit}
      </button>
    </form>
  );
};

export default ContactForm;

