import { StyleSheet, Image, SafeAreaView, Dimensions, Text, View } from 'react-native';
import React from 'react';
import Button from './Button';

const { width, height } = Dimensions.get('window');


export default function Categories({ navigation }) {
    return (

        <SafeAreaView style={styles.welcome}>
            <Image style={styles.wel_img} source={require("../assets/aa.gif")} />
            {/* <Text style={styles.wel_text}>Welcome to The <Text style={styles.italicText}>n-Notes</Text> App</Text> */}
            <View style={styles.buttonContainer}>
            <Button
                    style={styles.button}
                    title="Python"
                    onPress={() => navigation.navigate('Py')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
                <Button
                    style={styles.button}
                    title="Css"
                    onPress={() => navigation.navigate('Cs')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    welcome: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wel_img: {
        width: width * 1,
        // height: height , 
        resizeMode: 'contain',
        marginBottom: 20,
    },
    wel_text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
        color: '#555',
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        lineHeight: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        marginTop: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 10,
    },
});
