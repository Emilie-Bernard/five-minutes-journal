import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Calandar from "./src/Calandar";
import DateSelected from "./src/DateSelected";
import MorningForm from "./src/MorningForm";
import EveningForm from "./src/EveningForm";

export default function App() {
  const [date, setDate] = useState();
  const [view, setView] = useState(0);

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
