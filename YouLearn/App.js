import React, {Component} from 'react';
import { Alert, Button, SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
	TextInput, View, Dimensions, FlatList } from 'react-native';
import logo from './assets/logo.png';
// import Pdf from 'react-native-pdf';

const DATA = [
	{title: 'Disease Prevention', data:['item1']},
	{title: 'Feminine Health', data:['item1']},
	{title: 'Life Skills', data:['item1']},
	{title: 'Promo Videos', data:['item1']},
	{title: 'Sexual Education', data:['item1']},
	{title: 'WASH', data:['item1']},
	{title: 'ASL Dictionary', data:['item1']},
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.item}>{title}</Text>
    </View>
  );
}

export default class App extends Component {
  	render () {
  		//const source = {uri: "https://drive.google.com/drive/u/1/folders/1yq9XD0w5PkmPwKrKamabsuqbot_jjE_f"};
	  	return (
	    	<View style={styles.container}>
	    		<View style={styles.rowContainer}>
		      		<Image source={logo} style={styles.logo}/>
		      		<TouchableOpacity
		      			style={styles.button}
	          			onPress={() => Alert.alert('Menu will pop up')}>
	          		</TouchableOpacity>
	          	</View>
	          	<View style={styles.rowContainer}>
	          		<TextInput style={styles.search} placeholder="Search"/>
	          	</View>
	          	<View style={styles.rowContainer}>
	          		<SectionList
						sections={DATA}
						keyExtractor={(item, index) => item + index}
        				renderItem={({ item }) => <Item title={item} />}
        				renderSectionHeader={({ section: { title } }) =>
        					(<Text style={styles.sectionHeader}>{title}</Text>)}
					/>
	          	</View>
	    	</View>
	  	);
	}
}

const styles = StyleSheet.create({
  	rowContainer: {
  		flexDirection: 'row',
  		justifyContent: 'space-between',
  		alignItems: 'center',
  	},
  	container: {
  		flexDirection: 'column',
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'flex-start',
  	},
  	button: {
  		flex: 1,
  		margin: 50,
  		marginTop: 70,
  		padding: 20,
  		alignItems: 'center',
  		borderRadius: 5,
    	justifyContent: 'center',
    	backgroundColor: 'gray',
  	},
  	buttonText: {
  		color: 'orange',
  		fontSize: 20,
  	},
  	logo: {
  		flex: 4,
  		padding: 50,
  		marginTop: 20,
    	width: 300,
    	height: 100,
    	resizeMode: "contain",
  	},
  	search: {
  		backgroundColor: '#dcdcdc',
  		flex: 1,
  		padding: 20,
   		marginBottom: 20,
  	},
  	item: {
  		padding: 10,
  		fontSize: 20,
  	},
  	sectionHeader: {
	    paddingTop: 2,
	    paddingLeft: 10,
	    paddingRight: 10,
	    paddingBottom: 2,
	    fontSize: 20,
	    fontWeight: 'bold',
	    backgroundColor: 'rgba(247,247,247,1.0)',
	},
	// pdf: {
 //        flex:1,
 //        width:Dimensions.get('window').width,
 //        height:Dimensions.get('window').height,
 //    },
});
