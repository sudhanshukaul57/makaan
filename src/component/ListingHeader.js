import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ListingHeader extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://d1r7943vfkqpts.cloudfront.net/8092fc193fbfb30d001b81289a149956.png' }} />
                </View>
                <Text style={styles.textStyle}>Gurgaon</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 35,
        width: 35,
        marginLeft: 10,
        marginTop: 8,
        marginRight: 10,
    },
    viewStyle: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 20,
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginLeft: 30,
        marginTop: 13,
    },
    imageWrapper: {
         borderRightWidth: 1,
         borderColor: '#ddd',
    }
    
});
