import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Colors from "../configs/Colors";

export default function CalculatorScreen() {
  const [showSplit, setShowSplit] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.adContainer}>
        <Text>Ads bar here</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.billContainer}>
          <View style={styles.billTextContainer}>
            <Text style={styles.billText}>Bill</Text>
          </View>
          <View style={styles.billAmountContainer}>
            <TextInput placeholder="$0.00" keyboardType="numeric"></TextInput>
          </View>
        </View>
        <View style={styles.tipPercentContainer}>
          <View style={styles.tip15Container}>
            <Text style={styles.tipPercentText}>15%</Text>
          </View>
          <View style={styles.tip18Container}>
            <Text style={styles.tipPercentText}>18%</Text>
          </View>
          <View style={styles.tip20Container}>
            <Text style={styles.tipPercentText}>20%</Text>
          </View>
          <View style={styles.tipCustomContainer}>
            <Text style={styles.tipPercentText}>C</Text>
          </View>
        </View>
        <View style={styles.tipContainer}>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipText}>Tip</Text>
          </View>
          <View style={styles.tipAmountContainer}>
            <TextInput placeholder="$0.00" keyboardType="numeric"></TextInput>
          </View>
        </View>
        <View style={styles.splitContainer}>
          <View style={styles.splitButtonContainer}>
            <Text style={styles.splitQuestionText}>
              {showSplit ? "Split By" : "Split?"}
            </Text>
          </View>
          {/* <View style={styles.splitByContainer}>
            <Text style={styles.splitByText}>Split By</Text>
          </View> */}
          {showSplit ? (
            <View style={styles.splitNumberContainer}>
              <TextInput placeholder="$0.00" keyboardType="numeric"></TextInput>
            </View>
          ) : null}
        </View>
        <View style={styles.totalDivider} />
        <View style={styles.totalContainer}>
          <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>Total</Text>
          </View>
          <View style={styles.totalAmountContainer}>
            <TextInput placeholder="$0.00" keyboardType="numeric"></TextInput>
          </View>
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
