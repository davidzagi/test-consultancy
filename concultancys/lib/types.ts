import { ReactNode } from "react";

export interface HeroButton {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }
  
  export interface ParallaxImage {
    src: string;
    alt: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    width?: string;
    height?: string;
    speed?: number;
  }
  
  export interface HeroSectionProps {

    variant?: 'parallax' | 'single-image' | 'video' | 'split-image';
    
    // Content
    brandLabel?: string;
    brandIcon?: string;
    heading: string | ReactNode;
    description: string;
    buttons?: HeroButton[];
    
    // Background options
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    parallaxImages?: ParallaxImage[];
    
    // Styling
    textAlign?: 'left' | 'center';
    overlay?: boolean;
    overlayOpacity?: number;
    minHeight?: string;
    className?: string;
    
    // Custom content
    customContent?: ReactNode;
  }

  export interface HeroButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }
    

  export interface Division {
    id: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    link: string;
  }
  
  export interface DivisionsSectionProps {
    divisions: Division[];
    title?: string;
    subtitle?: string;
    className?: string;
  }
  
  export interface DivisionsSectionAnimatedProps extends DivisionsSectionProps {
    autoPlay?: boolean;
    autoPlayInterval?: number;
  }
  
  export interface DivisionCardProps {
    division: Division;
    className?: string;
  }

  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
    email?: string;
    linkedin?: string;
  }
  
  export interface TeamSectionAnimatedProps {
    members: TeamMember[];
    title?: string;
    subtitle?: string;
    cardsPerView?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
  }

  export interface FAQItem {
    id: string;
    question: string;
    answer: string;
  }
  
  export interface FAQSectionAnimatedProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
    contactText?: string;
    contactLink?: string;
    contactLinkText?: string;
    phone?: string;
    supportText?: string;
    allowMultipleOpen?: boolean;
    animationDuration?: number;
    className?: string;
  }


  export interface SideImageCard {
    icon?: string;
    text: string;
    href?: string;
  }
  
  export interface SideImageConfig {
    src: string;
    alt: string;
    card?: SideImageCard;
    decorativeLines?: boolean;
  }
  
  export interface ExtendedHeroSectionProps extends HeroSectionProps {
    variant?: 'single-image' | 'parallax' | 'video' | 'split-image';
    sideImage?: SideImageConfig;
  }