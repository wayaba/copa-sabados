import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SessionAuthProvider from './context/SessionAuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SessionAuthProvider>
          <div className="max-w-3xl mx-auto p-4 ">
            <Header />
            <main className="mt-8">{children}</main>
            <Footer />
          </div>
        </SessionAuthProvider>
      </body>
    </html>
  )
}
