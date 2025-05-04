
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
          {/* Stylized R for Rare Services */}
          <svg 
            viewBox="0 0 50 50" 
            className={`${sizeClasses[size]} text-primary fill-current`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 5C9.5 5 5 9.5 5 15V35C5 40.5 9.5 45 15 45H25C31.5 45 36 40.5 36 35V30H32C28.5 30 25 27.5 25 25C25 22.5 28.5 20 32 20H36V15C36 9.5 31.5 5 25 5H15ZM15 10H25C28.5 10 31 12.5 31 15V15.5H32C35.5 15.5 38 17 38 20C38 23 35.5 25.5 32 25.5H31V35C31 37.5 28.5 40 25 40H15C12.5 40 10 37.5 10 35V15C10 12.5 12.5 10 15 10Z" />
            <path d="M40 20H32C30 20 29 21.5 29 23C29 24.5 30 26 32 26H40L45 31V15L40 20Z" />
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
