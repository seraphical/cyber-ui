import { CyTable } from './components/table';

const elmUiComponents = [CyTable];

export const installer = (Vue) => {
  elmUiComponents.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};
