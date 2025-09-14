import './global.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        <Navbar />

        {/* Glavni sadržaj */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer će biti na dnu */}
        <Footer />
      </body>
    </html>
  );
}
