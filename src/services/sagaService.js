import Navigator from './navigator';

const sagaService = {
  service: {
    navigator: Navigator,
  },

  setNavigatorContainer: (navigator) => {
    sagaService.service.navigator.setContainer(navigator);
  },
  getNavigator: () => sagaService.service.navigator,
};

export default sagaService;
