"use client";

import React from 'react';

type PlaceholderImageProps = {
  text?: string;
  collection?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
  index?: number;
  className?: string;
};

/**
 * A component that generates a styled placeholder for demo purposes
 */
export default function PlaceholderImage({
  text = 'Image',
  collection = '',
  backgroundColor = '#2a2a2a',
  textColor = '#ffffff',
  width = 400,
  height = 300,
  index = 0,
  className = '',
}: PlaceholderImageProps) {
  // Calculate a deterministic color based on index
  const colors = ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a'];
  const bgColor = index !== undefined ? colors[index % colors.length] : backgroundColor;
  
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <div className="text-center p-4">
        <div className="text-2xl font-bold">{text}</div>
        {collection && <div className="mt-2 text-sm opacity-70">{collection}</div>}
      </div>
    </div>
  );
} 