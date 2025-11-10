import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import DateConverterPage from './pages/DateConverterPage';
import GlossaryPage from './pages/GlossaryPage';
import InvoiceGeneratorPage from './pages/InvoiceGeneratorPage';
import ContractClausePage from './pages/ContractClausePage';
import { I18nProvider } from './context/I18nContext';
import { ThemeProvider } from './context/ThemeContext';
import NumberConverterPage from './pages/NumberConverterPage';
import LoanCalculatorPage from './pages/LoanCalculatorPage';
import ReceiptGeneratorPage from './pages/ReceiptGeneratorPage';
import CurrencyConverterPage from './pages/CurrencyConverterPage';
import FaqPage from './pages/FaqPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/number-converter" element={<NumberConverterPage />} />
              <Route path="/date-converter" element={<DateConverterPage />} />
              <Route path="/invoice-generator" element={<InvoiceGeneratorPage />} />
              <Route path="/contract-clause" element={<ContractClausePage />} />
              <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
              <Route path="/currency-converter" element={<CurrencyConverterPage />} />
              <Route path="/receipt-generator" element={<ReceiptGeneratorPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;