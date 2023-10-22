import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      {/* <Text>Welcome Screen</Text> */}
      <View className="bg-white/20 rounded-full p-10">
        <View className="bg-white/20 rounded-full p-8">
          <Image
            source={require("../../assets/images/welcome.png")}
            className="w-[200px] h-[200px]"
          />
        </View>
      </View>

      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest">Foody</Text>
        <Text className="font-medium text-lg text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
}
