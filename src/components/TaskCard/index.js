import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import iconDefault from '../../assets/default.png';


export default function TaskCard({ done }){
    return (
        <TouchableOpacity style={styles.card}>
            <View style={[styles.cardLeft, done && styles.done]}>
                <Image source={iconDefault} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>Fazer Relatório</Text>
            </View>

            <View style={styles.cardRigtht}>
                <Text style={styles.cardDate}>22/05/2022</Text>
                <Text style={styles.cardTime}>10:00</Text>
            </View>
        </TouchableOpacity>
    )
}


