import LoadingScreen from 'components/LoadingScreen';
import React, { lazy, Suspense } from 'react';

const loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<LoadingScreen />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
