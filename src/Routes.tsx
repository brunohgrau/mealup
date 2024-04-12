import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const AppRoutes: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const location = useLocation();
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div id="modal" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {children}
      </Routes>
    </>
  );
};
