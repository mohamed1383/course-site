import { useRoutes } from "react-router-dom"
import pageRoutes from "./routes/route"

export default function App() {

  const Routes = useRoutes(pageRoutes)

  return (
    <>
      {Routes}
    </>
  )
}
