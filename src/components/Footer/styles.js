import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#20295F',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',
        alignItems: 'center'
    },

    button: {
        position: 'relative',
        top: -40
    },

    imageFooter: {
        width: 80,
        height: 80
    },

    text: {
        position: 'relative',
        top: -37,
        color: '#FFF'
    }

    
})

export default styles;
