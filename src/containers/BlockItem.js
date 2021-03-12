import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';
//import Fonts from 'react-native-vector-icons/Fonts/Ionicons.ttf';


const BlockItem = (props) => {
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
                    //featuredTitle={item.blockOne.title.rendered}
                    //image={{uri:item.blockOne.article_image_url}}
                    //imageStyle={styles.itemImage}
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
                    //featuredTitle={item.blockTwo.title.rendered}
                    //image={{uri:item.blockTwo.article_image_url}}
                    //imageStyle={styles.itemImage}
                    //imageWrapperStyle={styles.imageWrapper}
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
    return (
        <View>
            {block(props)}
        </View>
    )
}
const styles = StyleSheet.create({
    blockRow: {
        flexDirection: 'row',
    },
    itemImage: {
        width: '100%',
        height: 200,
        position: 'relative',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    titleText: {
        color: 'black',
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
        borderRadius: 15,
        backgroundColor: 'gray',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopWidth: 4,
        borderRightWidth: 4,        
    }
});
export default BlockItem;