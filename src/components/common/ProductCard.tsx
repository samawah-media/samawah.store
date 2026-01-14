'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types/salla';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isAdded, setIsAdded] = React.useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
        >
            <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-gray-100">
                <motion.img
                    src={product.main_image}
                    alt={product.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>

                {/* View Details Label */}
                <div className="absolute bottom-4 left-4 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-white text-samawah-navy px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        عرض التفاصيل
                    </span>
                </div>
            </Link>

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-lg text-samawah-navy mb-2 line-clamp-1">
                    <Link href={`/product/${product.id}`} className="hover:text-samawah-teal transition-colors">
                        {product.name}
                    </Link>
                </h3>
                <p className="text-sm text-samawah-grey/60 mb-4 line-clamp-2">{product.description}</p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="font-bold text-xl text-samawah-navy">
                        {product.price.amount} <span className="text-xs font-normal text-gray-500">{product.price.currency}</span>
                    </span>
                    <motion.button
                        onClick={handleAddToCart}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isAdded
                            ? 'bg-green-500 text-white'
                            : 'bg-samawah-beige text-samawah-navy hover:bg-samawah-teal hover:text-white'
                            }`}
                        aria-label="أضف للسلة"
                    >
                        <ShoppingCart size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
