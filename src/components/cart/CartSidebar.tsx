'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Premium Cart Sidebar
 * Enhanced UI with glassmorphism and luxury feel
 */

const CartSidebar: React.FC = () => {
    const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice, getItemCount, clearCart } = useCartStore();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () => {
        setIsCheckingOut(true);

        // Simulate a short delay for UX
        await new Promise(resolve => setTimeout(resolve, 800));

        // Show demo alert instead of redirecting
        alert('🚧 نحن نعمل على ربط بوابات الدفع.. حالياً هذه نسخة تجريبية.\n\nشكراً لصبرك!');

        setIsCheckingOut(false);
    };

    const totalPrice = getTotalPrice();
    const itemCount = getItemCount();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => toggleCart(false)}
                        className="fixed inset-0 bg-samawah-navy/40 backdrop-blur-sm z-[100]"
                        aria-hidden="true"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 1 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[101] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
                    >
                        {/* Luxury Header */}
                        <div className="relative px-8 py-8 border-b border-gray-100 flex items-center justify-between bg-white">
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-samawah-navy">حقيبة التسوق</h2>
                                <p className="text-sm text-samawah-grey/60 mt-1">لديك {itemCount} منتجات مختارة</p>
                            </div>
                            <button
                                onClick={() => toggleCart(false)}
                                className="group p-2 rounded-full hover:bg-samawah-beige transition-all duration-300"
                                aria-label="إغلاق"
                            >
                                <X size={24} className="text-samawah-navy group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 custom-scrollbar">
                            {items.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-center"
                                >
                                    <div className="w-24 h-24 bg-samawah-beige rounded-full flex items-center justify-center mb-6">
                                        <ShoppingBag size={40} className="text-samawah-teal" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-samawah-navy mb-2">حقيبتك خالية</h3>
                                    <p className="text-samawah-grey/70 mb-8 max-w-[250px]">ابدأ رحلتك في عالم سماوة وأضف لمستك الثقافية</p>
                                    <button
                                        onClick={() => toggleCart(false)}
                                        className="px-8 py-3 bg-samawah-navy text-white rounded-full font-bold hover:bg-samawah-teal transition-all shadow-lg hover:shadow-samawah-teal/20"
                                    >
                                        تصفح متجرنا
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.product_id}
                                            layout
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            className="group flex gap-5"
                                        >
                                            {/* Product Image */}
                                            <div className="w-24 h-32 bg-samawah-beige rounded-xl overflow-hidden relative flex-shrink-0 shadow-sm transition-transform group-hover:scale-[1.02]">
                                                {item.product?.main_image ? (
                                                    <Image
                                                        src={item.product.main_image}
                                                        alt={item.product.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <ShoppingBag size={24} className="text-samawah-teal/20" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start gap-2">
                                                        <h3 className="font-bold text-samawah-navy text-base line-clamp-2 hover:text-samawah-teal transition-colors">
                                                            <Link href={`/product/${item.product_id}`} onClick={() => toggleCart(false)}>
                                                                {item.product?.name}
                                                            </Link>
                                                        </h3>
                                                        <button
                                                            onClick={() => removeItem(item.product_id)}
                                                            className="p-1 text-gray-300 hover:text-red-500 transition-colors"
                                                            aria-label="حذف"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                    <p className="text-samawah-teal font-bold mt-1">
                                                        {item.product?.price.amount} {item.product?.price.currency}
                                                    </p>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center bg-samawah-beige rounded-full p-1 border border-samawah-beige">
                                                        <button
                                                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-samawah-navy hover:text-samawah-coral transition-colors shadow-sm"
                                                            aria-label="نقص"
                                                        >
                                                            <Minus size={12} />
                                                        </button>
                                                        <span className="w-10 text-center font-bold text-sm text-samawah-navy">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-samawah-navy hover:text-samawah-teal transition-colors shadow-sm"
                                                            aria-label="زيادة"
                                                        >
                                                            <Plus size={12} />
                                                        </button>
                                                    </div>
                                                    <p className="text-sm font-bold text-samawah-navy">
                                                        {(item.total || 0).toFixed(2)} {item.product?.price.currency}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Luxury Footer */}
                        {items.length > 0 && (
                            <div className="p-8 bg-samawah-navy text-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-gray-400 text-sm">
                                        <span>المجموع الفرعي</span>
                                        <span>{totalPrice.toFixed(2)} ر.س</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-400 text-sm">
                                        <span>الشحن</span>
                                        <span className="text-samawah-mint">مجاني</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                        <span className="text-lg font-serif">الإجمالي النهائي</span>
                                        <span className="text-2xl font-bold text-samawah-beige">{totalPrice.toFixed(2)} ر.س</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleCheckout}
                                        disabled={isCheckingOut}
                                        className="w-full py-4 bg-samawah-teal text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-samawah-coral transition-all text-lg shadow-xl shadow-samawah-teal/10 disabled:opacity-50"
                                    >
                                        <CreditCard size={20} />
                                        {isCheckingOut
                                            ? 'جاري التحويل...'
                                            : totalPrice === 0
                                                ? 'تحميل المحتوى الآن'
                                                : 'إتمام الدفع الآمن'}
                                    </motion.button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full py-2 text-xs text-white/40 hover:text-red-400 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Trash2 size={12} />
                                        إفراغ الحقيبة بالكامل
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
