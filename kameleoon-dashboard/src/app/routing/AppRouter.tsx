import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { appRoutes } from "./Router";
import { Spinner } from "../../shared/ui/spinner/Spinner";
import { Header } from "../../widgets/header/Header";

export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
