import React from 'react';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  ...props 
}) => (
  <div 
    className={`rounded-xl border border-gray-200 bg-white shadow ${className}`} 
    {...props} 
  />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  ...props 
}) => (
  <div className={`p-6 ${className}`} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  className = '', 
  ...props 
}) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  ...props 
}) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);