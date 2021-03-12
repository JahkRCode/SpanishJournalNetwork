/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, ImageBackground, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Header, Image, Card } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearArticles, getArticles } from './../../actions/article_actions';
import { gridTwoColumns } from './../../containers/gridTwoColumns';
import WeatherCard from './../../containers/WeatherCard';
import Carousel from 'react-native-snap-carousel';
import { AdMobBanner } from 'react-native-admob';

class FrontPageScreen extends Component{
    constructor(props) {
        super(props);
        //this.goToArticleContent= this.goToArticleContent.bind(this);
        this.state = {
            isLoading: true,
            articles: [],
            latitude: 0,
			longitude: 0,
			forecast: [],
            error: null,
        }
    }
    articlesByCategory(){
        this.props.getArticles(3).then(()=>{
            //console.warn("***** FP FUNCTION: " + JSON.stringify(this.props.Articles))
            const newArticles = gridTwoColumns(this.props.Articles)
            this.setState({
                isLoading: false,
                articles: newArticles,
            })
        });
    }
    getWeather(){
		// Construct the API url to call
		let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=63383144ac954686dd70b2528f3ad4f8';

		// Call the API, and set the state of the weather forecast
		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => ({
				forecast: data
			}));
		})
	}
    getLocation(){
		// Get the current position of the user
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState(
					(prevState) => ({
					latitude: position.coords.latitude, 
					longitude: position.coords.longitude
					}), () => { this.getWeather(); }
				);
			},
			(error) => this.setState({ forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
	}
    componentDidMount(){
        //console.warn("***** FP DID MOUNT:" + JSON.stringify(this.props.isLoading));
        this.getLocation();
        this.articlesByCategory();
        //this.props.getArticles(24);
    }
    componentWillUnmount(){
        this.props.clearArticles();
    }
    
    goToArticleContent = (props) => {
        this.props.navigation.navigate('Article', {
            article_data: props,
            previousScreen: this.props.navigation.state.routeName
        })
    }
    
    _renderItem_b1({item, index}){
        return (
            <TouchableOpacity
                onPress={() => 
                    this.props.navigation.navigate('Article', {
                        article_data: item.blockOne,
                        previousScreen: this.props.navigation.state.routeName
                    })
                }
            >
                <Card
                    containerStyle={styles.blockGridOne}
                >
                    <Image
                        source={{uri:item.blockOne.article_image_url}}
                        style={styles.itemImage}
                    />
                    <Text style={styles.titleText}>
                    {item.blockOne.title.rendered}
                    </Text>
                </Card>
            </TouchableOpacity>
        )
    }
    _renderItem_b2({item, index}){
        return (
            <TouchableOpacity
                onPress={() => 
                    this.props.navigation.navigate('Article', {
                        article_data: item.blockTwo,
                        previousScreen: this.props.navigation.state.routeName
                    })
                }
            >
                <Card
                    containerStyle={styles.blockGridTwo}
                >
                    <Image
                        source={{uri:item.blockTwo.article_image_url}}
                        style={styles.itemImage}
                    />
                    <Text style={styles.titleText}>
                        {item.blockTwo.title.rendered}
                    </Text>
                </Card>
            </TouchableOpacity>
        )
    }
    displayArticles_b1 = () => (
            <Carousel
                ref={ ref => this.carousel = ref }
                data={ this.state.articles }
                sliderWidth={ Dimensions.get('window').width }
                itemWidth={ 300 }
                renderItem={ this._renderItem_b1.bind(this) }
                autoplay={ true }
                autoplayInterval={ 9000 } 
                lockScrollWhileSnapping={ true }
                loop={ true }
                layout={'stack'}
                layoutCardOffset={ 20 }
                containerCustomStyle={styles.blockOne}
            />
    )
    displayArticles_b2 = () => (
            <Carousel
                ref={ ref => this.carousel = ref }
                data={ this.state.articles }
                sliderWidth={ Dimensions.get('window').width }
                itemWidth={ 300 }
                renderItem={ this._renderItem_b2.bind(this) }
                autoplay={ true }
                autoplayInterval={ 5000 } 
                lockScrollWhileSnapping={ true }
                loop={ true }
                layout={'stack'}
                layoutCardOffset={ 20 }
                containerCustomStyle={styles.blockTwo}
            />
    )
    render() {
        const { navigate } = this.props.navigation;

        if(this.state.isLoading){
            return (
                <ImageBackground source={require('./../../../assets/images/background.png')} style={{ width: '100%', flex: 1 }} >
                    <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.gif')}/>}
                    />
                    <View style={styles.isLoading}>
                        <ActivityIndicator size="large" color="gray"/>
                        <Text style={styles.LoadingText}>Loading...</Text>
                    </View>
                </ImageBackground>
            );
        }else {
            return (
                <ImageBackground source={require('./../../../assets/images/background.png')} style={{ flex: 1}}>
                    <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.gif')}/>}
                    />
                    <ScrollView style={{ backgroundColor: 'transparent', }}>
                        <View>
                            <Text style={styles.labelTitle}>
                                Front Page News
                            </Text>  
                            {this.displayArticles_b1()} 
                            <View>
                                <Text style={styles.labelTitle}>
                                    In case you missed it
                                </Text> 
                                {this.displayArticles_b2()}
                                <View style={styles.adContainer}>
                                    <AdMobBanner
                                        adSize="fullBanner" 
                                        adUnitID="ca-app-pub-1316256023124949/2865679524" // ca-app-pub-1316256023124949/2865679524 ANDROID
                                        //adUnitID="ca-app-pub-1316256023124949/5900032823" // ca-app-pub-1316256023124949/5900032823 IOS
                                        testDeviceID={AdMobBanner.simulatorId}
                                        onAdFailedToLoad={error => console.error(error)}
                                        />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            )
        }
    }
}
function mapStateToProps(state){
    //console.warn("***** FP STATE TO PROPS:" + JSON.stringify(state))
    return {
        Articles: state.Articles.articles,
        isLoading: state.Articles.isLoading
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({clearArticles, getArticles}, dispatch)
}
export default connect(mapStateToProps, {clearArticles, getArticles})(FrontPageScreen);

const styles = StyleSheet.create({
    LoadingText: {
        paddingTop: 100,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    isLoading: {
        width: '100%',
        paddingTop: 100,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: 'KGHAPPY',
    },
    sjTitle: {
        flex: 1,
        width: 50,
        padding: 20,
        alignItems: 'center',
    },
    labelTitle: {
        paddingTop: 50,
        textAlign: 'center',
        fontFamily: 'KGHAPPY', 
        fontSize: 25, 
        color: 'white',
    },
    HeaderImage: {
        width: '150%',
    },
    itemImage: {
        height: 200,
        position: 'relative',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    titleText: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
        fontSize: 15,
    },
    blockOne: {
        flex: 1,
    },
    blockTwo: {
        flex: 1,
    },
    blockGridOne: {
        height: 315,
        borderRadius: 15,
        backgroundColor: 'gray',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopWidth: 4,
        borderLeftWidth: 4,        
    },
    blockGridTwo: {
        height: 315,
        borderRadius: 15,
        backgroundColor: 'gray',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopWidth: 4,
        borderRightWidth: 4,      
    },
    adContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
});
