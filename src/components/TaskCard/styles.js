import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        height: 95,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 4
    },

    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    typeActive: {
        width: 45,
        height: 45
    },

    cardTitle:{
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },

    cardRigtht: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    cardDate:{
        color: '#EE6B26',
        fontSize: 16,
        fontWeight: 'bold'
    },

    cardTime: {
        color: '#707070'
    },

    done: {
        opacity: 0.3
    }

}); 

export default styles;

