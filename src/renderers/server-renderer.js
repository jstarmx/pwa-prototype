const React = require('react');
const ReactDOMServer = require('react-dom/server');

const wrapComponent = (componentName, props, renderedMarkup) =>
  `<div data-component-name="${componentName}" data-component-props="${props}">${renderedMarkup}</div>`;

module.exports = (Component, props, options = {}) => {
  const ReactElement = React.createElement(Component, props);
  if (options.static) {
    return ReactDOMServer.renderToStaticMarkup(ReactElement);
  }
  const renderedHtml = ReactDOMServer.renderToString(ReactElement);
  const componentName = Component.name;
  const componentProps = encodeURIComponent(JSON.stringify(props));
  return wrapComponent(componentName, componentProps, renderedHtml);
};
