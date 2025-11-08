import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Correct access key for support@financial-formula.com
  const WEB3FORMS_ACCESS_KEY = "06f9e5a1-4328-4c7b-871d-1512b9a79a32";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        console.error("Submission error:", result.message || result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus('error');
    }
  };

  return (
    <>
      <MetaTags
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
      />
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('contact.title')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">{t('contact.p1')}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.formName')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.formEmail')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.formMessage')}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white resize-y"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex justify-center items-center bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed dark:disabled:bg-teal-800"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.sending')}
                </>
              ) : (
                t('contact.sendButton')
              )}
            </button>
          </div>
          
          {status === 'success' && (
            <div className="p-4 text-center text-green-700 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-lg">
              {t('contact.successMessage')}
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 text-center text-red-700 bg-red-100 dark:bg-red-900/50 dark:text-red-300 rounded-lg">
              {t('contact.errorMessage')}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactPage;