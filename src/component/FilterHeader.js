import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import { BUY, RENT } from '../utils/Constants'

const options = [
    { label: 'BUY', value: BUY },
    { label: 'RENT', value: RENT }
];

export default class FilterHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: BUY
        }
    }
    
  
    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.switchStyle}>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        onPress={value => this.props.listingType(value)}
                        selectedColor={'white'}
                        buttonColor={'red'}
                        textColor={'black'}
                        backgroundColor={'#E6E6E6'}
                        fontSize={15} />
                </View>
                <View style={styles.filterStyle}>
                    <TouchableOpacity style={styles.touchableStyle} onPress={this.props.onPress}>
                        <View>
                            <Text style={{fontSize:16}}>Filter</Text>
                            <Text style={{ color: '#848484'}}>{this.props.count}</Text>
                        </View>
                    </TouchableOpacity>
                </View>    
            </View>
        );
    }
}

const styles=StyleSheet.create({
    switchStyle: {
        width: 150,
        padding: 12,
        marginRight: 40,
       
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
    },
    filterStyle: {
        flex:1,
        borderLeftWidth: 1,
        borderColor: '#848484',
        justifyContent: 'center',
    },
    touchableStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})