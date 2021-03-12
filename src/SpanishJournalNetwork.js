/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
//import { useScreens } from 'react-native-screens';

/***** Miscellaneous Screens *****/
import FrontPageScreen from './components/screens/FrontPageScreen';
import AboutUsScreen from './components/screens/AboutUsScreen';
import ContactUsScreen from './components/screens/ContactUsScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import { getArticles } from '../src/actions/article_actions';

/***** News Category Screens *****/
import NewsScreen from './components/screens/Categories/News/NewsScreen';
import InternationalNewsScreen from './components/screens/Categories/News/InternationalNewsScreen';
import NationalNewsScreen from './components/screens/Categories/News/NationalNewsScreen';
import NewsfromMexicoScreen from './components/screens/Categories/News/NewsfromMexicoScreen';
import NewsfromPuertoRicoScreen from './components/screens/Categories/News/NewsfromPuertoRicoScreen';

/***** Columnists Category Screens *****/
import ColumnistsScreen from './components/screens/Categories/Columnists/ColumnistsScreen';
import AmyGoodmanScreen from './components/screens/Categories/Columnists/AmyGoodmanScreen';
import CornerstoneOfFaithScreen from './components/screens/Categories/Columnists/CornerstoneOfFaithScreen';

/***** Entertainment Category Screens *****/
import EntertainmentScreen from './components/screens/Categories/Entertainment/EntertainmentScreen';
import MoviesScreen from './components/screens/Categories/Entertainment/MoviesScreen';
import MusicScreen from './components/screens/Categories/Entertainment/MusicScreen';
import SaludScreen from './components/screens/Categories/Entertainment/SaludScreen';
import TelevisionScreen from './components/screens/Categories/Entertainment/TelevisionScreen';

/***** Sports Category Screens *****/
import SportsScreen from './components/screens/Categories/Sports/SportsScreen';
import AmericanFootballScreen from './components/screens/Categories/Sports/AmericanFootballScreen';
import BaseballScreen from './components/screens/Categories/Sports/BaseballScreen';
import BasketballScreen from './components/screens/Categories/Sports/BasketballScreen';
import BoxingScreen from './components/screens/Categories/Sports/BoxingScreen';
import FutbolScreen from './components/screens/Categories/Sports/FutbolScreen';

/***** Classifieds Category Screens *****/
import ClassifiedsScreen from './components/screens/Categories/Classifieds/ClassifiedsScreen';

/***** Article Screen *****/
import Article from './components/screens/Article';

import Store from './store';
import { Provider } from 'react-redux';

export default class SpanishJournalNetwork extends Component{  
    render() {
        return (
            <Provider store={Store}>
                <AppContainer/>
            </Provider>
            //useScreens()
        );
    }
}
CustomDrawerComponent = (props) => (
    //console.warn("***** PROPS: "+ JSON.stringify(props.navigation.state.routes[props.navigation.state.index].routeName)),
    <View>
        <Image style={{flex: 1 , position : 'absolute' , width : '100%'}} source={require('./../assets/images/background.png')}/>
    
    <SafeAreaView source={ require('./../assets/images/background.png') } style={{ width: '100%' }}>
        <ImageBackground source={ require('./../assets/images/background.png') } style={{ width: '100%', resizeMode: 'cover' }}>
        <View>
            <Image source={require('./../assets/images/sjn_logo.gif')} style={{ height: 70, width: 280 }} />
        </View>
            <ScrollView>
                <DrawerItems 
                    labelStyle={{fontFamily: 'KGHAPPY', color: 'white'}}
                    {...props}
                    onItemPress = {( route ) => 
                        {
                            //console.warn("***** DRAWER COMPONENT: " + JSON.stringify(route.route.routeName))
                            props.navigation.navigate(route.route.routeName)
                        }
                    }
                />
            </ScrollView>
        </ImageBackground>
    </SafeAreaView>
    </View>
)
//const test_it = this.props.articlesByCategory(24);
/***** News Category Navi *****/
NewsDrawerNavi = createDrawerNavigator(
{
    "Business News": NewsScreen,
    "National News": NationalNewsScreen,
    "International News": InternationalNewsScreen,
    "News from Mexico": NewsfromMexicoScreen,
    "News from Puerto Rico": NewsfromPuertoRicoScreen,
},{
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName,
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'KGHAPPY',
                textAlign: 'center',
            },
            headerBackground: (
                <Image
                    source={require('./../assets/images/background.png')}
                    style={{ width: '100%', height: 70, flex: 1, position: 'absolute'}}
                />
            ),
            headerLeft: (
                <Icon
                    name='menu'
                    type='ionicons'
                    size={40}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{ paddingRight: 10, width: 45, height: 45 }}
                        source={ require('./../assets/images/sjn_logo.gif') }                       
                    />
                </TouchableOpacity>
            )
        }
    },
    contentComponent: CustomDrawerComponent
});

NewsStackNavi = createStackNavigator(
{
    NewsDrawerNavi: NewsDrawerNavi,
},{
    navigationOptions: ({ navigation }) => {
        return {
            drawerIcon: (
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('./../assets/images/newsboy.png')}
                />
            )
        }
    }
});

