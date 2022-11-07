import {Header} from './components/Header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Z List</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
