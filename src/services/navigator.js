import { NavigationActions } from 'react-navigation';

let container; // eslint-disable-line

function setContainer(routerContainer) {
  container = routerContainer;
}

function navigate(routeName, params) {
  container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

function navigateDeep(actions) {
  container.dispatch(
    actions.reduceRight(
      (prevAction, action) => NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName: action.routeName,
        params: action.params,
        action: prevAction,
      }),
      undefined,
    ),
  );
}

function getCurrentRoute() {
  if (!container || !container.state.nav) {
    return null;
  }

  return container.state.nav.routes[container.state.nav.index] || null;
}

function getCurrentRouteName(route = getCurrentRoute()) {
  const { routes, index, routeName } = route;

  if (routes) return getCurrentRouteName(routes[index]);

  return routeName;
}

export default {
  setContainer,
  navigateDeep,
  navigate,
  getCurrentRoute,
  getCurrentRouteName,
};
