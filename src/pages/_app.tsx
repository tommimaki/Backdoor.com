import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css';
import "../styles/dropdown.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
