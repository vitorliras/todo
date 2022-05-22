import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },

    filterTextActive:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#EE6B26'
    },

    filterTextInative:{
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.5
    },

    content: {
        width: '100%',
        marginTop: 30
    },

    title: {
        width: '100%',
        borderBottomColor: "#20295F",
        borderBottomWidth:1,
        alignItems: 'center'
    },

    titleText: {
        color: "#20295F",
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }



});

export default styles;

