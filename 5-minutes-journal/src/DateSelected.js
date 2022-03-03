import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Moment from "moment";
import "moment/locale/fr";
import { EVENING, MORNING } from "./constants";

export default function DateSelected({ date, chooseView }) {
  const [view, setView] = useState(MORNING);
  const moment = Moment(date && date).locale("fr");
  return (
    <View
      style={[styles.root, view === MORNING ? styles.yellow : styles.green]}
    >
      <Text
        style={[
          styles.date,
          view === EVENING ? { color: "#FFD874" } : { color: "#569485" },
        ]}
      >
        {moment.format("dddd Do MMMM")}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.button,
            view === MORNING ? styles.green : styles.white,
            {
              marginLeft: 20,
              marginRight: 10,
            },
          ]}
          onPress={() => {
            setView(MORNING);
          }}
        >
          <Text
            style={[
              styles.text,
              view === MORNING ? { color: "#FFD874" } : { color: "#000" },
            ]}
          >
            Matin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            view === EVENING ? styles.yellow : styles.white,
            {
              marginRight: 20,
              marginLeft: 10,
            },
          ]}
          onPress={() => {
            setView(EVENING);
          }}
        >
          <Text
            style={[
              styles.text,
              view === EVENING ? { color: "#569485" } : { color: "#000" },
            ]}
          >
            Soir
          </Text>
        </TouchableOpacity>
      </View>
      {Moment(date).isSame(Date.now(), "day") && (
        <TouchableOpacity
          style={[
            styles.formButton,
            view === EVENING
              ? { borderWidth: 1, borderColor: "#FFD874" }
              : { borderWidth: 1, borderColor: "#569485" },
          ]}
          onPress={() => {
            view === MORNING ? chooseView(1) : chooseView(2);
          }}
        >
          <Text
            style={[
              styles.text,
              view === EVENING ? { color: "#FFD874" } : { color: "#569485" },
            ]}
          >
            Remplir le formulaire
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    backgroundColor: "#FFD874",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    marginTop: 30,
  },
  date: {
    marginLeft: 50,
    marginTop: 20,
    fontWeight: "800",
    fontSize: 25,
  },
  buttons: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  formButton: {
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 17,
  },
  yellow: {
    backgroundColor: "#FFD874",
  },
  green: {
    backgroundColor: "#569485",
  },
  white: {
    backgroundColor: "#FFF",
  },
  black: {
    backgroundColor: "#000",
  },
});
