import { StyleSheet, Text, View } from "react-native";
import React from "react";

import defaultStyles from "../configs/Styles";

export default function AppText({ children, containerStyle, textStyle }) {
  return (
    <View style={defaultStyles.textContainer}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
