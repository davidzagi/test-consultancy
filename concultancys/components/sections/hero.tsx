'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useScrollParallax } from '@/hooks/useScrollParallx';
import {  ParallaxImage, HeroButtonProps, ExtendedHeroSectionProps, SideImageConfig, SideImageCard } from '@/lib/types';
import { divisionButtons } from '@/lib/const';
import {Workflow} from "lucide-react"



export function HeroSection({
  variant = 'single-image',
  brandLabel,
  brandIcon,
  heading,
  description,
  buttons,
  backgroundColor = '#0A1236',
  backgroundImage,
  backgroundVideo,
  parallaxImages,
  textAlign = 'center',
  overlay = true,
  overlayOpacity = 50,
  minHeight = 'min-h-screen',
  className = '',
  customContent,
  sideImage,
}: ExtendedHeroSectionProps) {
  const scrollY = useScrollParallax();

  const effectiveTextAlign = variant === 'split-image' ? 'left' : textAlign;
  const textAlignClass = effectiveTextAlign === 'center' ? 'text-center' : 'text-left';
  const justifyClass = effectiveTextAlign === 'center' ? 'justify-center' : 'justify-start';

  if (variant === 'split-image') {
    return (
      <section
        className={`relative ${minHeight} overflow-hidden flex items-center ${className}`}
        style={{ backgroundColor }}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236] via-[#1A1F4E] to-[#0A1236] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start max-w-xl">
              {brandLabel && (
                <div className="flex items-center gap-2 mb-6">
                  {brandIcon && (
                    <Image src={brandIcon} alt="Brand icon" width={14} height={14} />
                  )}
                  <span className="text-white text-sm font-medium tracking-wide">
                    {brandLabel}
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {heading}
              </h1>

              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                {description}
              </p>

              {buttons && buttons.length > 0 && (
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {buttons.map((button, index) => (
                    <HeroButton key={index} {...button} />
                  ))}
                </div>
              )}

              {customContent && (
                <div className="mt-8">
                  {customContent}
                </div>
              )}
            </div>

            {/* Right Image */}
            {sideImage && (
              <div className="relative flex justify-center lg:justify-end">
                <SideImageElement sideImage={sideImage} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative ${minHeight} overflow-hidden flex items-center ${className}`}
      style={{ backgroundColor }}
    >

      {variant === 'parallax' && parallaxImages && (
        <div className="absolute inset-0 pointer-events-none">
          {parallaxImages.map((img, index) => (
            <ParallaxImageElement
              key={index}
              image={img}
              scrollY={scrollY}
            />
          ))}
        </div>
      )}


      {variant === 'single-image' && backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {variant === 'video' && backgroundVideo && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}


      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}


      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${textAlignClass}`}>
        <div className={`flex flex-col items-${textAlign === 'center' ? 'center' : 'start'} max-w-5xl ${textAlign === 'center' ? 'mx-auto' : ''}`}>

          {brandLabel && (
            <div className={`flex items-center gap-2 mb-8 ${textAlign === 'center' ? 'justify-center' : ''}`}>
              {brandIcon && (
                <Image src={brandIcon} alt="Brand icon" width={14} height={14} />
              )}
              <span className="text-white text-sm font-medium tracking-wide">
                {brandLabel}
              </span>
            </div>
          )}

          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {heading}
          </h1>

          <p className={`text-sm md:text-xl text-gray-300 mb-10 leading-relaxed ${textAlign === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${justifyClass}`}>
              {buttons.map((button, index) => (
                <HeroButton key={index} {...button} />
              ))}
            </div>
          )}

          {customContent && (
            <div className="mt-8">
              {customContent}
            </div>
          )}
        </div>
      </div>

      {variant === 'parallax' && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current pointer-events-none"
          style={{ color: backgroundColor }}
        />
      )}
    </section>
  );
}

function SideImageElement({ sideImage }: { sideImage: SideImageConfig }) {
    return (
      <div className="relative w-full max-w-lg lg:max-w-xl">
        {/* Decorative lines */}
        {sideImage.decorativeLines && (
          <>
            <div className="absolute -top-4 -right-4 w-32 h-32 pointer-events-none z-20">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <line x1="20" y1="0" x2="100" y2="80" stroke="#4F6BF7" strokeWidth="1" />
                <line x1="40" y1="0" x2="100" y2="60" stroke="#4F6BF7" strokeWidth="1" />
                <line x1="60" y1="0" x2="100" y2="40" stroke="#4F6BF7" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none z-20">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <line x1="0" y1="20" x2="80" y2="100" stroke="#4F6BF7" strokeWidth="1" />
                <line x1="0" y1="40" x2="60" y2="100" stroke="#4F6BF7" strokeWidth="1" />
              </svg>
            </div>
          </>
        )}
  
        {/* Main Image Container */}
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src={'/hero/hero.svg'}
            alt={sideImage.alt}
            fill
            className="object-cover"
            priority
          />
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
  
          {/* Floating Card */}
          {sideImage.card && (
            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
              {sideImage.card.href ? (
                <Link href={sideImage.card.href}>
                  <SideImageCardContent card={sideImage.card} />
                </Link>
              ) : (
                <SideImageCardContent card={sideImage.card} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }


  

  function SideImageCardContent({ card }: { card: SideImageCard }) {
    return (
      <div className="bg-white rounded-xl px-4 py-3 lg:px-5 lg:py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
        {card.icon && (
          <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#1A1F4E] flex items-center justify-center">
            <Image 
              src={card.icon} 
              alt="" 
              width={20} 
              height={20}
              className="w-4 h-4 lg:w-5 lg:h-5"
            />
          </div>
        )}
        <span className="flex-1 text-sm lg:text-base font-medium text-gray-800">
          {card.text}
        </span>
        <svg 
          className="w-5 h-5 text-gray-400 group-hover:text-[#E53935] group-hover:translate-x-1 transition-all" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    );
  }

function ParallaxImageElement({
  image,
  scrollY,
}: {
  image: ParallaxImage;
  scrollY: number;
}) {
  const positions = {
    'top-left': 'top-32 left-[-30]',
    'top-right': 'top-24 right-[-30]',
    'bottom-left': 'bottom-0 left-40',
    'bottom-right': 'bottom-[-30] right-36',
  };

  const defaultSizes = {
    'top-left': 'w-72 h-80',
    'top-right': 'w-80 h-64',
    'bottom-left': 'w-1/3 h-72',
    'bottom-right': 'w-80 h-96',
  };

  const speed = image.speed || 0.2;
  const isBottom = image.position.includes('bottom');
  const transform = isBottom
    ? `translateY(${scrollY * -speed}px)`
    : `translateY(${scrollY * speed}px)`;

  return (
    <div
      className={`absolute ${positions[image.position]} ${image.width || defaultSizes[image.position]}`}
      style={{ transform }}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function HeroButton({ text, href, variant = 'primary' }: HeroButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Button
      asChild
      size="lg"
      className={
        isPrimary
          ? 'bg-[#E53935] hover:bg-[#C62828] text-white rounded-full px-8 py-6 text-base font-semibold min-w-[200px]'
          : 'border-2 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold min-w-[200px]'
      }
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}


export function HeroSplitImageExample() {
    return (
      <HeroSection
        variant="split-image"
        heading={
          <>
            Expert Guidance. 
            <br />
            Smarter Decisions.
          </>
        }
        description="We provide strategic advisory, risk management, and claims consultancy services that give you clarity, control, and confidence—from project inception to completion."
        buttons={[
          { text: 'Explore Projects', href: '/services', variant: 'primary' },
          { text: 'Get in touch', href: '/contact', variant: 'secondary' },
        ]}
        backgroundColor="#0A1236"
        sideImage={{
          src: '/hero/hero.svg',
          alt: 'Business professionals shaking hands',
          decorativeLines: true,
          card: {
            icon: '',
            text: 'See our Solutions for Every Stage of Your Project',
            href: '/services',
          },
        }}
      />
    );
  }
  

