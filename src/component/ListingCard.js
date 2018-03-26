import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Image,Text
} from 'react-native'
import Card from './Card'

export default class ListingCard extends Component {
    render() {
        return (
            <Card>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://content.makaan.com/1/679654/295/1501921.jpeg?width=1024&height=576' }} />    
                </View>
                <Text style={styles.textStyle}>88.38L</Text>
                <Text style={styles.textStyle}>2 BHK Apartment   1400 sqft</Text>
                <Text style={styles.textStyle}>DLF Cyber City | Sector-2 Sohna Road</Text>
                <Text style={styles.textStyle}>Possession By Jan 2018 | 7th of 25 floor</Text>
            </Card>
        )
    }
}

const styles=StyleSheet.create({
    imageStyle: {
        flex: 1,
        resizeMode: 'stretch'
    },
    imageContainer: {
        height: 200,
    },
    textStyle: {
        marginTop: 10,
        fontSize: 15,
    }
})