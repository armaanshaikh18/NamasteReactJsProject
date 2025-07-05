import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import RestaurantItem from "./components/RestaurantItem";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserLogin from "./utils/UserLogin";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Shimmer from "./components/Shimmer";

// const haeding = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is an H1 tag of armaan"),
//     React.createElement("h2", {}, "This is an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is an H1 tag"),
//     React.createElement("h2", {}, "This is an H2 tag"),
//   ]),
// ]);

const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [showContextData, setShowContextData] = useState();

  useEffect(() => {
    const dataItem = {
      user: "Virat Kohli",
    };
    setShowContextData(dataItem?.user);
  }, []);
  return (
    <UserLogin.Provider
      value={{ userLogin: showContextData, setShowContextData }}
    >
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </UserLogin.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading!!</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantItem /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
