import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Colors from "../configs/Colors";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

export default function CalculatorScreen() {
  const [showSplit, setShowSplit] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.adContainer}>
        <Text>Ads bar here</Text>
      </View>
      <View style={styles.contentContainer}>
        <AppTextInput
          keyboardType={"numeric"}
          label={"Bill"}
          placeholder={"$0.00"}
          textInputStyle={styles.billTextInput}
          topContainerStyle={styles.billTopContainer}
        />
        <View style={styles.tipPercentContainer}>
          <AppText>15%</AppText>
          <AppText>18%</AppText>
          <AppText>20%</AppText>
          <AppText>C%</AppText>
        </View>
        <View style={styles.tipContainer}>
          <AppText>Tip</AppText>
          <AppText>$0.00</AppText>
        </View>
        <View style={styles.splitContainer}>
          {showSplit ? (
            <>
              <AppText>Split By</AppText>
              <AppText>2</AppText>
            </>
          ) : (
            <AppText>Split?</AppText>
          )}
        </View>
        <View style={styles.totalDivider} />
        <View style={styles.totalContainer}>
          <AppText>Total</AppText>
          <AppText>$0.00</AppText>
        </View>
      </View>
      <View style={styles.keypadContainer}>
        <Text>Keypad here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    flex: 0.1,
    backgroundColor: "skyblue",
    alignItems: "center",
    // width:
    // justifyContent: "center",
  },
  billTextInput: {
    fontSize: 30,
  },
  billTopContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 0.7,
    flexDirection: "column",
  },
  keypadContainer: {
    flex: 0.4,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  splitContainer: {
    flexDirection: "row",
    flex: 1,
  },
  tipContainer: {
    flexDirection: "row",
    flex: 1,
  },
  tipPercentContainer: {
    flexDirection: "row",
    flex: 1,
  },
  totalDivider: {
    borderBottomColor: "black",
    height: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  totalContainer: {
    flexDirection: "row",
    flex: 1,
  },
});
