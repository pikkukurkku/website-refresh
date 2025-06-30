import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supportedLocales = ['en', 'de'];
  
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: 'en' | 'de' }> 
}): Promise<Metadata> {
  const { locale } = await params; 
  
  const titles: Record<'en' | 'de', string> = {
    en: 'Seitwerk - English',
    de: 'Seitwerk - Deutsch',
  };
  
  return {
    title: titles[locale] || titles.en,
    // ... other metadata
  };
}