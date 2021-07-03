  
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Routes
import { AuthRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}