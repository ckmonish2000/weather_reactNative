import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Custom from "./Custom";
const Stack = createStackNavigator();
export default function Navi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "WELCOME" }}
        />
        <Stack.Screen
          name="Custom"
          component={Custom}
          options={{ title: "Weather" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
