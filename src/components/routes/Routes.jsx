import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../Landing";
import ErrorPage from "../errorPages/ErrorPage";
import Policies, { Privacy, Refund, Tos } from "../policy";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
            errorElement: <ErrorPage />
        },
        {
            path: "/policies",
            element: <Policies />,
            children: [
                {
                    path: "/policies/tos",
                    element: <Tos />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/policies/privacy",
                    element: <Privacy />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/policies/refund",
                    element: <Refund />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/policies/*",
                    element: <Tos />,
                    errorElement: <ErrorPage />
                },
            ],
            errorElement: <ErrorPage />
        }
    ]);

  return (
    <RouterProvider router={router} />
  )
}

export default Routes;