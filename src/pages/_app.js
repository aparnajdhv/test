import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import { Footer } from '@/components/footer';
import { Menu } from '@/components/menu';

export default function App({ Component, pageProps }) {
  return (<div>
  <Header />
  <Menu />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
  
}
