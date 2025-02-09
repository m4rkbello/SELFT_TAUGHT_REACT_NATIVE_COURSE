/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
import React from "react";
import {StyleSheet, View, Text, TextInput} from 'react-native';

function TextInputComponent() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Text Input Component
            </Text>
                <TextInput />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});


export default TextInputComponent;