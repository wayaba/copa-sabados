import AppBar from './components/AppBar'
import Provider from './components/Provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AppBar />
          <div className={'  min-h-screen '}>{children}</div>
        </Provider>
      </body>
    </html>
  )
}
