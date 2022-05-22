import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home(){
    return(
    <View style={styles.container}>
        <Header showNotification={true} showBack={false} />         
        <Footer icon={'add'} />
    </View>
    )
}