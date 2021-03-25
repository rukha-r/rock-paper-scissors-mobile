import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#113151',
  },
  rules_wrapper: {
  	width: '100%',
  	height: '118%'
  },
  rules_image: {
  	width: '100%',
  	height: '100%',
  	resizeMode: 'cover',
  	
  },
  pageToggleButton: {
  	bottom: 50,
  	\width: 100,
  	padding: 10,
  	borderWidth: 2,
  	borderRadius: 20/2,
  	position: 'absolute',
  	alignItems: 'center',
  	borderColor: '#fafafa',
  },
  game_wrapper: {
  	width: '100%',
  	marginTop: 50,
  	height: '100%',
  	alignItems: 'center',
  },
  header: {
  	padding: 20,
  	width: '90%',
  	borderWidth: 2,
  	borderRadius: 30/2,
  	alignItems: 'center',
  	flexDirection: 'row',
  	justifyContent: 'center',
    borderColor: 'rgba(255,255,255,0.4)',
  },
  user_score: {
  	left: 20,
  	padding: 10,
  	borderRadius: 25/2,
  	position: 'absolute',
  	backgroundColor: 'white',
  },
  computer_score: {
  	right: 20,
  	padding: 10,
  	borderRadius: 25/2,
  	position: 'absolute',
  	backgroundColor: 'white',
  },
  score_text: {
  	fontSize: 30,
  	textAlign: 'center'
  },
  game_text: {
  	fontSize: 20,
  	color: '#fafafa',
  	fontWeight: 'bold',
  	textAlign: 'center',
  },
  game_part:{
  	top: 200,
  	position: 'absolute',
  	flexDirection: 'row',
  },
  name: {
  	color: '#fff',
  	fontSize: 18,
  	fontWeight: 'bold',
  	textAlign: 'center'
  },
  image: {
  	width: 150,
  	margin: 28,
    height: 150,
  },
  controller: {
  	width: 350,
  	bottom: 100,
    alignItems: 'center',
    position: 'absolute',
  },
  win_text: {
  	fontSize: 45,
  	color: '#fff',
  	marginBottom: 20,
  	fontWeight: 'bold',
  	textAlign: 'center',
  },
  start_button: {
  	width: 200,
  	padding: 15,
  	borderRadius: 20/2,
  	alignItems: 'center',
  	backgroundColor:'#fafafa',  	
  },
  start_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dark_text: {
  	color: '#000'
  },
  light_text: {
  	color: '#fafafa'
  },
  dark_button: {
  	width: 100,
    bottom: 50,
  	padding: 10,
  	borderWidth: 2,
  	borderRadius: 20/2,
  	borderColor: '#000',
  	alignItems: 'center',
  	position: 'absolute',  	
  }
});
