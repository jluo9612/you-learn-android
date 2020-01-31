import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import youlearn from './assets/YouLearn.png';
import Video from 'expo-av';
import Breaking_Barriers from './media/Breaking_Barriers.mp4';


export default class App extends React.Component () {
    render(){
    return (
            <View style={styles.container}>
            
            
            <Video source = {{ uri: 'Breaking_Barriers'}}
            shouldPlay
            useNativeControls
            style={{ width: "100%, height: 50%"}}
            />
            
            </View>
            );
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 logo: {
                                 width: 305,
                                 height: 300
                                 },
                                 instructions: {
                                 color: '#888',
                                 fontSize: 18,
                                 },
                                 buttonText: {
                                 backgroundColor: 'blue',
                                 padding: 20,
                                 borderRadius: 5,
                                 },
                                 button: {
                                 fontSize: 20,
                                 color: '#fff',
                                 },
                                 backgroundVideo: {
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 bottom: 0,
                                 right: 0,
                                 },
                                 });

