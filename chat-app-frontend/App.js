import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

export default function App() {
  const [username, setUsername] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      {username ? (
        <ChatScreen username={username} />
      ) : (
        <LoginScreen onLogin={setUsername} />
      )}
    </View>
  );
}
