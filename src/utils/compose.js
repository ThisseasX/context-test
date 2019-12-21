const compose = (...enhancers) => Component =>
  enhancers.reduce(
    (enhancedComponent, enhancer) => enhancer(enhancedComponent),
    Component,
  );

export default compose;
