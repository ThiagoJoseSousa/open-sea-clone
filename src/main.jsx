import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/style/navbar.css";
import "./assets/style/main.css";

import { createBrowserRouter ,RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";
import CollectionPage from "./routes/CollectionPage.jsx";

import ErrorPage from "./error-page.jsx";
import NavBarContainer from "./pages/NavbarContainer.jsx";
import fetchCollections from "./data/fetchCollections.js";

import UserCollections from "./routes/userCollections.jsx";

import ItemPage from "./routes/ItemPage.jsx";
import MainPage from "./routes/MainPage.jsx";

const router = createBrowserRouter(
  [{
    element:<Root />,
    errorElement:<ErrorPage />,
    loader:fetchCollections,
    children:[
    {path:"/",
    element:<>
    <NavBarContainer />
    <MainPage />
    </>,
    errorElement:<ErrorPage />
    },
    {path:"/Collections/:title",
    element:<>
    <NavBarContainer />
    <CollectionPage />
    </>,
    errorElement:<ErrorPage />}
    ,
    {path:"/UserCollections",
    element:<>
    <NavBarContainer />
    <UserCollections />
    </>, 
    errorElement:<ErrorPage />
    },
    {path:"/Collections/:title/:itemName",
    element:<>
    <NavBarContainer />
    <ItemPage />
    </>,
    errorElement:<ErrorPage />
    }
  ]
  }]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
