import React from "react";
import { StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["D", "L", "M", "M", "J", "V", "S"],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

export default function Calandar({ setDate, date }) {
  let markedDates = {};
  markedDates[date] = {
    selected: true,
    color: "#FFD874",
    textColor: "#FFFFFF",
  };

  return (
    <Calendar
      style={styles.calendar}
      theme={{
        todayTextColor: "#569485",
        selectedDayBackgroundColor: "#FFD874",
        arrowColor: "#569485",
        monthTextColor: "#569485",
        textMonthFontWeight: "800",
        textDayHeaderFontWeight: "600",
        textDayFontSize: 20,
        textMonthFontSize: 25,
        textDayHeaderFontSize: 16,
      }}
      markedDates={markedDates}
      firstDay={1}
      onDayPress={(day) => {
        setDate(day.dateString);
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: "100%",
  },
});
