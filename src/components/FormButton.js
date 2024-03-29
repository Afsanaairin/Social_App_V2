import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { windowHeight , windowWidth} from '../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style= {styles.buttonContainer}{...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#000',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Lato-Regular'
    }
});

export default FormButton;