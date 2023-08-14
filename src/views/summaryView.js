import React from "react";
import { View, StyleSheet } from "react-native";
import InputFilters from "../components/inputFilters";

const SummaryView = () => {
  return (
    <View style={styles.container}>
      <InputFilters />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SummaryView;
