import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { db, storage } from '../fireconfig';
import * as ImagePicker from 'expo-image-picker';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const fetchedMessages = snapshot.docs.map(doc => ({
          _id: doc.id,
          text: doc.data().text,
          createdAt: doc.data().createdAt.toDate(),
          user: {
            _id: doc.data().user._id,
            name: doc.data().user.name
          },
        }));
        setMessages(fetchedMessages);
      });

    return () => unsubscribe();
  }, []);

  const onSend = (newMessages = []) => {
    const { text, _id, createdAt, user } = newMessages[0];
    db.collection('messages').add({
      text,
      createdAt,
      user,
    });
  };

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.uri;
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = uri.split('/').pop();
      const ref = storage.ref().child(filename);
      await ref.put(blob);
      const url = await ref.getDownloadURL();
      db.collection('messages').add({
        text: `Image uploaded: ${url}`,
        createdAt: new Date(),
        user: {
          _id: 'system',
          name: 'System'
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 'user1',
          name: 'User 1'
        }}
      />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ChatScreen;
