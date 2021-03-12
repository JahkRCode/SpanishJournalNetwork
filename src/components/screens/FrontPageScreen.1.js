/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
import { Header, Image } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearArticles, getArticles } from './../../actions/article_actions';
import { gridTwoColumns } from './../../containers/gridTwoColumns';
import FrontPageLayout from './../../containers/FrontPageLayout';

class FrontPageScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            articles: [],
            error: null,
        }
    }
    articlesByCategory(){
        this.props.getArticles(3).then(()=>{
            console.warn("***** FP FUNCTION: " + JSON.stringify(this.props.Articles))
            const newArticles = gridTwoColumns(this.props.Articles)
            this.setState({
                isLoading: false,
                articles: newArticles,
            })
        });
    }
    componentDidMount(){
        console.warn("***** FP DID MOUNT:" + JSON.stringify(this.props.isLoading));
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
    displayArticles = () => (
        this.state.articles.map( (item, i) => (
            <FrontPageLayout
                key={'columnHome-'+i}
                item={item}
                goto={this.goToArticleContent}
            />
        ))
    )
    render() {
        if(this.state.isLoading){
            return (
                <ImageBackground source={require('./../../../assets/images/background.png')} style={{ width: '100%', flex: 1}}>
                    <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        //backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.png')}/>}
                    />
                    <ImageBackground style={styles.isLoading}>
                        <ActivityIndicator size="large" color="gray"/>
                        <Text style={styles.LoadingText}>Loading...</Text>
                    </ImageBackground>
                </ImageBackground>
            );
        }else {
            //alert("Touch the Spanish Journal Banner or Slide from the left side of the screen to access the side menu.");
            return (
                <View>
                    <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        //backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.png')}/>}
                    />
                    <ScrollView style={{backgroundColor: 'transparent'}}>
                        <View>
                            <View style={{flex: 1}}>
                                {this.displayArticles()}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
}
function mapStateToProps(state){
    console.warn("***** FP STATE TO PROPS:" + JSON.stringify(state))
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
        color: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    isLoading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sjTitle: {
        flex: 1,
        width: 50,
        padding: 20,
        alignItems: 'center',
    },
    HeaderImage: {
        width: '100%',
    },
});
