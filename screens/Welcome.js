import { StyleSheet, Image, SafeAreaView, Dimensions, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.welcome}>
            <Image style={styles.wel_img} source={require("../assets/aaa.gif")} />
            <Text style={styles.wel_text}>Welcome to The <Text style={styles.italicText}>GENCO</Text></Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Categories"
                    onPress={() => navigation.navigate('Categories')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                />
                <Button
                    style={styles.button}
                    title="Community"
                    onPress={() => navigation.navigate('Signin')}
                    color="green"
                    textStyle={{ fontSize: 20 }}
                /></View>
            <View style={styles.buttonContainer1}>
                <Button
                    style={styles.button}
                    title="Signin"
                    onPress={() => navigation.navigate('Signin')}
                    color="red"
                    textStyle={{ fontSize: 20 }}
                /><Button
                style={styles.button}
                title="Signin"
                onPress={() => navigation.navigate('Signin')}
                color="red"
                textStyle={{ fontSize: 20 }}
            />
            </View>
        </SafeAreaView>
    );
}

export default Welcome;

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
        // fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
        fontWeight:"condensedBold",
        color: '#555', 
        marginBottom: 10,
        textTransform: 'uppercase', 
        letterSpacing: 1,
        lineHeight: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '90%', 
        marginTop: 20, 
        marginBottom: 20,
    },
    buttonContainer1: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '90%', 
        marginTop: 50, 
        // marginBottom: 40,
    },
    button: {
        flex: 1, 
        marginHorizontal: 10, 
    },
});
