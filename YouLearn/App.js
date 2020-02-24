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

const diseasePrevention = [
  {title: 'Cholera Prevention', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Diabetes', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Leishmaniasis', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Malaria', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Cholera Prevention', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Pneumonia', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Polio', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Smallpox', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'STI Prevention', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Tetanus', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Tuberculosis Droplet', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Tuberculosis', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Zika Prevention', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const feminineHealth = [
  {title: 'Hedhi Help', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Hedhi Help Kiswahili', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Hedhi Help Swahili', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Menstrual Hygiene', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Rose’s Washable Sanitary Pads 2019', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Rose’s Washable Sanitary Pads 2018', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Sustainable Solutions', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const lifeSkills = [
  {title: 'A Budget is easy as 123', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Agriculture 101', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Expressing Emotions Through Art', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Gender Club Formation Guide', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const sexualEducation = [
  {title: 'Boys Puberty Pamphlet', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Girls Puberty Pamphlet', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Puberty Coloring Book', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const wash = [
  {title: 'Tippy Tap Project', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Coloring WASH Booklet', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'WASH Program', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
  {title: 'Food Safety', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const asl = [{title: 'ASL Dictionary', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'}];

const promoPDF = [
  {title: 'Improving Healthcare Knowledge with Innovative Technology', url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'},
];

const promoVideos = [
  {title: 'Breaking Barriers', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {title: 'Leaving No One Behind', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {title: 'Rose Empowers Medium', url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
];

const PDF_DATA = [
	{title: 'Disease Prevention', data: diseasePrevention},
	{title: 'Feminine Health', data: feminineHealth},
	{title: 'Life Skills', data: lifeSkills},
	{title: 'Sexual Education', data: sexualEducation},
  {title: 'Promo', data: promoPDF},
	{title: 'WASH', data: wash},
	{title: 'ASL Dictionary', data: asl},
];

const Media_DATA = [
	{title: 'Promo Videos', data: promoVideos},
];

function SectionListPDFItems({ item, navigation }) {
	return (
		<View style={ styles.item }>
  		<Button
  			title={ item.title }
        style={ styles.item }
  			onPress={() => navigation.navigate('PDFScreen', { url: item.url })}
  		/>
    </View>
	);
}

function SectionListMediaItems({ item, navigation }) {
	return (
		<View style={ styles.item }>
  		<Button
  			title={ item.title }
        style={ styles.item }
  			onPress={() => navigation.navigate('VideoScreen', { url: item.url })}
  		/>
  	</View>
	);
}

function HomeScreen({ navigation }) {
  return (
		<View style={styles.logoCont}>
  		<View style={styles.rowContainer}>
      		<Image source={logo} style={styles.logo}/>
    	</View>
      <View style={styles.homeContainer}>
        <TouchableOpacity onPress={ () => navigation.navigate('FileScreen')} >
          <Text style={ styles.HomeButton }>Files</Text>
        </TouchableOpacity>
  			<TouchableOpacity onPress={ () => navigation.navigate('MediaScreen') }>
          <Text style={ styles.HomeButton }>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('AboutScreen') }>
          <Text style={ styles.HomeButton }>About</Text>
        </TouchableOpacity>
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
				  renderItem={({ item }) => <SectionListPDFItems item={item} navigation={navigation}/>}
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
          renderItem={({ item }) => <SectionListMediaItems item={item} navigation={navigation}/>}
          renderSectionHeader={({ section: { title } }) =>
          (<Text style={styles.sectionHeader}>{title}</Text>)}
        />
      </View>
		</View>
	);
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.logoCont}>
      <View style={styles.rowContainer}>
          <Image source={logo} style={styles.logo}/>
      </View>
      <View style={styles.rowContainer}>
        <Text>About me!</Text>
      </View>
    </View>
  );
}

function PDFScreen({ route }) {
	const { url } = route.params;
  return (
		<View style={styles.pdf}>
			<PDFReader
				source={{
					uri: url
				}}
			/>
		</View>
	);
}

function VideoScreen({ route }) {
  const { url } = route.params;
	return (
		<View style={styles.video}>
  		<Video
    		source={{ uri: url }}
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
        <Stack.Screen name="AboutScreen" component={ AboutScreen }/>
				<Stack.Screen name="MediaScreen" component={ MediaScreen }/>
				<Stack.Screen name="PDFScreen" component={ PDFScreen }/>
				<Stack.Screen name="VideoScreen" component={ VideoScreen }/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

const styles = StyleSheet.create({
	homeContainer: {
    flex: 5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoCont: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
	container: {
		flexDirection: 'column',
  	flex: 1,
  	backgroundColor: '#fff',
  	alignItems: 'center',
  	justifyContent: 'center',
	},
  HomeButton: {
    margin: 50,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    color: 'purple',
    fontSize: 40,
    fontFamily: 'Helvetica',
  },
	button: {
		flex: 1,
		margin: 50,
		marginTop: 20,
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
