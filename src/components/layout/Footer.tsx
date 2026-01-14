import React from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

// ========================================
// Footer Component - Site Footer
// ========================================

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    highlight?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, highlight = false }) => (
    <li>
        <Link
            href={href}
            className={`hover:text-white transition-colors block py-1 touch-target ${highlight ? 'text-yellow-500 font-medium' : ''
                }`}
        >
            {children}
        </Link>
    </li>
);

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-samawah-teal transition-colors p-2 -m-2 touch-target"
        aria-label={label}
    >
        {icon}
    </a>
);

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-samawah-navy text-white py-10 md:py-12 border-t border-samawah-navy shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 md:mb-4">سماوة</h3>
                        <p className="text-gray-300 mb-4 md:mb-6 max-w-sm leading-relaxed text-sm md:text-base">
                            منصة ثقافية سعودية تسعى لإثراء المحتوى المعرفي وإحياء مفهوم الصالونات الثقافية بروح عصرية. نقدم المعرفة في قوالب أصيلة تليق بالقارئ العربي.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Twitter size={20} />} label="تويتر" />
                            <SocialLink href="#" icon={<Instagram size={20} />} label="انستغرام" />
                            <SocialLink href="#" icon={<Mail size={20} />} label="البريد الإلكتروني" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">روابط سريعة</h4>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                            <FooterLink href="/magazine">مجلة هدنة</FooterLink>
                            <FooterLink href="/event">لقاء جُلاس</FooterLink>
                            <FooterLink href="/reports">التقارير الإعلامية</FooterLink>
                            <FooterLink href="/partners" highlight>برنامج شركاء هُدنة</FooterLink>
                            <FooterLink href="/about">من نحن</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">النشرة البريدية</h4>
                        <p className="text-sm text-gray-300 mb-3 md:mb-4">اشترك ليصلك جديدنا أولاً بأول.</p>
                        <form className="flex flex-col gap-2">
                            <label htmlFor="footer-email" className="sr-only">البريد الإلكتروني</label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="bg-white/10 border-transparent text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-samawah-teal focus:outline-none text-sm md:text-base"
                            />
                            <button
                                type="submit"
                                className="bg-white text-samawah-navy px-4 py-3 rounded-lg font-medium hover:bg-samawah-teal hover:text-white transition-colors touch-target text-sm md:text-base"
                            >
                                اشترك
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-400">
                    © {currentYear} سماوة. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

