import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * This component represents the summary
 * card view of an artist:
 * - Image
 * - Name
 * - Number of songs (Count)
 */
const ArtistSummary = ({ imageSource, title, number }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageSource }} style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: 600,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 15,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  number: {
    fontSize: 20,
    marginRight: 15,
    alignItems: "flex-end",
  },
});

export default ArtistSummary;
