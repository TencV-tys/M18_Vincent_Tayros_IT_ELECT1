import React, { useState, useRef, useEffect } from "react";
import { 
  View, 
  Text,
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView,
  ImageBackground,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image // Added Image import
} from "react-native";
import ChatBubble from "./ChatBubble";

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello there! How are you doing?",
      isMe: false,
      avatar: require("./assets/mark.jpg"),
      username: "Mark Gwapo",
      timestamp: "2:30 PM"
    },
    {
      id: "2",
      text: "I'm doing great! Thanks for asking.",
      isMe: true,
      avatar: require("./assets/profile.jpg"),
      username: "You",
      timestamp: "2:31 PM"
    },
    {
      id: "3",
      text: "Want to hang out this weekend?",
      isMe: false,
      avatar: require("./assets/mark.jpg"),
      username: "Mark Gwapo",
      timestamp: "2:32 PM"
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim().length === 0) return;

    const newMsg = {
      id: Date.now().toString(),
      text: newMessage,
      isMe: true,
      avatar: require("./assets/profile.jpg"),
      username: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Simulate auto-reply after 1 second
    setTimeout(() => {
      const autoReplies = [
        "That's interesting! Tell me more.",
        "I see what you mean.",
        "Thanks for sharing that!",
        "Let me think about that...",
        "That sounds great!",
        "I agree with you.",
        "Maayong gabie!",
        "Kumusta ka?"
      ];
      
      const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      
      const autoReplyMsg = {
        id: Date.now().toString() + "auto",
        text: randomReply,
        isMe: false,
        avatar: require("./assets/mark.jpg"),
        username: "Mark Gwapo",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, autoReplyMsg]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <ChatBubble
      text={item.text}
      isMe={item.isMe}
      avatar={item.avatar}
      username={item.username}
      timestamp={item.timestamp}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={require("./assets/profile.jpg")} 
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        >
          {/* Chat Header */}
          <View style={styles.header}>
            <Image 
              source={require("./assets/mark.jpg")}
              style={styles.headerAvatar}
            />
            <View style={styles.headerInfo}>
              <Text style={styles.headerName}>Mark Gwapo</Text>
              <Text style={styles.headerStatus}>Online</Text>
            </View>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callButtonText}>📞</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.videoButton}>
                <Text style={styles.videoButtonText}>📹</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Chat Messages */}
          <View style={styles.chatSection}>
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={renderMessage}
              style={styles.chatContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.messagesContainer}
            />
          </View>

          {/* Message Input */}
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.attachmentButton}>
              <Text style={styles.attachmentText}>📎</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#999"
              value={newMessage}
              onChangeText={setNewMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity 
              style={[
                styles.sendButton,
                newMessage.trim().length === 0 && styles.sendButtonDisabled
              ]}
              onPress={sendMessage}
              disabled={newMessage.trim().length === 0}
            >
              <Text style={styles.sendButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  background: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#007bff",
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 2,
  },
  headerStatus: {
    fontSize: 14,
    color: "#00ff00",
    fontWeight: "500",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  callButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
  },
  videoButton: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
  },
  callButtonText: {
    fontSize: 18,
    color: "white",
  },
  videoButtonText: {
    fontSize: 18,
    color: "white",
  },
  chatSection: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  attachmentButton: {
    padding: 12,
    marginRight: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
  },
  attachmentText: {
    fontSize: 18,
    color: "white",
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    maxHeight: 100,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sendButton: {
    backgroundColor: "#007bff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sendButtonDisabled: {
    backgroundColor: "#666",
    shadowColor: "#000",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});