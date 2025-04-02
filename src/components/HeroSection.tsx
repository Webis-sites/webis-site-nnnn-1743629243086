import React from 'react';
import Image from 'next/image';
import { FaDumbbell, FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = 'המכון המקצועי ביותר לכושר ובריאות',
  subtitle = 'יותר מ-15 שנות ניסיון בליווי אישי ואימון מקצועי',
  ctaText = 'הצטרפו עכשיו',
  backgroundImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-right" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="מכון כושר nnnn"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 via-gray-900/60 to-gray-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            {/* Logo or Brand Element */}
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-primary">
              <FaDumbbell className="ml-2" />
              <span className="text-lg font-bold">מכון כושר nnnn</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-xl text-gray-300 md:text-2xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-0 sm:space-x-reverse sm:space-y-0 sm:rtl:space-x-4">
              <button className="flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-secondary/90 hover:shadow-lg sm:ml-4">
                {ctaText}
                <FaArrowLeft className="mr-2" />
              </button>
              <button className="rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10">
                למידע נוסף
              </button>
            </div>

            {/* Features List */}
            <div className="mt-12 grid grid-cols-2 gap-4 text-white sm:grid-cols-3">
              <div className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                <span>מאמנים מוסמכים</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                <span>ציוד מתקדם</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                <span>תוכניות אישיות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}