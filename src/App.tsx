import { HomePage } from "~/page"
import { Header, Footer } from "./layers"
import "rsuite/dist/rsuite.min.css"
import "~/theme/color.css"

export function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}
