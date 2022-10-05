import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundry";
import Hero from "../components/Hero";
const ImgCard = React.lazy(() => import("../components/ImgCard"));
const Lodging = React.lazy(() => import("../components/Lodging"));

const Home = () => {
  return (
    <div>
      <Hero />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
      <Suspense fallback={<div>...</div>}>
        <ImgCard />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <Lodging />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
