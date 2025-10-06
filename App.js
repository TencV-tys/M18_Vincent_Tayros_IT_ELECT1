import React from "react";
import { KeyboardAvoidingView, Platform,Image,ScrollView } from "react-native";
import ChatBubble from "./ChatBubble.js";
import CommentSection from "./CommentSection.js";

export default function App() {
  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    

      <ChatBubble />
      <CommentSection />
    </KeyboardAvoidingView>
  
  );
}