/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header,Image } from 'react-native-elements';
import AboutUsHistory from './../../containers/AboutUsHistory';

class AboutUsScreen extends Component{
    static navigationOptions = {
        drawerIcon: (
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./../../../assets/images/aboutus.png')}
            />
        )
    };
    render() {
        return (
            <View style={{flex: 1 }}>
                <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        //backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.gif')}/>}
                    />
                <View style={styles.container}>
                    <AboutUsHistory/>
                </View>
            </View>
        );
    }
}
export default AboutUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerTitle: {
        flex: 1,
        fontFamily: 'KGHAPPY'
    },
    sjTitle: {
        flex: 1,
        width: 50,
        padding: 20,
        alignItems: 'center',
    },
});
