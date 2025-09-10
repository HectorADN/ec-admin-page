import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const EcAdminApp = () => {
  return <RouterProvider router={appRouter} />
}
