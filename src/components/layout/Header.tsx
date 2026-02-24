'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import CartSidebar from '../cart/CartSidebar';

// ========================================
// Header Component
// ========================================

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className = '' }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`hover:text-samawah-teal hover:bg-white/10 px-3 py-2 rounded-lg transition-all font-medium touch-target flex items-center ${className}`}
    >
        {children}
    </Link>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Cart store
    const itemCount = useCartStore((state) => state.getItemCount());
    const toggleCart = useCartStore((state) => state.toggleCart);

    // Memoized scroll handler for performance
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        // Passive event listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close menu on route change
    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [pathname, isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const isHomePage = pathname === '/';
    const isTransparent = isHomePage && !isScrolled;

    const headerClasses = `
        fixed w-full z-50 transition-all duration-300
        ${isTransparent
            ? 'bg-transparent text-white border-transparent'
            : 'bg-samawah-navy/95 backdrop-blur-md text-white shadow-sm border-b border-white/10'
        }
    `;

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={headerClasses}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-xl md:text-2xl font-serif font-bold tracking-wide transition-colors text-white"
                            aria-label="سماوة - الصفحة الرئيسية"
                        >
                            سماوة
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex gap-6 items-center" aria-label="التنقل الرئيسي">
                            <NavLink href="/magazine">المجلة</NavLink>
                            <NavLink href="/event">مجلس جُلاس</NavLink>
                            <NavLink href="/reports">التقارير</NavLink>

                            {/* Cart Button */}
                            <button
                                onClick={() => toggleCart(true)}
                                className={`mr-2 p-2.5 rounded-full transition-colors relative touch-target ${isTransparent
                                    ? 'bg-white/20 hover:bg-white/30 text-white'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                                aria-label="سلة التسوق"
                            >
                                <ShoppingBag size={20} aria-hidden="true" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-samawah-coral rounded-full text-[10px] text-white flex items-center justify-center font-bold shadow-sm">
                                        {itemCount}
                                    </span>
                                )}
                            </button>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-3 -mr-3 touch-target text-white"
                            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
                            style={{ top: '64px' }}
                            onClick={closeMenu}
                            aria-hidden="true"
                        />
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="md:hidden bg-samawah-navy text-white absolute w-full shadow-lg border-t border-white/10"
                            aria-label="التنقل للموبايل"
                        >
                            <div className="px-4 py-4 space-y-1">
                                <NavLink
                                    href="/magazine"
                                    onClick={closeMenu}
                                    className="block px-4 py-4 rounded-xl text-lg font-medium hover:bg-white/10 active:bg-white/20"
                                >
                                    المجلة
                                </NavLink>
                                <NavLink
                                    href="/event"
                                    onClick={closeMenu}
                                    className="block px-4 py-4 rounded-xl text-lg font-medium hover:bg-white/10 active:bg-white/20"
                                >
                                    مجلس جُلاس
                                </NavLink>
                                <NavLink
                                    href="/reports"
                                    onClick={closeMenu}
                                    className="block px-4 py-4 rounded-xl text-lg font-medium hover:bg-white/10 active:bg-white/20"
                                >
                                    التقارير
                                </NavLink>

                                {/* Mobile Cart */}
                                <div className="pt-4 mt-2 border-t border-white/10">
                                    <button
                                        onClick={() => {
                                            closeMenu();
                                            toggleCart(true);
                                        }}
                                        className="flex items-center justify-between px-4 py-4 rounded-xl bg-samawah-teal text-white font-medium hover:bg-samawah-coral transition-colors w-full"
                                    >
                                        <span className="flex items-center gap-3">
                                            <ShoppingBag size={20} />
                                            سلة التسوق
                                        </span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{itemCount}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Cart Sidebar (Global) */}
            <CartSidebar />
        </>
    );
};

export default Header;
