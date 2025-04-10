import { Metadata } from 'next';

declare module 'next' {
  // Override the PageProps type to match how we use it
  interface PageProps {
    params: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export {} 