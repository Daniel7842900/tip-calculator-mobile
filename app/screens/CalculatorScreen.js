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
  billContainer: {
    flexDirection: "row",
    // flex: 1,
  },
  billTextContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  billAmountContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 0.7,
    // backgroundColor: "cyan",
  },
  keypadContainer: {
    flex: 0.4,
    // backgroundColor: "yellow",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    // backgroundColor: "black",
  },
  splitContainer: {
    flexDirection: "row",
  },
  splitButtonContainer: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  splitNumberContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tipContainer: {
    flexDirection: "row",
  },
  tipTextContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  tipAmountContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  tipPercentContainer: {
    flexDirection: "row",
  },
  tip15Container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  tip18Container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  tip20Container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  tipCustomContainer: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  totalDivider: {
    borderBottomColor: "black",
    height: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  totalContainer: {
    flexDirection: "row",
    // flex: 1,
  },
  totalTextContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  totalAmountContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
