import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppText from "./AppText";

import defaultStyles from "../configs/Styles";

export default function AppTextInput({
  keyboardType,
  label,
  placeholder,
  textInputStyle,
  topContainerStyle,
}) {
  return (
    <View style={[defaultStyles.textInputTopContainer, topContainerStyle]}>
      <AppText>{label}</AppText>
      <View style={defaultStyles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={textInputStyle}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
