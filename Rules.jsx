import React from 'react';
import styles from './Styles.js';
import rules from './assets/rules.png';
import { SafeAreaView, Image, Text } from 'react-native'

const Rules = () => {
	return (
		<SafeAreaView style={styles.rules_wrapper}>
		<Image style={styles.rules_image} source={rules}/>
		</SafeAreaView>
	)
}

export default Rules