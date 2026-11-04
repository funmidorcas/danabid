import React, { useState } from 'react';
import officialLogoImg from 'C:/Users/DORCAS/.gemini/antigravity/brain/d153ac53-0df1-4c25-bdea-9c195645710e/.user_uploaded/media_1793798273218_344402b7.png';

export default function DanabidLogo({ 
  className = "h-10", 
  showSubtitle = true
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Logo Emblem */}
      <div className="h-full aspect-square flex items-center justify-center shrink-0">
        {!imageError && officialLogoImg ? (
          <img 
            src={officialLogoImg} 
            alt="Danabid Homes & Properties" 
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-base">
            DH
          </div>
        )}
      </div>

      {/* Brand Typography in Black */}
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-[17px] tracking-tight text-gray-900 leading-none">
          DANABID
        </span>
        {showSubtitle && (
          <span className="text-[9px] font-bold tracking-[0.16em] text-emerald-700 uppercase mt-0.5 leading-none">
            HOMES & PROPERTIES
          </span>
        )}
      </div>
    </div>
  );
}
