
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  const sizeClasses = {
    small: 'h-6',
    medium: 'h-8',
    large: 'h-12'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="flex items-center">
          {/* Elegant logo for Rare Services */}
          <svg 
            viewBox="0 0 50 50" 
            className={`${sizeClasses[size]} text-primary fill-current`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25 5C14 5 5 14 5 25C5 36 14 45 25 45C36 45 45 36 45 25C45 14 36 5 25 5ZM25 10C33.3 10 40 16.7 40 25C40 33.3 33.3 40 25 40C16.7 40 10 33.3 10 25C10 16.7 16.7 10 25 10Z" />
            <path d="M20 17V33H25C29.4 33 33 29.4 33 25V17H28V25C28 26.7 26.7 28 25 28H25V17H20Z" />
          </svg>
          <span className="ml-2 font-display font-bold text-lg md:text-xl tracking-tight">
            Rare Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
