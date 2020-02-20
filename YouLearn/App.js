import * as React from 'react';
import { Alert, Button, SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
	TextInput, View, Dimensions, FlatList } from 'react-native';
import logo from './assets/logo.png';
import PDFReader from 'rn-pdf-reader-js';
import { Navigation } from 'react-native-navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video } from 'expo-av';

const PDF_DATA = [
	{title: 'Disease Prevention', data:['Cholera Prevention', 'Diabetes', 'Leishmaniasis', 'Malaria', 'Pneumonia',
	'Polio', 'Smallpox', 'STI Prevention', 'Tetanus', 'Tuberculosis Droplet', 'Tuberculosis', 'Zika Prevention']},
	{title: 'Feminine Health', data:['Hedhi Help', 'Hedhi Help Kiswahili', 'Hedhi Help Swahili', 'Menstrual Hygiene',
	'Rose’s Washable Sanitary Pads 2019', 'Rose’s Washable Sanitary Pads 2018', 'Sustainable Solutions']},
	{title: 'Life Skills', data:['A Budget is easy as 123', 'Agriculture 101', 'Expressing Emotions Through Art',
	'Gender Club Formation Guide']},
	{title: 'Sexual Education', data:['Boys Puberty Pamphlet', 'Girls Puberty Pamphlet', 'Puberty Coloring Book']},
	{title: 'WASH', data:['Tippy Tap Project', 'Coloring WASH Booklet', 'WASH Program', 'Food Safety']},
	{title: 'ASL Dictionary', data:['ASL Dictionary']},
];

const Media_DATA = [
	{title: 'Promo Videos', data:['item1']},
];

function SectionListPDFItems({ title, navigation }) {
	return (
		<View style={styles.item}>
      		<Button
      			title={ title }
                style={ styles.item }
      			onPress={() => navigation.navigate('PDFScreen')}
      		/>
    	</View>
	);
}

function SectionListMediaItems({ title, navigation }) {
	return (
		<View style={styles.item}>
      		<Button
      			title={ title }
                style={ styles.item }
      			onPress={() => navigation.navigate('VideoScreen')}
      		/>
    	</View>
	);
}

function HomeScreen({ navigation }) {
    return (
  		<View style={styles.container}>
    		<View style={styles.rowContainer}>
	      		<Image source={logo} style={styles.logo}/>
      		</View>
          	<View style={styles.rowContainer}>
          		<Button
	      			title={'Files'}
        			style={styles.button}
          			onPress={() => navigation.navigate('FileScreen')}
      			/>
      			<Button
	      			title={'Videos'}
        			style={styles.button}
          			onPress={() => navigation.navigate('MediaScreen')}
      			/>
          	</View>
    	</View>
	);
}

function FileScreen({ navigation }) {
	return (
		<View style={styles.pdf}>
			<View style={styles.rowContainer}>
          		<SectionList
					sections={PDF_DATA}
					keyExtractor={(item, index) => item + index}
    				renderItem={({ item }) => <SectionListPDFItems title={item} navigation={navigation}/>}
    				renderSectionHeader={({ section: { title } }) =>
    					(<Text style={styles.sectionHeader}>{title}</Text>)}
				/>
          	</View>
		</View>
	);
}

function MediaScreen({ navigation }) {
	return (
		<View style={styles.pdf}>
			<View style={styles.rowContainer}>
          		<SectionList
					sections={Media_DATA}
					keyExtractor={(item, index) => item + index}
    				renderItem={({ item }) => <SectionListMediaItems title={item} navigation={navigation}/>}
    				renderSectionHeader={({ section: { title } }) =>
    					(<Text style={styles.sectionHeader}>{title}</Text>)}
				/>
          	</View>
		</View>
	);
}

function PDFScreen() {
	return (
		<View style={styles.pdf}>
			<PDFReader
				source={{
					uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
				}}
			/>
		</View>
	);
}

function VideoScreen() {
	return (
		<View style={styles.video}>
      		<Video
  				source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  				rate={1.0}
  				volume={1.0}
  				isMuted={false}
  				resizeMode="cover"
  				shouldPlay
  				style={{ width: 300, height: 300 }}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen name="HomeScreen" component={ HomeScreen } />
				<Stack.Screen name="FileScreen" component={ FileScreen }/>
				<Stack.Screen name="MediaScreen" component={ MediaScreen }/>
				<Stack.Screen name="PDFScreen" component={ PDFScreen }/>
				<Stack.Screen name="VideoScreen" component={ VideoScreen }/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

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
	pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    video: {
    	flex: 1,
   	    backgroundColor: '#fff',
   	    alignItems: 'center',
   	    justifyContent: 'center',
    },
});
