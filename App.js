import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {CustomSlider} from './app/layout/slider/CustomSlider';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      singleSliderValues: [],
      multiSliderValues: [],
    }
}

  render() {
    return (
      <View style={styles.container}>

     <Text style={styles.title}>Multi-Slider</Text>
        <CustomSlider
          min={1}
          max={7}
          LRpadding={40}
          callback={this.multiSliderValueCallback}
          single={false}
        />

      <Text style={styles.title}>Single-Slider</Text>
        <CustomSlider
          min={1}
          max={7}
          LRpadding={40}
          callback={this.singleSliderValueCallback}
          single={true}
        />
        
      </View>
    );
  }

  singleSliderValueCallback =(values)=> {
    this.setState({singleSliderValues : values})
  }

  multiSliderValueCallback = (values) => {
    this.setState({multiSliderValues : values})
  }
}

const styles = StyleSheet.create({
  container: {
    top:100,
  },
  title:{
    padding:20,
    fontSize:18,
  }

});
