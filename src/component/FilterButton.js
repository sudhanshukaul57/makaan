import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

export default class FilterButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,
        width: '100%',
        backgroundColor: 'red',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})