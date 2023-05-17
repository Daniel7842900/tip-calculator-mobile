import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppText from "./AppText";

import defaultStyles from "../configs/Styles";

export default function AppTextInput({ keyboardType, label, placeholder }) {
  return (
    <View style={defaultStyles.textInputTopContainer}>
      <AppText>{label}</AppText>
      <View style={defaultStyles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
