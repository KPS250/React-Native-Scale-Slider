import React, {Component} from 'react';
import {StyleSheet,Text,View, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { CustomMarker } from './CustomMarker';
import { Item } from './Item';

export class CustomSlider extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          multiSliderValue: [this.props.min, this.props.max],
          first: this.props.min,
          second: this.props.max,
        }
    }

    render() {
        return (
            <View>
                <View style={[styles.column,{marginLeft:this.props.LRpadding,marginRight:this.props.LRpadding}]}>
                    {this.renderScale()}
                </View>
                <View style={styles.container}>
            
                    <MultiSlider
                        trackStyle={{backgroundColor:'#bdc3c7'}}
                        selectedStyle={{backgroundColor:"#5e5e5e"}}
                        values={ this.props.single ? [this.state.multiSliderValue[1]] : [this.state.multiSliderValue[0],this.state.multiSliderValue[1]]}
                        sliderLength={Dimensions.get('window').width-this.props.LRpadding*2}
                        onValuesChange={this.multiSliderValuesChange}
                        min={this.props.min}
                        max={this.props.max}
                        step={1}
                        allowOverlap={false}
                        customMarker={CustomMarker}
                        snapped={true}
                    />
                </View>
            </View>
        );
    }

    multiSliderValuesChange = values => {
       if(this.props.single ){
        this.setState({
            second : values[0],
        })  
       }else{
        this.setState({
            multiSliderValue: values,
            first : values[0],
            second : values[1],
        }) 
       }
        //this.props.callback(values)
    }

    renderScale=()=> {
        const items = [];
        for (let i=this.props.min; i <= this.props.max; i++) {
            items.push(
                <Item 
                    value = {i}
                    first = {this.state.first}
                    second = {this.state.second}
                />
            );
        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        bottom:-20,
    },
    active:{
        textAlign: 'center',
        fontSize:20,
        color:'#5e5e5e',
    },
    inactive:{
        textAlign: 'center',
        fontWeight:'normal',
        color:'#bdc3c7',
    },
    line:{
        textAlign: 'center',
    }
});
