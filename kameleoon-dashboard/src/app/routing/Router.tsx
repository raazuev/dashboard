import { lazy } from "react";

const HomePage = lazy(async () => {
  const module = await import("../../pages/homePage/HomePage");
  return { default: module.HomePage };
});
const ResultsPage = lazy(async () => {
  const module = await import("../../pages/resultsPage/ResultsPage");
  return { default: module.ResultsPage };
});
const FinalizePage = lazy(async () => {
  const module = await import("../../pages/finalizePage/FinalizePage");
  return { default: module.FinalizePage };
});
const NotFound = lazy(async () => {
  const module = await import("../../shared/ui/notFound/NotFound");
  return { default: module.NotFound };
});

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/results/:testId", element: <ResultsPage /> },
  { path: "/finalize/:testId", element: <FinalizePage /> },
  { path: "*", element: <NotFound /> },
];
