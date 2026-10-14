import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';

export type Currency = 'USD' | 'KES';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdPrice: number, kesPrice?: number) => string;
  usdToKesRate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('kifaru_currency');
    return (saved === 'KES' || saved === 'USD') ? saved : siteConfig.brand.currency.defaultCurrency;
  });

  useEffect(() => {
    localStorage.setItem('kifaru_currency', currency);
  }, [currency]);

  const usdToKesRate = siteConfig.brand.currency.usdToKesRate;

  const formatPrice = (usdPrice: number, kesPrice?: number): string => {
    if (currency === 'KES') {
      const amount = kesPrice || Math.round(usdPrice * usdToKesRate);
      return `KES ${amount.toLocaleString('en-KE')}`;
    }
    return `$${usdPrice.toLocaleString('en-US')} USD`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, usdToKesRate }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
