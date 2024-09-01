import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Navigation({ route }) {
  const { user } = useContext(UserContext); // Access user data from context
  const pageName = route.name;

  return (
      <SafeAreaView>
           <View style={styles.container}>
      <Text style={styles.pageName}>{pageName}</Text>
      {user?.img ? (
        <Image
          source={{ uri: user.img }}
          style={styles.profileImage}
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:20,
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  pageName: {
    fontSize: 18,
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  placeholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
});
