// ============================================================
// AuthModal — 로그인/회원가입 모달
// ============================================================
// 사이트 어디서든 열 수 있는 풀스크린 로그인 모달
// Google 우선 로그인, 이메일 보조 로그인 지원
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, error, clearError } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
      onClose();
    } catch {
      // error is set by AuthContext
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      onClose();
    } catch {
      // error handled in context
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-[90%] max-w-[420px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-10"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none text-[18px]"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-white text-[24px] font-light tracking-[-0.02em] mb-2">
              {mode === 'login' ? '로그인' : '회원가입'}
            </h2>
            <p className="text-white/40 text-[14px] mb-8">
              {mode === 'login'
                ? 'Google 계정으로 제안서 마스터 작업 공간에 접속하세요.'
                : 'Google 계정으로 가입하고 제안서 초안을 저장하세요.'}
            </p>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-6 text-red-400 text-[13px]">
                {error}
                <button
                  onClick={clearError}
                  className="ml-2 text-red-300 hover:text-red-100 cursor-pointer bg-transparent border-none"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Google login button */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={handleGoogle}
                className="w-full h-[54px] rounded-lg bg-white text-black text-[15px] font-bold flex items-center justify-center gap-3 hover:bg-white/90 active:scale-[0.98] transition-all cursor-pointer border-none"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google 계정으로 계속하기
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-[12px] uppercase tracking-[0.1em]">또는 이메일로</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Email form */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white/40 text-[12px] uppercase tracking-[0.1em] mb-2 block">
                  이메일
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-[44px] bg-white/[0.05] border border-white/10 rounded-lg px-4 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-[12px] uppercase tracking-[0.1em] mb-2 block">
                  비밀번호
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full h-[44px] bg-white/[0.05] border border-white/10 rounded-lg px-4 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[48px] bg-white text-black rounded-lg text-[14px] font-bold hover:bg-white/90 active:scale-[0.98] transition-all cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading ? '...' : mode === 'login' ? '이메일로 로그인' : '이메일로 가입'}
              </button>
            </form>

            {/* Switch mode */}
            <p className="text-center text-white/40 text-[13px] mt-6">
              {mode === 'login' ? '이메일 계정이 없으신가요?' : '이미 이메일 계정이 있으신가요?'}{' '}
              <button
                onClick={() => {
                  setMode(mode === 'login' ? 'signup' : 'login');
                  clearError();
                }}
                className="text-white/70 hover:text-white underline cursor-pointer bg-transparent border-none text-[13px]"
              >
                {mode === 'login' ? '이메일 회원가입' : '이메일 로그인'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
