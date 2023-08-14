import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import InputFilters from "../components/inputFilters";
import { getSummary as getSummaryTracks } from "../services/tarckService";
import ArtistSummary from "../components/artistSummary";

// TODO: does not compare
const SummaryView = () => {
  const [summary, setSummary] = useState([]);

  const getSummary = async () => {
    setSummary(await getSummaryTracks());
  };

  return (
    <View style={styles.container}>
      <InputFilters />

      <Button title="search" onPress={getSummary} />

      {Array.isArray(summary) && summary.length > 0 ? (
        summary.map((item, index) => {
          return (
            <ArtistSummary
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              number={item.number}
            />
          );
        })
      ) : (
        <Text style={styles.noSummaryText}>there are no items</Text>
      )}

      {/* DEBUG */}
      {/*<ArtistSummary imageSource="https://th.bing.com/th/id/R.e3b4fe37bf312486aed834cafc7f6297?rik=itkrOd3FEbzrBg&riu=http%3a%2f%2fwww.pixolo.it%2fwp-content%2fuploads%2f2012%2f08%2fsuperbnaturecorner2560x1440wallpaper6773.jpg&ehk=0Du6SKOAaCsKbsxKqZvPoJ4l5OG70knijmouWwy%2bRco%3d&risl=&pid=ImgRaw&r=0" title="pippo" number={23} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  noSummaryText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default SummaryView;
