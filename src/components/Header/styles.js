import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 85,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 30
    },

    notification: {
        position: 'absolute',
        right:20,
    },

    notificationBell: {
        width: 30,
        height: 35
    },

    circle: {
        width: 22,
        height: 22,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },

    notificationText: {
        color: '#EE6B26',
        fontWeight: 'bold'
    },

    leftIcon: {
        position: 'absolute',
        left: 20
    },

    leftIconImage: {
        width: 32,
        height: 32
    },

});

export default styles;
