"use client";
import React from 'react';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from '../ui/icon';

interface CardProps {
  title: string;
  subtitle?: string;
  icon?: IconDefinition;
  withIcon?: boolean; 
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, icon, withIcon = false, description, className='' }: CardProps) => {
  return (
    <div className={`min-w-48 p-3 rounded-md shadow shadow-slate-400 ${className}`}>
      {withIcon && icon && <Icon icon={icon} />}
      <div className='mt-3'>
        <p className='mb-3'>
          <span className='text-4xl font-semibold text-primary uppercase'>{title}</span>
          {subtitle && <span> - {subtitle}</span>}
        </p>
        <p className='uppercase text-base font-normal'>{description}</p>
      </div>
    </div>
  );
}

export default Card;