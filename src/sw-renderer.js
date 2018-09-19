import components from './render-components';
import Template from './views/index.handlebars';

export default {
  render() {
    return Template(components);
  },
};
