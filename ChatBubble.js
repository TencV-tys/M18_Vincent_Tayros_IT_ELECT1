import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ChatBubble = ({ text, isMe, avatar, username, timestamp }) => {
  return (
    <View style={[
      styles.container,
      { flexDirection: isMe ? "row-reverse" : "row" }
    ]}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.messageContainer}>
        {!isMe && <Text style={styles.username}>{username}</Text>}
        <View style={[
          styles.bubble,
          isMe ? styles.myBubble : styles.otherBubble
        ]}>
          <Text style={isMe ? styles.myText : styles.otherText}>
            {text}
          </Text>
        </View>
        <Text style={[
          styles.timestamp,
          { textAlign: isMe ? "right" : "left" }
        ]}>
          {timestamp}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginVertical: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: "#007bff",
  },
  messageContainer: {
    flex: 1,
    maxWidth: "80%",
  },
  username: {
    fontSize: 12,
    color: "#ccc",
    marginBottom: 4,
    marginLeft: 8,
  },
  bubble: {
    padding: 12,
    borderRadius: 18,
    marginVertical: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  myBubble: {
    backgroundColor: "#007bff",
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderBottomLeftRadius: 4,
  },
  myText: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
  },
  otherText: {
    color: "#333",
    fontSize: 16,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 10,
    color: "#888",
    marginTop: 4,
    marginHorizontal: 8,
  },
});

export default ChatBubble;