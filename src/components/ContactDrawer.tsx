import React, { useState, useEffect } from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
  onShowToast: (msg: string) => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  content,
  lang,
  theme,
  onShowToast,
}) => {
  const { profile } = content;
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} ${lang === 'en' ? 'copied to clipboard!' : 'panoya kopyalandı!'}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) {
      onShowToast(lang === 'en' ? 'Please fill out all fields.' : 'Lütfen tüm alanları doldurun.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast(lang === 'en' ? 'Message sent successfully!' : 'Mesajınız başarıyla iletildi!');
      setTimeout(() => {
        setIsSubmitted(false);
        setSenderName('');
        setSenderEmail('');
        setMessage('');
        onClose();
      }, 1600);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 z-10 my-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-xs font-mono text-violet-400 mb-1">
            {lang === 'en' ? 'GET IN TOUCH' : 'İLETİŞİM'}
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100 font-display">
            {lang === 'en' ? 'Let’s Connect' : 'İletişime Geçin'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {lang === 'en'
              ? 'Have a mobile app idea, hiring opportunity, or technical inquiry? Reach out directly.'
              : 'Mobil uygulama projesi, iş fırsatı veya teknik konular için doğrudan iletişime geçebilirsiniz.'}
          </p>
        </div>

        {/* Quick Contact Chips */}
        <div className="grid grid-cols-1 gap-2.5 mb-6">
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-mono">
              <Mail className="w-4 h-4 text-violet-400" />
              <span>{profile.email}</span>
            </div>
            <button
              onClick={() => copyToClipboard(profile.email, 'Email')}
              className="p-1 text-slate-400 hover:text-violet-300 transition-colors"
              title="Copy email"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-mono">
              <Phone className="w-4 h-4 text-violet-400" />
              <span>{profile.phone}</span>
            </div>
            <button
              onClick={() => copyToClipboard(profile.phone, 'Phone')}
              className="p-1 text-slate-400 hover:text-violet-300 transition-colors"
              title="Copy phone"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Message Form */}
        {isSubmitted ? (
          <div className="p-6 rounded-xl bg-violet-950/40 border border-violet-800/60 text-center">
            <CheckCircle2 className="w-8 h-8 text-violet-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-slate-100">
              {lang === 'en' ? 'Message Sent!' : 'Mesajınız İletildi!'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'Ozan will get back to you shortly.' : 'Ozan en kısa sürede size dönüş yapacaktır.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Your Name' : 'Adınız Soyadınız'}
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={lang === 'en' ? 'Jane Doe' : 'Ahmet Yılmaz'}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Your Email' : 'E-posta Adresiniz'}
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Message' : 'Mesajınız'}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'en' ? 'Tell me about your mobile project or opportunity...' : 'Mobil projeniz veya fırsat hakkında bilgi verin...'}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-xs transition-colors cursor-pointer disabled:opacity-50 ${theme.buttonBg} ${theme.buttonHover} ${theme.buttonText}`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? (lang === 'en' ? 'Sending...' : 'Gönderiliyor...') : (lang === 'en' ? 'Send Message' : 'Mesaj Gönder')}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
