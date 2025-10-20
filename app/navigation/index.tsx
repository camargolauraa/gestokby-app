import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import index from "../index";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={index} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
