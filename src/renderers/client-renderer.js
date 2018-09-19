import React from 'react';
import { hydrate } from 'react-dom';

export default components => {
  const elements = Array.from(
    document.querySelectorAll('div[data-component-name]'),
  );

  elements.forEach(element => {
    const componentName = element.getAttribute('data-component-name');
    const componentProps = element.getAttribute('data-component-props');
    const Component = components[componentName];
    const props = JSON.parse(decodeURIComponent(componentProps));
    hydrate(React.createElement(Component, props), element);
  });
};
