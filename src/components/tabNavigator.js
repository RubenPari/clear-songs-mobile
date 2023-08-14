import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ByArtistView from "../views/byArtistView";
import SummaryView from "../views/summaryView";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Summary" component={SummaryView} />
      <Tab.Screen name="By Artist" component={ByArtistView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
