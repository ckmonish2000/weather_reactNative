import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";
export default function Home({ navigation }) {
  var [test, set] = useState({ weather: ["Loading..."] });

  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=df95b43c4fa9e5d9f45febbc53bc4462"
    )
    .then((res) => {
      //   console.log(res.data);
      set((test = res.data));
    });
  return (
    <View style={Style.main}>
      <Text style={Style.city}>{test.name}</Text>
      <Text style={Style.wea}>{test.weather[0].description}</Text>
      <Button
        title="change city"
        onPress={() => {
          navigation.navigate("Custom");
        }}
      />
    </View>
  );
}

var Style = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  city: {
    fontSize: 20,
  },
  wea: {
    fontSize: 50,
    marginBottom: 20,
  },
});
