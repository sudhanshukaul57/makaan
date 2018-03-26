import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ListingHeader extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.TextWrapper}>
                        <Text style={styles.textStyle}>&lt;</Text>
                    </View>
                </TouchableOpacity>       
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
        fontSize: 30,
        color: 'red',
    },
    TextWrapper: {
        width:50,
        height: '100%',
        borderRightWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
