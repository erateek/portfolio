'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Palette,
  Monitor,
  Megaphone,
  PenTool,
  Video,
  Smartphone,
  Menu,
  X,
  ArrowUpLeft,
  BookOpen,
} from 'lucide-react';

const Navbar = ({ dict, lang = 'ar' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use dictionary for services list
  const servicesList = [
    {
      label: dict.services.branding.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#branding`,
      icon: Palette,
      desc: dict.services.branding.desc,
    },
    {
      label: dict.services.web.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#websites`,
      icon: Monitor,
      desc: dict.services.web.desc,
    },
    {
      label: dict.services.marketing.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#digital-marketing`,
      icon: Megaphone,
      desc: dict.services.marketing.desc,
    },
    {
      label: dict.services.graphic.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#graphic`,
      icon: PenTool,
      desc: dict.services.graphic.desc,
    },
    {
      label: dict.services.content.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#media`,
      icon: Video,
      desc: dict.services.content.desc,
    },
    {
      label: dict.services.mobile.label,
      href: `/${lang === 'en' ? 'en/' : ''}services#mobile`,
      icon: Smartphone,
      desc: dict.services.mobile.desc,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (show) => {
    setIsMobileMenuOpen(show);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-[100] px-4 py-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <nav
        id="nav-container"
        className={`mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/20 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-500 relative z-[101] ${isScrolled ? 'max-w-5xl shadow-md bg-white/95' : 'max-w-7xl'}`}
      >
        {/* Logo */}
        <Link
          href={`/${lang === 'en' ? 'en' : ''}`}
          className="text-2xl font-black tracking-tighter text-foreground group"
        >
          {dict.navbar.logo}<span className="text-primary group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href={`/${lang === 'en' ? 'en' : ''}`}
            className="px-4 py-2 text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            {dict.navbar.home}
          </Link>

          {/* Services Dropdown */}
          <div className="group relative">
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-muted group-hover:text-primary transition-colors cursor-default"
            >
              <span>{dict.navbar.services}</span>
              <ChevronDown
                className="w-4 h-4 transition-transform group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Panel */}
            <div
              className="absolute top-full rtl:left-1/2 rtl:-translate-x-1/2 ltr:right-1/2 ltr:translate-x-1/2 mt-6 w-[640px] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out pt-4"
            >
              <div
                className="bg-surface rounded-[2rem] border border-foreground/5 shadow-2xl p-6 grid grid-cols-2 gap-3 overflow-hidden relative"
              >
                {servicesList.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-subtle transition-colors group/item"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-subtle text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground mb-0.5">
                        {service.label}
                      </div>
                      <div className="text-xs text-muted font-medium">
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
            </div>
          </div>

          <Link
            href={`/${lang === 'en' ? 'en/' : ''}blog`}
            className="px-4 py-2 text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            {dict.navbar.blog}
          </Link>
          <Link
            href={`/${lang === 'en' ? 'en/' : ''}about`}
            className="px-4 py-2 text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            {dict.navbar.about}
          </Link>
          <Link
            href={`/${lang === 'en' ? 'en/' : ''}contact`}
            className="px-4 py-2 text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            {dict.navbar.contact}
          </Link>
        </div>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Link 
                href={lang === 'en' ? '/' : '/en'} 
                className="px-3 py-1 rounded-lg text-sm font-bold text-muted hover:text-primary transition-colors border border-transparent hover:border-foreground/10"
            >
                {lang === 'en' ? 'Arabic' : 'English'}
            </Link>

          <Link
            href={`/${lang === 'en' ? 'en/' : ''}quote`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-xl text-sm font-bold shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:bg-secondary/90 transition-all border border-secondary"
          >
             <span className="animate-pulse">✨</span>
            <span>{dict.navbar.quote || (lang === 'en' ? 'Get a Quote' : 'احسب تكلفة مشروعك')}</span>
          </Link>

          <Link
            href={`/${lang === 'en' ? 'en/' : ''}contact`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-inverse rounded-xl text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span>{dict.navbar.contact}</span>
          </Link>

          <button
            onClick={() => toggleMenu(true)}
            className="lg:hidden p-2.5 bg-surface border border-foreground/10 rounded-xl text-foreground hover:bg-subtle transition-colors shadow-sm"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[200] bg-background flex flex-col transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-4'
        }`}
      >
        <div
          className="px-6 py-5 flex items-center justify-between border-b border-foreground/5 bg-surface/80 backdrop-blur-md sticky top-0 z-10"
        >
          <span className="text-2xl font-black text-foreground">{dict.navbar.menu}</span>
          <button
            onClick={() => toggleMenu(false)}
            className="p-2.5 bg-subtle rounded-xl text-foreground hover:bg-red-50 hover:text-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          <div className="space-y-6">
            <Link
              href={`/${lang === 'en' ? 'en' : ''}`}
              onClick={() => toggleMenu(false)}
              className="text-3xl font-black text-foreground flex items-center justify-between group"
            >
              {dict.navbar.home}
              <ArrowUpLeft
                className="w-6 h-6 text-muted group-active:text-primary rtl:rotate-0 ltr:rotate-90"
              />
            </Link>

            <Link
              href={`/${lang === 'en' ? 'en/' : ''}blog`}
              onClick={() => toggleMenu(false)}
              className="text-3xl font-black text-foreground flex items-center justify-between group"
            >
              {dict.navbar.blog}
              <BookOpen className="w-6 h-6 text-muted group-active:text-primary" />
            </Link>

            <Link
              href={`/${lang === 'en' ? 'en/' : ''}about`}
              onClick={() => toggleMenu(false)}
              className="text-3xl font-black text-foreground flex items-center justify-between group"
            >
              {dict.navbar.about}
              <ArrowUpLeft
                className="w-6 h-6 text-muted group-active:text-primary rtl:rotate-0 ltr:rotate-90"
              />
            </Link>

            <Link
              href={`/${lang === 'en' ? 'en/' : ''}contact`}
              onClick={() => toggleMenu(false)}
              className="text-3xl font-black text-foreground flex items-center justify-between group"
            >
              {dict.navbar.contact}
              <ArrowUpLeft
                className="w-6 h-6 text-muted group-active:text-primary rtl:rotate-0 ltr:rotate-90"
              />
            </Link>

            {/* ADDED: Quote Button in Mobile Menu */}
            <Link
              href={`/${lang === 'en' ? 'en/' : ''}quote`}
              onClick={() => toggleMenu(false)}
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex items-center justify-between group"
            >
              {dict.navbar.quote || (lang === 'en' ? 'Get a Quote' : 'احسب تكلفة مشروعك')}
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">✨</span>
            </Link>

            <div className="pt-6 border-t border-foreground/10">
              <h3 className="text-lg font-black text-foreground mb-4">{dict.navbar.services}</h3>
              <div className="grid grid-cols-1 gap-3">
                {servicesList.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => toggleMenu(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-subtle active:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface text-primary flex items-center justify-center shadow-sm">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">
                        {service.label}
                      </div>
                      <div className="text-xs text-muted font-medium">
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

