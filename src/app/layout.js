import './globals.css'
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Provider from './components/Provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
        <Provider>
          <Header />
          {/* <header>
            <AppBar />
          </header> */}
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
