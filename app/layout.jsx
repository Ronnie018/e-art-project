import '@styles/globals.scss';
import Navbar from '@app/components/Navbar';
import AppContext from './contexts/app';
import Loading from './components/Loading/page';
import { Suspense } from 'react';
import StyledComponentsRegistry from '@utils/StyledComponentsRegistry';
import SideNav from './components/SideNav';
import Background from './components/Background';
import Head from 'next/head';

export const metadata = {
  title: 'E-ART',
  description: 'Your online art gallery',
};

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <AppContext>
        <html lang='en'>
          <Head>
            <link rel='preload' href='/images/load-bg.png' as='image' />
          </Head>
          <body>
            <Navbar />
            <Background />
            <Suspense fallback={<Loading />}>
              <div className='container relative m-auto min-h-c-screen grid core w-full sm:w-10/12'>
                <SideNav />
                {children}
              </div>
            </Suspense>
          </body>
        </html>
      </AppContext>
    </StyledComponentsRegistry>
  );
}
