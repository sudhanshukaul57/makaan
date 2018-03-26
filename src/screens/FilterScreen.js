import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native'
import BedroomButton from '../component/BedroomButton'
import FilterButton from '../component/FilterButton'
import RangeSlider from '../component/RangeSlider'
import { MINVALUE, MAXVALUE } from '../utils/Constants'
import FilterScreenHeader from '../component/FilterScreenHeader'

var filters=null
var bedroomFilter = [false, false, false, false, false]
var minValue=MINVALUE
var maxValue=MAXVALUE
var cloneDeep = require('lodash.clonedeep')
var filters

export default class FilterScreen extends Component {
    constructor(props){
        super(props)
        var {params}=this.props.navigation.state
        filters=params
        this.state={
            filter: false,
            bedroomFilter: cloneDeep(bedroomFilter),
            minValue: minValue,
            maxValue: maxValue
        }
        filters=this.props.navigation.state.params
    }

    static navigationOptions = {
        header: null,
    };
    
    sliderFilter=(min,max) => {
        minValue=min
        maxValue=max
    }

    backButton=()=>{
        minValue=this.state.minValue
        maxValue=this.state.maxValue
        for (i = 0; i < 5; i++) {
            bedroomFilter[i] = this.state.bedroomFilter[i]
        }

        this.props.navigation.goBack()
    }

    filterButton= ()=>{
        this.setState({
            minValue: minValue,
            maxValue: maxValue,
            bedroomFilter: bedroomFilter
        })
        filters(bedroomFilter,minValue,maxValue)
        this.props.navigation.goBack()
    }

    render() {
        console.log(bedroomFilter)
        return (
            <View style={styles.topViewStyle}>
                <FilterScreenHeader onPress={this.backButton}/>
                <View style={styles.viewContainer}>
                    <Text style={styles.textStyle}>Bedroom</Text>
                    <View style={styles.bedroomStyle}>
                        <BedroomButton index={0} bedroomFilter={bedroomFilter}>1BHK</BedroomButton>
                        <BedroomButton index={1} bedroomFilter={bedroomFilter}>2BHK</BedroomButton>
                        <BedroomButton index={2} bedroomFilter={bedroomFilter}>3BHK</BedroomButton>
                        <BedroomButton index={3} bedroomFilter={bedroomFilter}>4BHK</BedroomButton>
                    </View>
                    <BedroomButton index={4} bedroomFilter={bedroomFilter}>5BHK</BedroomButton>
                    <Text style={styles.textStyle}>Budget</Text>
                    <View style={styles.sliderStyle}>
                        <RangeSlider minValue={this.state.minValue} maxValue={this.state.maxValue} sliderFilter={this.sliderFilter}/>
                    </View>
                </View>
                <View style={styles.bottomViewStyle}>
                    <FilterButton onPress={this.filterButton}>APPLY FILTER</FilterButton>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    bedroomStyle: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    viewContainer: {
        marginLeft: 25,
    },
    textStyle: {
        fontSize: 20,
        marginTop: 20,
    },
    topViewStyle: {
        flex: 1,
    },
    bottomViewStyle: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    sliderStyle: {
        marginTop: 40,
    }
})