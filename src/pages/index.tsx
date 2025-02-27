import { Geist, Geist_Mono } from "next/font/google";
import styles from "./index.module.css";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>{t('greeting')}</h1>
      <h2>{t('welcome')}</h2>
      <p className={styles.firstParagraph}>{t('description')}</p>
      
      <div className="mt-8">
        <p>{t('changeLanguage')}:</p>
        <div className="flex space-x-4 mt-2">
          {/* Botão Português */}
          <button 
            onClick={() => changeLanguage('pt')}
            className={`px-7 py-3 text-sm font-medium rounded-full transition-all duration-200 ease-out
              ${router.locale === 'pt' 
                ? 'bg-gradient-to-b from-[#0071e3] to-[#0077ed] text-white shadow-md ring-2 ring-blue-400' 
                : 'bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] text-[#1d1d1f] border border-[#d2d2d7] shadow-sm hover:from-[#f0f0f2] hover:to-[#e3e3e8]'
              }`}
          >
            {t('portuguese')}
          </button>
          
          {/* Botão Inglês */}
          <button 
            onClick={() => changeLanguage('en')}
            className={`px-7 py-3 text-sm font-medium rounded-full transition-all duration-200 ease-out
              ${router.locale === 'en' 
                ? 'bg-gradient-to-b from-[#0071e3] to-[#0077ed] text-white shadow-md ring-2 ring-blue-400' 
                : 'bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] text-[#1d1d1f] border border-[#d2d2d7] shadow-sm hover:from-[#f0f0f2] hover:to-[#e3e3e8]'
              }`}
          >
            {t('english')}
          </button>
          
          {/* Botão Espanhol */}
          <button 
            onClick={() => changeLanguage('es')}
            className={`px-7 py-3 text-sm font-medium rounded-full transition-all duration-200 ease-out
              ${router.locale === 'es' 
                ? 'bg-gradient-to-b from-[#0071e3] to-[#0077ed] text-white shadow-md ring-2 ring-blue-400' 
                : 'bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] text-[#1d1d1f] border border-[#d2d2d7] shadow-sm hover:from-[#f0f0f2] hover:to-[#e3e3e8]'
              }`}
          >
            {t('spanish')}
          </button>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale || 'pt', 
        ['common'], 
        nextI18NextConfig
      )),
    },
  };
};
