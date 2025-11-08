
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsOfServicePage from './pages/TermsOfServicePage.tsx';
import ArticlesPage from './pages/ArticlesPage.tsx';
import ArticleDetailPage from './pages/ArticleDetailPage.tsx';
import DateConverterPage from './pages/DateConverterPage.tsx';
import GlossaryPage from './pages/GlossaryPage.tsx';
import InvoiceGeneratorPage from './pages/InvoiceGeneratorPage.tsx';
import ContractClausePage from './pages/ContractClausePage.tsx';
import { I18nProvider } from './context/I18nContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import NumberConverterPage from './pages/NumberConverterPage.tsx';
import LoanCalculatorPage from './pages/LoanCalculatorPage.tsx';
import ReceiptGeneratorPage from './pages/ReceiptGeneratorPage.tsx';
import CurrencyConverterPage from './pages/CurrencyConverterPage.tsx';

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