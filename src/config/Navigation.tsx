import { NavigationContainer, DefaultTheme, Theme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

const Navigation = () => {
  const MyTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#2D3748CC",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <MainStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
