import { NavigationActions } from 'react-navigation';

let container; // eslint-disable-line

function setContainer(routerContainer) {
  container = routerContainer;
}

function reset(routeName, params) {
  container.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
}

function navigate(routeName, params, key) {
  try {
    container.dispatch(
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
        key,
      }),
    );
  } catch (err) {
    console.error(err);
  }
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

function getCurrentRouteParams(route = getCurrentRoute()) {
  const { routes, index, params } = route;

  if (routes) return getCurrentRouteParams(routes[index]);

  return params;
}

function getCurrentRouteTitle(route = getCurrentRoute()) {
  const { routes, index, params } = route;

  if (routes) return getCurrentRouteTitle(routes[index]);

  return params.item.title;
}


export default {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute,
  getCurrentRouteName,
  getCurrentRouteParams,
  getCurrentRouteTitle,
};
