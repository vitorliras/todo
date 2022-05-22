import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import styles from './styles'

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';



export default function Home(){
    const [filter, setFilter] = useState('today');    

    return(
    <View style={styles.container}>
        <Header showNotification={true} showBack={false} />         
        
        <View style={styles.filter}>
            <TouchableOpacity onPress={() => setFilter('all')}>
                <Text style={filter == 'all' ? styles.filterTextActive : styles.filterTextInative}>Todos</Text>  
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => setFilter('today')}>
                <Text style={filter == 'today' ? styles.filterTextActive : styles.filterTextInative}>Hoje</Text>  
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => setFilter('month')}>
                <Text style={filter == 'month' ? styles.filterTextActive : styles.filterTextInative}>Mês</Text>  
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => setFilter('week')}>
                <Text style={filter == 'week' ? styles.filterTextActive : styles.filterTextInative}>Semana</Text>  
            </TouchableOpacity> 
            
            <TouchableOpacity onPress={() => setFilter('year')}>
                <Text style={filter == 'year' ? styles.filterTextActive : styles.filterTextInative}>Ano</Text>  
            </TouchableOpacity> 

        </View>

        <View style={styles.title}>
            <Text style={styles.titleText}>TAREFAS</Text>
        </View>


        <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
            <TaskCard done={true}/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            
        </ScrollView>


        <Footer icon={'add'} />
    </View>
    )
}