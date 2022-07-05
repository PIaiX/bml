import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import { RoutesList } from "./RoutesList";

export default function AppRouter() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Wrapper>
      <Routes>
        {
            RoutesList.map(({ path, Component  }) => <Route key={path} path={path} element={Component} exact />)
        }
      </Routes>
    </Wrapper>
  );
}
