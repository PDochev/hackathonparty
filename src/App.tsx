import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppPage from "./pages/AppPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/app",
        element: <AppPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
