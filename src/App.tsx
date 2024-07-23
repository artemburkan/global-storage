import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "~/page"
import { Header, Footer } from "./layers"
import "rsuite/dist/rsuite.min.css"
import "~/theme/color.css"

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={
            <Navigate
              replace
              to="/"
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
