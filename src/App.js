import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import Error from "./Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/PitchCraft", element: <Home /> },
        { path: "/Startx", element: <Home /> },
        { path: "/About", element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
