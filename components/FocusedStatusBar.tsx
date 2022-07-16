import { StatusBar, View, Text } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
