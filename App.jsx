import React, { useState } from 'react';
import styles from './Styles';
import Rules from './Rules';
import GameComponent from './GameComponent';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

export default function App() {
  const [ page, setPage ] = useState(true);
  const togglePage = () => setPage(!page);
  return (
    <SafeAreaView style={styles.container}>
    { page ? <GameComponent/> : <Rules/> }
    <TouchableOpacity style={ page ? styles.pageToggleButton : styles.dark_button} onPress={togglePage}>

    {page ? <Text style={styles.light_text}>RULES</Text> : <Text style={styles.dark_text}>PLAY</Text>}
    
    </TouchableOpacity>
    </SafeAreaView>
  );
}

