import * as React from 'react';
import { SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
	View, Dimensions, ScrollView } from 'react-native';
import logo from './assets/logo.png';
import PDFReader from 'rn-pdf-reader-js';
import { Navigation } from 'react-native-navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import * as Font from 'expo-font';
// import { diseasePrevention, feminineHealth,
//   lifeSkills, sexualEducation, wash, asl,
//   promoPDF, promoVideos, PDF_DATA, Media_DATA } from './data.js';

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

const {height, width} = Dimensions.get('window');

function SectionListPDFItems({ item, navigation }) {
	return (
		<View style={ styles.item }>
  		<TouchableOpacity
        style={ styles.listItem }
  			onPress={() => navigation.navigate('PDFScreen', { url: item.url })} >
        <Text style={ styles.listItemText }>{ item.title }</Text>
      </TouchableOpacity>
    </View>
	);
}

function SectionListMediaItems({ item, navigation }) {
	return (
		<View style={ styles.item }>
      <TouchableOpacity
        style={ styles.listItem }
        onPress={() => navigation.navigate('VideoScreen', { url: item.url })} >
        <Text style={ styles.listItemText }>{ item.title }</Text>
      </TouchableOpacity>
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
        <ScrollView contentContainerStyle={ styles.about }>
          <Text style={ styles.aboutText }>About</Text>
          <Text style={ styles.aboutText }>YouLearn is meant to provide informational
          resources about life skills, disease prevention, feminine health, sexual
          education, and other topics. YouLearn will get more resources and videos
          over time.</Text>
          <Text style={ styles.aboutText }>All information was provided by Rose
          Academies, a non-profit organization working in Central and Eastern Africa’s
          rural communities. Rose Academies educational programs are community based
          and presented in a language understood by community members.</Text>
          <Text style={ styles.aboutText }>We hope YouLearn will help you to become a
          significant contributor to society.</Text>
          <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </ScrollView>
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
          source={{
            uri: url,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls
          resizeMode="contain"
          shouldPlay
          isLooping={false}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
		</View>
	);
}

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Helvetica': require('./assets/fonts/Helvetica.ttf'),
    });
  }

  render() {
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
    color: 'darkorchid',
    fontSize: 40,
    fontFamily: 'Helvetica',
  },
	logo: {
		flex: 4,
		padding: 50,
		marginTop: 20,
  	width: 300,
  	height: 100,
  	resizeMode: 'contain',
	},
  item: {
    padding: 5,
    backgroundColor: 'white',
  },
	listItem: {
		padding: 10,
    backgroundColor: 'rgba(247,247,247,1.0)',
	},
  listItemText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
  },
  about: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  aboutText: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
	sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'darkorchid',//'rgba(247,247,247,1.0)',
    fontFamily: 'Helvetica',
	},
	pdf: {
    flex:1,
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  video: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
