'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeIn Component
 * Provides a smooth, luxurious fade-in animation for its children.
 * Defaults to a "Fade Up" effect.
 */

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'none';
    distance?: number;
    className?: string;
    fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    direction = 'up',
    distance = 20,
    className = '',
    fullWidth = false,
}) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        none: { y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: directions[direction].y
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom luxury easeOut
            }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
