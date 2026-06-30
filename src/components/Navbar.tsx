import { useState, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import { ProposalMasterLogo } from './ProposalMasterLogo';
import { ScrambleText } from './ScrambleText';
import { AuthModal } from './AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { SITE_CONTENT, type Language } from '../config/content';

interface NavbarProps {
  entranceComplete: boolean;
  language: Language;
  onLanguageChange: (language: Language) => void;
  siteConfig: (typeof SITE_CONTENT)[Language];
}

export function Navbar({
  entranceComplete,
  language,
  onLanguageChange,
  siteConfig,
}: NavbarProps) {
  const [downloadHovered, setDownloadHovered] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, signOut } = useAuth();
  const nav = siteConfig.nav;
  const nextLanguage = language === 'ko' ? 'en' : 'ko';
  const languageLabel = language === 'ko' ? 'KO' : 'EN';

  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    scrollTo(0);
  };

  const handleBrandKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  const toggleLanguage = () => {
    onLanguageChange(nextLanguage);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ===== DESKTOP ===== */}
        <div className="hidden sm:flex items-center justify-between w-full">
          {/* Left group */}
          <div className="flex items-center gap-2">
            {/* Logo pill */}
            <motion.div
              className="h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center gap-2.5 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={nav.topLabel}
              onClick={scrollToTop}
              onKeyDown={handleBrandKeyDown}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.98 }}
            >
              <ProposalMasterLogo size={18} className="text-white" />
              <span className="text-[16px] font-medium tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </motion.div>

            {/* Inline menu buttons */}
            <motion.button
              className="h-12 px-5 rounded-[14px] bg-white/15 backdrop-blur-md text-[16px] font-normal text-white/85 hover:text-white hover:bg-white/20 transition-colors cursor-pointer border-none whitespace-nowrap"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo(window.innerHeight)}
            >
              {nav.service}
            </motion.button>
            <motion.button
              className="h-12 px-5 rounded-[14px] bg-white/15 backdrop-blur-md text-[16px] font-normal text-white/85 hover:text-white hover:bg-white/20 transition-colors cursor-pointer border-none whitespace-nowrap"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo(window.innerHeight * 2)}
            >
              {nav.results}
            </motion.button>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-2">
            {/* Sign In / User button */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="h-12 px-5 bg-white/10 backdrop-blur-md rounded-[14px] flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[12px] font-bold">
                      {(user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase()}
                    </div>
                  )}
                  <span className="text-[14px] text-white/80 max-w-[120px] truncate">
                    {user.displayName || user.email?.split('@')[0] || 'User'}
                  </span>
                  <button
                    onClick={signOut}
                    className="text-[12px] text-white/40 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none ml-1"
                  >
                    {nav.signOut}
                  </button>
                </div>
              </div>
            ) : (
              <motion.button
                className="h-12 px-5 bg-white/10 backdrop-blur-md rounded-[14px] flex items-center gap-2 cursor-pointer border-none text-white/85 text-[15px] font-medium hover:bg-white/20 transition-colors"
                whileTap={{ scale: 0.97 }}
                onClick={() => setAuthOpen(true)}
              >
                {nav.signIn}
              </motion.button>
            )}

            {/* Language button */}
            <motion.button
              className="h-12 px-4 bg-white/10 backdrop-blur-md rounded-[14px] flex items-center gap-2 cursor-pointer border-none text-white/85 text-[14px] font-medium hover:bg-white/20 transition-colors"
              aria-label={`${nav.languageLabel}: ${nextLanguage.toUpperCase()}`}
              whileTap={{ scale: 0.97 }}
              onClick={toggleLanguage}
            >
              <Globe2 size={16} className="text-white/80" />
              <span>{languageLabel}</span>
            </motion.button>

            {/* CTA button */}
            <motion.button
              className="h-12 px-6 bg-white rounded-full flex items-center gap-2.5 cursor-pointer border-none"
              whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => setDownloadHovered(true)}
              onMouseLeave={() => setDownloadHovered(false)}
              onClick={() => scrollTo(window.innerHeight * 5)}
            >
              <span className="text-black text-[16px] font-medium">
                <ScrambleText text={nav.start} isHovered={downloadHovered} />
              </span>
              <ArrowRight size={16} className="text-black" />
            </motion.button>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="flex sm:hidden items-center justify-between w-full">
          {/* Left group */}
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {/* Logo pill */}
            <motion.div
              className="h-9 px-2 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-1.5 overflow-hidden shrink-0 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={nav.topLabel}
              onClick={scrollToTop}
              onKeyDown={handleBrandKeyDown}
              whileTap={{ scale: 0.96 }}
            >
              <ProposalMasterLogo size={14} className="text-white shrink-0" />
              <span className="text-[11px] font-medium tracking-tight text-white whitespace-nowrap">
                PM
              </span>
            </motion.div>

            {/* Inline menu buttons */}
            <motion.button
              className="h-9 px-2 rounded-[10px] bg-white/15 backdrop-blur-md text-[11px] font-normal text-white/85 cursor-pointer border-none whitespace-nowrap shrink-0"
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo(window.innerHeight)}
            >
              {nav.service}
            </motion.button>
            <motion.button
              className="h-9 px-2 rounded-[10px] bg-white/15 backdrop-blur-md text-[11px] font-normal text-white/85 cursor-pointer border-none whitespace-nowrap shrink-0"
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo(window.innerHeight * 2)}
            >
              {nav.results}
            </motion.button>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-1.5 ml-2">
            {/* Sign In / Avatar */}
            {user ? (
              <motion.button
                className="h-9 w-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer border-none overflow-hidden"
                whileTap={{ scale: 0.9 }}
                onClick={signOut}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-[12px] font-bold">
                    {(user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase()}
                  </span>
                )}
              </motion.button>
            ) : (
              <motion.button
                className="h-9 px-2.5 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center cursor-pointer border-none text-white/85 text-[11px] font-medium"
                whileTap={{ scale: 0.95 }}
                onClick={() => setAuthOpen(true)}
              >
                {nav.signIn}
              </motion.button>
            )}

            {/* Language button */}
            <motion.button
              className="h-9 px-2 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-1 cursor-pointer border-none text-white/85 text-[11px] font-medium shrink-0"
              aria-label={`${nav.languageLabel}: ${nextLanguage.toUpperCase()}`}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
            >
              <Globe2 size={12} className="text-white/80" />
              <span>{languageLabel}</span>
            </motion.button>

            {/* CTA button */}
            <motion.button
              className="h-9 px-2.5 bg-white rounded-full flex items-center gap-1 cursor-pointer border-none shrink-0"
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo(window.innerHeight * 5)}
            >
              <span className="text-black text-[12px] font-medium">{nav.start}</span>
              <ArrowRight size={13} className="text-black" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
