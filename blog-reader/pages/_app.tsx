import Head from 'next/head';
import Layout, { LayoutProps } from '../components/Layout';
import { ThemeContextProvider } from '../stores/Theme';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, navbarData, footerData }: AppProps & LayoutProps) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <Layout navbarData={navbarData} footerData={footerData}>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </div>
  );
}
