import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-500 bg-opacity-20 text-green-300 border border-green-500 border-opacity-30';
      case 'warning':
        return 'bg-yellow-500 bg-opacity-20 text-yellow-300 border border-yellow-500 border-opacity-30';
      case 'danger':
        return 'bg-red-500 bg-opacity-20 text-red-300 border border-red-500 border-opacity-30';
      case 'info':
        return 'bg-blue-500 bg-opacity-20 text-blue-300 border border-blue-500 border-opacity-30';
      default:
        return 'bg-gray-700 bg-opacity-50 text-gray-300 border border-gray-600 border-opacity-30';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-0.5 text-xs';
      case 'md':
      default:
        return 'px-3 py-1 text-xs';
    }
  };

  return (
    <span className={`
      inline-flex items-center justify-center rounded-full font-medium
      ${getVariantClasses()}
      ${getSizeClasses()}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;
