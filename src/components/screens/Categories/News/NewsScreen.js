/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearArticles, getArticles } from './../../../../actions/article_actions';
import { gridTwoColumns } from './../../../../containers/gridTwoColumns'
import BlockItem from './../../../../containers/BlockItem'


class NewsScreen extends Component{
    static navigationOptions = {
        drawerIcon: (
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./../../../../../assets/images/newsboy.png')}
            />
        )
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            articles: []
        }
    }
    articlesByCategory(){
        this.props.getArticles(14).then(()=>{
            const newArticles = gridTwoColumns(this.props.Articles)
            this.setState({
                isLoading: false,
                articles: newArticles
            })
        });
    }
    componentDidMount(){
        this.articlesByCategory()
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
            <BlockItem
                key={'columnHome-'+i}
                item={item}
                goto={this.goToArticleContent}
            />
        ))
    )
    render() {
        if(this.state.isLoading){
            return (
                <ImageBackground source={ require('./../../../../../assets/images/background.png') } style={styles.isLoading}>
                    <ActivityIndicator size="large" color="gray"/>
                    <Text style={styles.LoadingText}>Loading...</Text>
                </ImageBackground>
            );
        }else{
            return (
                <ImageBackground source={ require('./../../../../../assets/images/background.png') } style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{flex:1}}>
                            {this.displayArticles()}
                        </View>
                    </ScrollView>
                </ImageBackground>
                );
            }
        }
    }
function mapStateToProps(state){
    //console.warn("***** NEWS STATE TO PROPS:" + JSON.stringify(state))
    return {
        Articles: state.Articles.articles,
        isLoading: state.Articles.isLoading
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({clearArticles, getArticles}, dispatch)
}
export default connect(mapStateToProps, {clearArticles, getArticles})(NewsScreen);

const styles = StyleSheet.create({
    LoadingText: {
        color: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    isLoading: {
        paddingTop: 400,
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    sjTitle: {
        flex: 1,
        width: 50,
        padding: 20,
        alignItems: 'center',
    },
    articleBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
});