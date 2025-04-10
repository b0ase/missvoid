/**
 * Pinterest Configuration - DISABLED FOR DEMO
 * 
 * This file contains configuration for local gallery display only.
 * Pinterest integration is completely disabled.
 */

export const PINTEREST_CONFIG = {
  // Pinterest integration is disabled
  APP_ID: "",
  API_TOKEN: "",
  USERNAME: "",
  // OAuth configuration (disabled)
  OAUTH: {
    REDIRECT_URI: {
      DEVELOPMENT: "",
      PRODUCTION: ""
    },
    SCOPES: [],
    AUTH_URL: "",
    TOKEN_URL: ""
  },
  // Local board configuration for demo galleries
  BOARDS: [
    { 
      id: "void-xxx", 
      name: "VOID XXX", 
      description: "Our most provocative evening wear collection",
      count: 2,
      localPath: "/demo-images/VOID XXX"
    },
    { 
      id: "void-chic", 
      name: "VOID CHIC", 
      description: "Elegant and sophisticated fetish-inspired fashion",
      count: 83,
      localPath: "/demo-images/VOID CHIC"
    },
    { 
      id: "void-footwear", 
      name: "VOID FOOTWEAR", 
      description: "Statement footwear for bold fashion statements",
      count: 82,
      localPath: "/demo-images/VOID FOOTWEAR"
    },
    { 
      id: "miss-void", 
      name: "MISS VOID", 
      description: "Our signature collection featuring iconic designs",
      count: 2,
      localPath: "/demo-images/MISS VOID"
    },
    { 
      id: "void-ink", 
      name: "VOID INK", 
      description: "Dark and mysterious artistic expression",
      count: 25,
      localPath: "/demo-images/VOID INK"
    },
    { 
      id: "void-boudoir", 
      name: "VOID BOUDOIR", 
      description: "Intimate and alluring boudoir fashion",
      count: 117,
      localPath: "/demo-images/VOID BOUDOIR"
    },
    { 
      id: "void-industry", 
      name: "VOID INDUSTRY", 
      description: "Industrial and avant-garde inspired pieces",
      count: 98,
      localPath: "/demo-images/VOID INDUSTRY"
    },
    { 
      id: "void-muscles", 
      name: "VOID MUSCLES", 
      description: "Strength and form-focused collection",
      count: 120,
      localPath: "/demo-images/VOID MUSCLES"
    }
  ]
};

/**
 * Function to generate a board URL (local only, no Pinterest)
 */
export function getPinterestBoardUrl(boardId: string): string {
  return `/galleries/${boardId}`;
}

/**
 * Function to generate a board embed URL (disabled)
 */
export function getPinterestBoardEmbedUrl(): string {
  return "";
}

/**
 * Function to generate OAuth URL (disabled)
 */
export function getPinterestAuthUrl(): string {
  return "#";
} 