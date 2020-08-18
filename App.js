import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    function dateInfo() {
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();

      const hour = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();

      const hourComplete = hour + ":" + minutes + ":" + seconds;

      setHours(hourComplete);

      const dateComplete = day + "-" + month + "-" + year;

      setDate(dateComplete);
    }

    dateInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.point}>Ponto assesi</Text>
      <Text style={styles.day}>Entrada do funcionário?</Text>
      <Text style={styles.valueday}>{date}</Text>
      <Text style={styles.day}>Horário de chegada?</Text>
      <Text style={styles.valueday}>{hours}</Text>
      <Text style={styles.point}>Assesi sistemas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  point: {
    marginBottom: 40,
    color: "#7586",
    fontSize: 50,
  },
  day: {
    marginBottom: 40,
    color: "#f23",
    fontSize: 20,
  },
  valueday: {
    marginBottom: 40,
    color: "#2548",
    backgroundColor: "#fff",
    fontSize: 15,
  },
});
