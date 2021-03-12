import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
//import Fonts from 'react-native-vector-icons/Fonts/Ionicons.ttf';


const FrontPageLayout = (props) => {
    
    const block = ({item}) => (
        
        <ImageBackground source={ require('./../../assets/images/background.png') } style={styles.blockRow}>
            <TouchableOpacity
                onPress={() =>{
                    props.goto(item.blockOne)
                }}
                style={styles.blockContainer}
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
            <TouchableOpacity
                onPress={() => {
                    props.goto(item.blockTwo)
                }}
                style={styles.blockContainer}
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
        </ImageBackground>
    )
    _renderItem()
    return (
        <View>
            {block(props)}
        </View>
    )
}
const styles = StyleSheet.create({
    blockRow: {
        flex: 1,
    },
    itemImage: {
        width: '100%',
        height: 200,
        position: 'relative',
        borderRadius: 5,
        resizeMode: 'cover'
    },
    titleText: {
        textAlign: 'center',
        fontFamily: 'KGHAPPY',
        fontSize: 10,
    },
    blockContainer: {
        flex: 1,
        //width: '100%',
        //height: 200,
    },
    blockGridOne: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderLeftColor: 'gray',
        borderRightColor: 'gray',
        borderTopWidth: 4,
        borderLeftWidth: 4,        
    },
    blockGridTwo: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderLeftColor: 'gray',
        borderRightColor: 'gray',
        borderTopWidth: 4,
        borderRightWidth: 4,        
    }
});
export default FrontPageLayout;