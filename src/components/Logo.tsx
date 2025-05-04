
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-display font-bold ${sizeClasses[size]} tracking-tight text-primary`}>
        Rare Services
      </span>
    </div>
  );
};

export default Logo;
