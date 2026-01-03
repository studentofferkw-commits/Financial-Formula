import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg border-t border-gray-700">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                    <p>
                        {t('cookieConsent.message') || 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'}
                        {' '}
                        <Link to="/privacy-policy" className="text-teal-400 hover:text-teal-300 underline">
                            {t('cookieConsent.learnMore') || 'Learn more'}
                        </Link>
                    </p>
                </div>
                <button
                    onClick={acceptCookies}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                    {t('cookieConsent.accept') || 'Accept'}
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
