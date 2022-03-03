import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Moment from "moment";
import "moment/locale/fr";
import { Formik } from "formik";

export default function EveningForm({ date, chooseView }) {
  const moment = Moment(date && date).locale("fr");
  return (
    <Formik
      initialValues={{ improve: "", happened: {1: "", 2: "", 3: ""} }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={[styles.root]}>
          <Text style={[styles.date]}>{moment.format("dddd Do MMMM")}</Text>
          <Text style={[styles.questions]}>Ce soir je me sens : </Text>
          <Text style={[styles.questions]}>3 choses qui sont arrivées : </Text>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>1</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("happened.1")}
              onBlur={handleBlur("happened.1")}
              value={values.happened}
            />
          </View>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>2</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("happened.2")}
              onBlur={handleBlur("happened.2")}
              value={values.happened}
            />
          </View>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>3</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("happened.3")}
              onBlur={handleBlur("happened.3")}
              value={values.happened}
            />
          </View>
          <Text style={[styles.questions]}>
            Comment aurai-je pu rendre cette journée meilleure ?
          </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={handleChange("improve")}
            onBlur={handleBlur("improve")}
            value={values.improve}
          />
          <TouchableOpacity
            style={[styles.formButton]}
            onPress={() => {
              handleSubmit;
              chooseView(0);
            }}
          >
            <Text style={[styles.text, { color: "#569485" }]}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    backgroundColor: "#569485",
    overflow: "scroll",
  },
  date: {
    display: "flex",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "800",
    fontSize: 25,
    color: "#FFD874",
  },
  questions: {
    color: "#FFF",
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  gratitudes: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 10,
    display: "flex",
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  formButton: {
    alignItems: "center",
    backgroundColor: "#FFD874",
    borderRadius: 20,
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 17,
  },
});