/***** Columnists Category Navi *****/
ColumnistsDrawerNavi = createDrawerNavigator(
{
    Columnists: ColumnistsScreen,
    "Amy Goodman": AmyGoodmanScreen,
    "Cornerstone of Faith": CornerstoneOfFaithScreen,
},{
    navigationOptions: ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName,
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'KGHAPPY',
                textAlign: 'center',
            },
            headerBackground: (
                <Image
                    source={require('./../assets/images/background.png')}
                    style={{ width: '100%', height: 70, flex: 1, position: 'absolute'}}
                />
            ),
            headerLeft: (
                <Icon
                    name='menu'
                    type='ionicons'
                    size={40}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{ paddingRight: 10, width: 45, height: 45 }}
                        source={ require('./../assets/images/sjn_logo.gif') }                       
                    />
                </TouchableOpacity>
            )
        }
    },
    contentComponent: CustomDrawerComponent
});
ColumnistsStackNavi = createStackNavigator(
{
    ColumnistsDrawerNavi: ColumnistsDrawerNavi,
},{
    navigationOptions: ({ navigation }) => {
        return {
            drawerIcon: (
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./../assets/images/columnists.png')}
            />
            )
        }
    }
});

/***** Entertainment Category Navi *****/
EntertainmentDrawerNavi = createDrawerNavigator(
{
    Entertainment: EntertainmentScreen,
    Movies: MoviesScreen,
    Music: MusicScreen,
    Salud: SaludScreen,
    Television: TelevisionScreen,
},{
    navigationOptions: ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName,
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'KGHAPPY',
                textAlign: 'center',
            },
            headerBackground: (
                <Image
                    source={require('./../assets/images/background.png')}
                    style={{ width: '100%', height: 70, flex: 1, position: 'absolute'}}
                />
            ),
            headerLeft: (
                <Icon
                    name='menu'
                    type='ionicons'
                    size={40}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{ paddingRight: 10, width: 45, height: 45 }}
                        source={ require('./../assets/images/sjn_logo.gif') }                       
                    />
                </TouchableOpacity>
            )
        }
    },
    contentComponent: CustomDrawerComponent
});
EntertainmentStackNavi = createStackNavigator(
{
    EntertainmentDrawerNavi: EntertainmentDrawerNavi,

},{
    navigationOptions: ({ navigation }) => {
        return {
            drawerIcon: (
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./../assets/images/entertainment.png')}
            />
            )
        }
    }
});

/***** Sports Category Navi *****/
SportsDrawerNavi = createDrawerNavigator(
{
    Sports: SportsScreen,
    "American Football": AmericanFootballScreen,
    Baseball: BaseballScreen,
    Basketball: BasketballScreen,
    Boxing: BoxingScreen,
    Futbol: FutbolScreen,
},{
    navigationOptions: ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
            return {
                headerTitle: routeName,
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'KGHAPPY',
                textAlign: 'center',
            },
            headerBackground: (
                <Image
                    source={require('./../assets/images/background.png')}
                    style={{ width: '100%', height: 70, flex: 1, position: 'absolute'}}
                />
            ),
            headerLeft: (
                <Icon
                    name='menu'
                    type='ionicons'
                    size={40}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{ paddingRight: 10, width: 45, height: 45 }}
                        source={ require('./../assets/images/sjn_logo.gif') }                       
                    />
                </TouchableOpacity>
            )
        }
    },
    contentComponent: CustomDrawerComponent
});
SportsStackNavi = createStackNavigator({
    SportsDrawerNavi: SportsDrawerNavi,
},{
    navigationOptions: ({ navigation }) => {
        return {
            drawerIcon: (
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('./../assets/images/sports.png')}
                />
            )
        }
    }
});

/***** Classifieds Category Navi *****/
ClassifiedsDrawerNavi = createDrawerNavigator(
{
    Classifieds: ClassifiedsScreen,
},{
    navigationOptions: ({navigation}) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName,
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'KGHAPPY',
                textAlign: 'center',
            },
            headerBackground: (
                <Image
                    source={require('./../assets/images/background.png')}
                    style={{ width: '100%', height: 70, flex: 1, position: 'absolute'}}
                />
            ),
            headerLeft: (
                <Icon
                    name='menu'
                    type='ionicons'
                    size={40}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={{ paddingRight: 10, width: 45, height: 45 }}
                        source={ require('./../assets/images/sjn_logo.gif') }                       
                    />
                </TouchableOpacity>
            )
        }
    },
    contentComponent: CustomDrawerComponent
});
ClassifiedstackNavi = createStackNavigator({
    ClassifiedsDrawerNavi: ClassifiedsDrawerNavi,

},{
navigationOptions: ({ navigation }) => {
    return {
    drawerIcon: (
        <Image
            style={{ width: 25, height: 25 }}
            source={require('./../assets/images/classifieds.png')}
        />
    )
    }
},
contentComponent: CustomDrawerComponent
});

/***** Home Screen Navi *****/
HomeDrawerNavi = createDrawerNavigator(
{
    Home: {
        screen: FrontPageScreen,
        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: "Front Page",
                drawerIcon: (
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require('./../assets/images/newsjlogo.png')}
                    />
                )
            }
        }
    },
    News: NewsStackNavi,
    Columnists: ColumnistsStackNavi,
    Entertainment: EntertainmentStackNavi,
    Sports: SportsStackNavi,
    Classifieds: ClassifiedstackNavi,
    "About Us": AboutUsScreen,
    "Contact Us": ContactUsScreen,
    Article: {
        screen: Article,
        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: () => null
            }
        }
    }
},{
    contentComponent: CustomDrawerComponent,

});
AppSwitchNavi = createSwitchNavigator(
{
    WelcomeScreen: WelcomeScreen,
    HomeDrawerNavi: HomeDrawerNavi
});

AppContainer = createAppContainer(AppSwitchNavi);
/*
function mapStateToProps(state){
    console.log("***** STATE TO PROPS:" + JSON.stringify(state))
    return {
        Articles: state.Articles.list
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getArticles}, dispatch)
}*/



/***** Style Configuration *****/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

//export default connect(mapStateToProps, mapDispatchToProps)(SpanishJournalNetwork)