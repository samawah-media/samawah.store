'use client';

import React from 'react';
import Image from 'next/image';
import { PAST_GUESTS } from '@/data/products-map';

const GuestsMarquee: React.FC = () => {
    // Duplicate the array to create a seamless loop
    const duplicatedGuests = [...PAST_GUESTS, ...PAST_GUESTS, ...PAST_GUESTS];

    return (
        <div className="w-full overflow-hidden bg-white py-12 border-y border-samawah-beige">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-samawah-navy">
                    ضيوف المجلس السابقين
                </h2>
                <div className="w-12 h-1 bg-samawah-teal mx-auto mt-2"></div>
            </div>

            <div className="relative flex overflow-hidden select-none">
                <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-16 items-center py-4 min-w-full">
                    {PAST_GUESTS.map((guest, idx) => (
                        <div
                            key={`${guest.name}-${idx}`}
                            className="flex flex-col items-center min-w-[150px] md:min-w-[200px] text-center group"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-samawah-beige group-hover:border-samawah-teal transition-colors duration-500 shadow-sm">
                                <Image
                                    src={guest.image}
                                    alt={guest.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <h3 className="font-bold text-samawah-navy md:text-lg">{guest.name}</h3>
                            <p className="text-xs md:text-sm text-samawah-grey/60 line-clamp-1">{guest.title}</p>
                        </div>
                    ))}
                </div>

                {/* Secondary list for seamless loop */}
                <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-16 items-center py-4 min-w-full" aria-hidden="true">
                    {PAST_GUESTS.map((guest, idx) => (
                        <div
                            key={`dup-${guest.name}-${idx}`}
                            className="flex flex-col items-center min-w-[150px] md:min-w-[200px] text-center group"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-samawah-beige group-hover:border-samawah-teal transition-colors duration-500 shadow-sm">
                                <Image
                                    src={guest.image}
                                    alt={guest.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <h3 className="font-bold text-samawah-navy md:text-lg">{guest.name}</h3>
                            <p className="text-xs md:text-sm text-samawah-grey/60 line-clamp-1">{guest.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuestsMarquee;
