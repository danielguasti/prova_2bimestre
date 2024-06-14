// components/Layout.js
import Cabecalho from "./components/cabecalho"
import Footer from "./components/footer"



const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <Cabecalho />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

export default Layout

