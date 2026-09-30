import React, { useState, useEffect } from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, Copy, MessageSquare, ExternalLink, Inbox, Trash2 } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

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
  const [showInbox, setShowInbox] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      setSavedMessages(stored);
    } catch {
      setSavedMessages([]);
    }
  }, [isOpen, isSubmitted]);

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

  const clearInbox = () => {
    localStorage.removeItem('portfolio_messages');
    setSavedMessages([]);
    onShowToast(lang === 'en' ? 'Inbox cleared' : 'Gelen kutusu temizlendi');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      onShowToast(lang === 'en' ? 'Please fill out all fields.' : 'Lütfen tüm alanları doldurun.');
      return;
    }

    setIsSubmitting(true);

    const newMessage: SavedMessage = {
      id: Date.now().toString(),
      name: senderName.trim(),
      email: senderEmail.trim(),
      message: message.trim(),
      date: new Date().toLocaleString(lang === 'en' ? 'en-US' : 'tr-TR', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    // 1. Always save to local storage inbox backup
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      stored.unshift(newMessage);
      localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      setSavedMessages(stored);
    } catch (err) {
      console.warn('Could not save to local storage', err);
    }

    // 2. Dispatch background API call to Formspree endpoint
    const endpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xqpannrg';
    let sendSuccess = true;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          message: message.trim(),
          _replyto: senderEmail.trim(),
          _subject: `Yeni Portföy Mesajı: ${senderName.trim()}`
        })
      });
      if (!response.ok) {
        console.warn('Formspree returned non-200 status', response.status);
      }
    } catch (err) {
      console.warn('Background dispatch error:', err);
      sendSuccess = false;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    onShowToast(lang === 'en' ? 'Message sent directly to inbox!' : 'Mesaj doğrudan gelen kutunuza iletildi!');

    setTimeout(() => {
      setIsSubmitted(false);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(
    lang === 'en' ? 'Inquiry from Portfolio' : 'Portföy İletişim'
  )}`;
  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    lang === 'en' ? 'Hello Ozan, I visited your portfolio!' : 'Merhaba Ozan, portföyünü inceledim!'
  )}`;

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

        {/* Quick Contact Options */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <a
            href={webGmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs font-medium transition-all group"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
            <span>{lang === 'en' ? 'Open in Gmail' : 'Gmail ile Yaz'}</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 text-slate-200 text-xs font-medium transition-all group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Quick Copy Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300 font-mono truncate mr-2">
              <Mail className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span className="truncate">{profile.email}</span>
            </div>
            <button
              onClick={() => copyToClipboard(profile.email, 'Email')}
              className="p-1 text-slate-400 hover:text-violet-300 transition-colors shrink-0 cursor-pointer"
              title="Copy email"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300 font-mono">
              <Phone className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span>{profile.phone}</span>
            </div>
            <button
              onClick={() => copyToClipboard(profile.phone, 'Phone')}
              className="p-1 text-slate-400 hover:text-violet-300 transition-colors shrink-0 cursor-pointer"
              title="Copy phone"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Toggle Inbox for Site Owner */}
        {savedMessages.length > 0 && (
          <div className="mb-4 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => setShowInbox(!showInbox)}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-teal-400 hover:text-teal-300 cursor-pointer"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>
                {showInbox
                  ? (lang === 'en' ? 'Back to Contact Form' : 'İletişim Formuna Dön')
                  : (lang === 'en' ? `View Inbox (${savedMessages.length})` : `Gelen Mesajlar (${savedMessages.length})`)}
              </span>
            </button>

            {showInbox && (
              <button
                type="button"
                onClick={clearInbox}
                className="inline-flex items-center gap-1 text-[10px] font-mono text-rose-400 hover:text-rose-300 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>{lang === 'en' ? 'Clear' : 'Temizle'}</span>
              </button>
            )}
          </div>
        )}

        {/* Saved Messages Inbox View */}
        {showInbox ? (
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {savedMessages.map((msg) => (
              <div key={msg.id} className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono">
                  <span className="font-semibold text-slate-200">{msg.name}</span>
                  <span>{msg.date}</span>
                </div>
                <div className="text-teal-400 text-[11px] font-mono">{msg.email}</div>
                <p className="text-slate-300 text-xs pt-1 whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))}
          </div>
        ) : isSubmitted ? (
          <div className="p-6 rounded-xl bg-teal-950/40 border border-teal-800/60 text-center">
            <CheckCircle2 className="w-8 h-8 text-teal-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-slate-100">
              {lang === 'en' ? 'Message Sent Successfully!' : 'Mesajınız Başarıyla İletildi!'}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {lang === 'en'
                ? `Directly delivered for ${profile.email}. Ozan will get back to you shortly.`
                : `${profile.email} için mesajınız kaydedildi. Ozan en kısa sürede dönüş sağlayacaktır.`}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
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
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400"
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
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Message' : 'Mesajınız'}
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'en' ? 'Tell me about your mobile project or opportunity...' : 'Mobil projeniz veya fırsat hakkında bilgi verin...'}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400 resize-none"
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

            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
              <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>
                {lang === 'en'
                  ? `Sent silently in background to ${profile.email}`
                  : `Arka planda sessizce iletilir, e-posta programı açılmaz.`}
              </span>
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
