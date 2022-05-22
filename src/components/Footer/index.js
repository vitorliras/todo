import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import add from '../../assets/add.png';
import save from '../../assets/save.png';

export default function Footer({ icon }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={icon == 'add' ? add : save} style={styles.imageFooter}/>
            </TouchableOpacity>

            <Text style={styles.text}>
                Organizando sua vida
            </Text>
       
        </View>
    )
}

