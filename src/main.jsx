import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/navbar.css";
import "./assets/main.css";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import RankingContainer from "./components/RankingContainer.jsx";
import SlidesContainer from "./components/SlidesContainer";

import Root from "./routes/root.jsx";
import CollectionPage from "./routes/CollectionPage.jsx";

import ErrorPage from "./error-page.jsx";
import NavBarContainer from "./components/NavbarContainer.jsx";
import fetchCollections from "./components/fetchCollections.js";

import UserCollections from "./routes/userCollections.jsx";

import ItemPage, { itemLoader } from "./routes/ItemPage.jsx";
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
