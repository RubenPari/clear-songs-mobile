import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

/**
 * This component represents the input filters
 * used for the summary view (min and max)
 */
const InputFilters = () => {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  // check if max is a valid number
  const handleMaxChange = (text) => {
    if (!isNaN(text) && text.trim() !== "") {
      setMax(text);
    } else if (text.trim() === "") {
      setMax("");
    }
  };

  // check if min is a valid number
  const handleMinChange = (text) => {
    if (!isNaN(text) && text.trim() !== "") {
      setMin(text);
    } else if (text.trim() === "") {
      setMin("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Max:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={max}
          onChangeText={handleMaxChange}
          placeholder="Enter Max Value"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Min:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={min}
          onChangeText={handleMinChange}
          placeholder="Enter Min Value"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default InputFilters;
