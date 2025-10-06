import React from "react";
import { KeyboardAvoidingView, Platform,Image,ScrollView } from "react-native";
import ChatScreen from "./ChatScreen";
import Comment from "./Comment";

export default function App() {
  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    

      <ChatScreen />
      <Comment />
    </KeyboardAvoidingView>
  
  );
}