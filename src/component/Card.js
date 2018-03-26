import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Card extends Component {

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 1,
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
        backgroundColor: 'white',
    },
});
