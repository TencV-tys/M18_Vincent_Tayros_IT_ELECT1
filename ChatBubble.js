
import React from "react";
import { View, Text, Image } from "react-native";

export default function ChatBubble({ text, isMe, avatar }) {
  return (
    <View
      style={{
        flexDirection: isMe ? "row-reverse" : "row",
        alignItems: "flex-end",
        marginVertical: 5,
      }}
    >
      {/* Avatar (local image) */}
      <Image
        source={require("./assets/picture.jpeg")} // avatar must be a require() image
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginHorizontal: 5,
        }}
      />

      {/* Chat bubble */}
      <View
        style={{
          alignSelf: isMe ? "flex-end" : "flex-start",
          backgroundColor: isMe ? "#0078fe" : "#e5e5ea",
          padding: 10,
          borderRadius: 15,
          maxWidth: "70%",
        }}
      >
        <Text style={{ color: isMe ? "white" : "black" }}>{text}</Text>
      </View>
    </View>
  );
}