import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Axios from "axios";
import axios from "axios";
export default function Custom() {
  var [city, setCity] = useState("bengaluru");
  var [data, setData] = useState({ name: "", weather: [""] });
  var call = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df95b43c4fa9e5d9f45febbc53bc4462`
      )
      .then((res) => {
        setData((data = res.data));
        console.log(data);
      });
  };
  return (
    <View style={Style.cont}>
      <TextInput
        style={{ borderWidth: 2 }}
        onChangeText={(text) => setCity((city = text))}
      />
      <Button title="get weather" onPress={call}></Button>

      <View style={Style.main}>
        <Text style={Style.city}>{data.name}</Text>
        <Text style={Style.wea}>{data.weather[0].description}</Text>
      </View>
    </View>
  );
}
var Style = StyleSheet.create({
  main: {
    marginTop: 80,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
  },
  city: {
    fontSize: 20,
  },
  wea: {
    fontSize: 50,
    marginBottom: 20,
  },
  cont: {
    margin: 10,
  },
});
