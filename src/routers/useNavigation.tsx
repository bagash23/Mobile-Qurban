import { createNavigationContainerRef, DrawerActions, StackActions, TabActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

interface RouteParams {
  [key: string]: object | undefined;
}

const useNavigation = () => {
  function navigate<RouteName extends keyof RouteParams>(
    name: RouteName,
    params?: RouteParams[RouteName],
  ) {
    if (navigationRef.isReady() && navigationRef.getCurrentRoute()?.name !== name) {
      //@ts-expect-error
      navigationRef.navigate(name, params);
    }
  }

  function drawerNavigate() {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
    }
  }

  function push(name: string, params?: object) {
    if (navigationRef.isReady() && navigationRef.getCurrentRoute()?.name !== name) {
      navigationRef.current?.dispatch(StackActions.push(name, params));
    }
  }

  function replace(name: string, params?: object) {
    if (navigationRef.isReady() && navigationRef.getCurrentRoute()?.name !== name) {
      navigationRef.current?.dispatch(StackActions.replace(name, params));
    }
  }

  const pop = (totalScreen?: number): void => {
    let popScreen = 1;
    if (totalScreen) {
      popScreen = totalScreen;
    }
    navigationRef.current?.dispatch(StackActions.pop(popScreen));
  };

  const back = (): void => {
    navigationRef.current?.goBack();
  };

  const tabNavigation = (name: string, params?: object): void => {
    if (navigationRef.isReady() && navigationRef.getCurrentRoute()?.name !== name) {
      navigationRef.current?.dispatch(TabActions.jumpTo(name, params));
    }
  };

  const backToHome = (): void => {
    if (navigationRef.current?.canGoBack()) {
      navigationRef.current?.dispatch(StackActions.popToTop());
    } else {
      console.warn('No screen to go back to');
    }
  };

  return {
    navigate,
    push,
    pop,
    back,
    tabNavigation,
    backToHome,
    drawerNavigate,
    replace,
  };
};

export default useNavigation;
