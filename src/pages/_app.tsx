import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { CookiesProvider } from 'react-cookie';

import './search.css';


export default function App({ Component, pageProps }: AppProps) {
  return <CookiesProvider>
               <Component {...pageProps} />
   </CookiesProvider>
}
