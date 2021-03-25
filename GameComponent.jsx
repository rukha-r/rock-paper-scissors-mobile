import React, { useState } from 'react';
import styles from './Styles';
import empty from './assets/empty.png';
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissor from "./assets/scissor.png";
import { SafeAreaView,TouchableOpacity, Image,View,Text, Alert } from 'react-native'

const GameComponent = () => {	
  const pictures = [scissor, rock, paper];
  const [row, setRow] = useState(false);
  const [score, setScore] = useState(0);
  const [youWin, setWin] = useState(false);
  const [started, setStarted] = useState(false);
  const [comp_score, setCompScore] = useState(0);
  const [random_player, setRandomPlayer] = useState(rock);
  const [random_computer, setRandomComputer] = useState(paper);
  const startFunction = () => {
    const user_num = Math.round(
      Math.random(Number(pictures.length - 1)) * Number(pictures.length - 1)
    );
    const comp_num = Math.round(
      Math.random(Number(pictures.length - 1)) * Number(pictures.length - 1)
    );
    setRandomPlayer(pictures[user_num]);
    setRandomComputer(pictures[comp_num]);
    setStarted(true);
    if (
      (user_num === 1 && comp_num === 0) ||
      (user_num === 0 && comp_num === 2) ||
      (user_num === 2 && comp_num === 1)
    ) {
      setWin(true);
      setRow(false);
      setScore(score + 1);
    } else if (
      (user_num === 0 && comp_num === 1) ||
      (user_num === 2 && comp_num === 0) ||
      (user_num === 1 && comp_num === 2)
    ) {
      setWin(false);
      setRow(false);
      setCompScore(comp_score + 1);
    } else {
      setRow(true);
      setWin(false);
    }
    if (score === 10 && score > comp_score) {
      alert("Congrats bud ! You won the game!");
      setScore(0);
      setCompScore(0);
      setStarted(false);
    } else if (comp_score === 10 && comp_score > score) {
      alert("Huh, it seems its not your day bud!");
      setScore(0);
      setCompScore(0);
      setStarted(false);
    }
  };
	return (
		<SafeAreaView style={styles.game_wrapper}>
			<View style={styles.header}> 			
			<View style={styles.user_score}>
			<Text>SCORE</Text>
			<Text style={styles.score_text}>{score}</Text>
			</View>
			<View>
			<Text style={styles.game_text}>ROCK</Text>
			<Text style={styles.game_text}>PAPPER</Text>
			<Text style={styles.game_text}>SCISSORS</Text>
			</View>
			<View style={styles.computer_score}>
			<Text>SCORE</Text>
			<Text style={styles.score_text}>{comp_score}</Text>
			</View>
			<View style={styles.game_part}>
			<View>
			<Text style={styles.name}>PLAYER</Text>
			<Image style={styles.image} source={started ? random_player : empty}/>
			</View>		
			<View>
			<Text style={styles.name}>COMPUTER</Text>
			<Image style={styles.image} source={started ? random_computer : empty}/>
			</View>
			</View>
			</View>		
			<View style={styles.controller}>
			{ !started ? <Text style={styles.win_text}>GOOD  LCUK</Text> : youWin ? <Text style={styles.win_text}>YOU WIN</Text> : row ? <Text style={styles.win_text}>- SET -</Text> : <Text style={styles.win_text}>YOU  LOSE</Text>}
			<TouchableOpacity style={styles.start_button} onPress={startFunction}>
			{ started ? <Text style={styles.start_text}>PLAY AGAIN</Text> : <Text style={styles.start_text}>START</Text> }
			</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default GameComponent