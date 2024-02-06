import { BrowserRouter, Route, Routes } from "react-router-dom";

import FrontLayout from "./../components/layout/front-layout/index";
import HomePage from "./../pages/public/HomePage";
import RegisterPage from "./../pages/public/RegisterPage";
import LoginPage from "./../pages/public/LoginPage";
import AboutPage from "./../pages/public/AboutPage";
import ContactPage from "./../pages/public/ContactPage";
import DeliveryPage from "./../pages/public/DeliveryPage";
import OurSalonPage from "./../pages/public/OurSalonPage";
import CartPage from "./../pages/public/CartPage";
import FavoritePage from "./../pages/public/FavoritePage";
import NotFoundPage from "./../pages/public/NotFoundPage";

const Pages = [
  {
    number: 1,
    element: <HomePage />,
    path: "/",
  },
  {
    number: 2,
    element: <AboutPage />,
    path: "about",
  },
  {
    number: 3,
    element: <ContactPage />,
    path: "/contact",
  },
  {
    number: 4,
    element: <ContactPage />,
    path: "/contact",
  },
  {
    number: 5,
    element: <DeliveryPage />,
    path: "/delivery",
  },
  {
    number: 6,
    element: <OurSalonPage />,
    path: "/oursalon",
  },
  {
    number: 7,
    element: <CartPage />,
    path: "/cart",
  },
  {
    number: 8,
    element: <FavoritePage />,
    path: "/favorite",
  },
  {
    number: 9,
    element: <RegisterPage />,
    path: "/register",
  },
  {
    number: 10,
    element: <LoginPage />,
    path: "/login",
  },
  {
    number: 11,
    element: <NotFoundPage />,
    path: "*",
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontLayout />}>
            {Pages.map(({ number, element, path }) => (
              <Route key={number} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
