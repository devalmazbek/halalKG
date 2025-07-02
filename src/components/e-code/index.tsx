// src/components/ECodeCard.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

import {ECode} from "@/app/codes/type";

interface ECodeCardProps {
  item: ECode;
}

export const ECodeCard: React.FC<ECodeCardProps> = ({item}: ECodeCardProps)=> {
  const { code, nameRu, name, category } = item;
  return (
    <div className="flex-auto">
      <motion.div
        key={code}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-50 rounded-lg p-4 cursor-pointer"
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{code}</h2>
            <p className="text-gray-600">{nameRu}</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {category}
        </span>
        </div>
        <p className="mt-4 text-gray-700">{category}</p>
      </motion.div>
    </div>

  );
}
