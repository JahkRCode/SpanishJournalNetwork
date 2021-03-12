import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Share, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HTMLView from 'react-native-htmlview';

const Article = (props) => {
    const navi_prop = props.navigation.getParam('article_data');
    console.warn("***** NAVI PROP: "+ navi_prop.article_image_url)
    const articleImage = () => (
        <View style={{position: 'relative'}}>
            <Image
                resizeMode={"cover"}
                style={styles.articleImage}
                source={{uri: navi_prop.article_image_url}}
            />
        </View>
    )
    const articleContent = () =>(
        <View>
            <Text 
            style={styles.articleTitle}>{navi_prop.title.rendered }</Text>
        
            <HTMLView stylesheet={styles}
                value={ navi_prop.content.rendered }/>
        </View>
    )
    const onShare = () => {
        Share.share(
            {
                title: navi_prop.title.rendered,
                message: navi_prop.link,
                url: navi_prop.link
            }
        )
    }
    console.warn("***** ROUTE NAME TEST: "+ JSON.stringify(props.navigation.getParam('previousScreen')))
    return (
        <View>
            <Header
                backgroundImage={require('./../../../../assets/images/background.png')}
                leftComponent={{ icon: 'arrow-back', size: 40, color: 'white', onPress: () => props.navigation.navigate(props.navigation.getParam('previousScreen'))}}
                centerComponent={{text: navi_prop.title.rendered, style: styles.articleTitleHeader}}
                rightComponent={<Icon name='screen-share' type='material' size={45} color='white' onPress={()=> onShare()}/>}
            />
            <ImageBackground source={require('./../../../../assets/images/background.png')} style={{ width: '100%' }}>
            <ScrollView>
                {articleImage()}
                {articleContent()}
            </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    articleImage: {
        flex: 2,
        padding: 100,
        height: 400,
        width: '100%'
    },
    articleTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
        color: 'white',
    },
    articleTitleHeader: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
        color: 'white',
    },
    shareIcon: {
        width: '100%',
        height: 10,
        alignItems: 'center',
    },
    p: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'KGHAPPY',
        color: 'white',
    },
    articleContainer: {
        backgroundColor: 'white'
    },
});
export default Article;