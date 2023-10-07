import Navbar from '@/components/Navbar'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'

export async function generateMetadata() {
  return {
    title: 'Home',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
        />
      </head>
      <body>
        <NextTopLoader
          color='white'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing='ease'
          speed={200}
          shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        />
        <Topbar></Topbar>
        <Navbar></Navbar>

        <div className='max-w-[1440]'>{children}</div>

        <Footer></Footer>
      </body>
    </html>
  )
}
