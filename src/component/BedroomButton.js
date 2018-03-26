import React, { Component } from 'react'
import { 
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

var buttonColor= 'white'
var textColor= 'black'

export default class BedroomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: this.props.bedroomFilter[this.props.index]
        }
    }

    setFilter=()=> {
        this.setState({
             flag: !this.state.flag,
            })

    }

    render() {
        bedroomFilter = this.props.bedroomFilter
        index = this.props.index
        bedroomFilter[index]=this.state.flag
        if (bedroomFilter[index]) {
            buttonColor = 'red'
            textColor = 'white'
        }
        else {
            buttonColor = 'white'
            textColor = 'black'
        }
        return (
            <TouchableOpacity onPress={this.setFilter} >
                <View style={[styles.buttonStyle, {backgroundColor: buttonColor}]} >
                    <Text style={{color: textColor}}>
                        {this.props.children}
                    </Text>
                </View>    
            </TouchableOpacity>
        )
    }

}

const styles=StyleSheet.create({
    buttonStyle: {
        height: 35,
        width: 70,
        padding: 2,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    }
})