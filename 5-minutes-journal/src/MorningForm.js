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

export default function MorningForm({ date, chooseView }) {
  const moment = Moment(date && date).locale("fr");
  return (
    <Formik
      initialValues={{
        affirmation: "",
        plan: "",
        gratitudes: { 1: "", 2: "", 3: "" },
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={[styles.root]}>
          <Text style={[styles.date]}>{moment.format("dddd Do MMMM")}</Text>
          <Text style={[styles.questions]}>Ce matin je me sens : </Text>
          <Text style={[styles.questions]}>Mes trois gratitudes : </Text>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>1</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("gratitudes.1")}
              onBlur={handleBlur("gratitudes.1")}
              value={values.email}
            />
          </View>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>2</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("gratitudes.2")}
              onBlur={handleBlur("gratitudes.2")}
              value={values.email}
            />
          </View>
          <View style={[styles.gratitudes]}>
            <Text style={[styles.questions]}>3</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("gratitudes.3")}
              onBlur={handleBlur("gratitudes.3")}
              value={values.email}
            />
          </View>
          <Text style={[styles.questions]}>
            Que vais-je faire pour qu’aujourd’hui soit une magnifique journée ?
          </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={handleChange("plan")}
            onBlur={handleBlur("plan")}
            value={values.plan}
          />
          <Text style={[styles.questions]}>Mon affirmation du jour : </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={handleChange("affirmation")}
            onBlur={handleBlur("affirmation")}
            value={values.affirmation}
          />
          <TouchableOpacity
            style={[styles.formButton]}
            onPress={() => {
              handleSubmit;
              chooseView(0);
            }}
          >
            <Text style={[styles.text, { color: "#FFD874" }]}>Valider</Text>
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
    backgroundColor: "#FFD874",
    overflow: "scroll",
  },
  date: {
    display: "flex",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "800",
    fontSize: 25,
    color: "#569485",
  },
  questions: {
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
    backgroundColor: "#569485",
    borderRadius: 20,
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 17,
  },
});
