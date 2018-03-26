import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { MINVALUE, MAXVALUE, STEPS } from '../utils/Constants'

const sliderFilter=null
export default class RangeSlider extends React.Component {
    constructor(props) {
        super(props)
        sliderFilter=this.props.sliderFilter
    }
    state = {
        values: [this.props.minValue, this.props.maxValue],
    };

    multiSliderValuesChange = (values) => {
        sliderFilter(values[0],values[1])
        this.setState({
            values,
        });
    }

    render() {
        return (
            <View>
                <MultiSlider
                    values={[this.state.values[0], this.state.values[1]]}
                    sliderLength={300}
                    onValuesChange={this.multiSliderValuesChange}
                    min={MINVALUE}
                    max={MAXVALUE}
                    step={STEPS}
                    selectedStyle={styles.selectedStyle}
                    unselectedStyle={styles.unselectedStyle}
                />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{this.state.values[0]}</Text>
                    <Text style={styles.textStyle}>{this.state.values[1]}</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    selectedStyle: {
        backgroundColor:'red',
    },
    unselectedStyle: {
        backgroundColor: '#D8D8D8'
    },
    viewStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        marginLeft: 100,
    }
})