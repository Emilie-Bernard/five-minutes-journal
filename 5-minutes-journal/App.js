import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Calandar from "./src/Calandar";
import DateSelected from "./src/DateSelected";
import MorningForm from "./src/MorningForm";
import EveningForm from "./src/EveningForm";

export default function App() {
  const [date, setDate] = useState();
  const [view, setView] = useState(0);

  const getDatas = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("morningForm");
      if (jsonValue !== null) {
        console.log(jsonValue);
        const data = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };

  const data = getDatas();
  console.log(data);
  const render = () => {
    switch(view) {
      case 0 :
        return (
        <View style={styles.container}>
          <Calandar setDate={setDate} date={date} />
          <DateSelected date={date} chooseView={setView} />
        </View>);
      case 1 :
        return (
        <MorningForm date={date} chooseView={setView} />
        )
      case 2 :
        return (
        <EveningForm date={date} chooseView={setView} />
        )
    }
  }
  return <View style={styles.container}>{render()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginTop: 20,
    overflow: "scroll",
  },
});
