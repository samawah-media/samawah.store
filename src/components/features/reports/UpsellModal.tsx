'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, BookOpen, CreditCard, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';

interface UpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
    const addItem = useCartStore((state) => state.addItem);

    // Mock products for upselling
    const upsellProducts = [
        {
            id: '548271829',
            name: 'مجلة هُدنة - العدد الأول',
            price: 75,
            image: '/images/hodna-product.JPG',
            type: 'magazine'
        },
        {
            id: '1367448884',
            name: 'تذاكر جلسات سماوة',
            price: 150,
            image: 'https://picsum.photos/id/42/400/500',
            type: 'event'
        }
    ];

    const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
        addItem({
            id: product.id,
            name: product.name,
            price: { amount: product.price, currency: 'SAR' },
            description: '',
            main_image: product.image,
            images: [],
            url: '#'
        });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-samawah-navy/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 left-6 text-gray-400 hover:text-samawah-navy transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 bg-samawah-peach/20 text-samawah-navy px-4 py-1 rounded-full text-xs font-bold mb-4">
                                    <Sparkles size={14} className="text-samawah-peach" />
                                    مقترح لك خصيصاً
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-2">
                                    بينما تقرأ في الاستراتيجية..
                                </h2>
                                <p className="text-gray-500 italic">"غذِّ عقلك بالثقافة ونفسك بالهدنة"</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {upsellProducts.map((product) => (
                                    <div key={product.id} className="bg-samawah-beige/20 rounded-3xl p-6 border border-samawah-beige hover:border-samawah-teal transition-all group">
                                        <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="font-bold text-samawah-navy mb-1">{product.name}</h3>
                                        <p className="text-samawah-teal font-bold mb-4">{product.price} ر.س</p>
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="w-full py-2 bg-white text-samawah-navy border border-samawah-beige rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-samawah-navy hover:text-white transition-all shadow-sm"
                                        >
                                            <ShoppingBag size={16} />
                                            إضافة للسلة
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full py-4 text-gray-400 hover:text-samawah-navy font-medium transition-colors border-t border-gray-100"
                            >
                                شكراً، أريد التحميل فقط
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default UpsellModal;
