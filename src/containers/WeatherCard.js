/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';


export default class WeatherCard extends Component {

	render() {
		let time;

		// Create a new date from the passed date time
		var date = new Date(this.props.detail.dt*1000);

		// Hours part from the timestamp
		var hours = date.getHours();
		
		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

		time = hours + ':' + minutes.substr(-2);
        console.warn("***** WEATHER PROPS: " + JSON.stringify(this.props.detail));
        console.warn("***** TIME PROPS: " + date.toDateString());
		return (
			<Card containerStyle={styles.card}>
				<Text style={styles.notes}>{this.props.location}</Text>
			
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
					<Image style={{width:75, height:75}} source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}} />
					<Text style={styles.time}>{ date.toDateString() }</Text>
				</View>

				<Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />
				
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.notes}>{this.props.detail.weather[0].description}</Text>
					<Text style={styles.notes}>{Math.round( this.props.detail.main.temp * 10) / 10 }&#8451;</Text>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card:{
        flex: 1,
        justifyContent: 'center',
		borderWidth:0,
        borderRadius:20,
        backgroundColor: 'gray',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopWidth: 4,
        borderLeftWidth: 4, 
	},
	time:{
        alignItems: 'center',
        fontFamily: 'KGHAPPY',
		fontSize:25,
		color:'#fff'
	},
	notes: {
        alignItems: 'center',
        fontFamily: 'KGHAPPY',
		fontSize: 20,
		color:'#fff',
	}
});