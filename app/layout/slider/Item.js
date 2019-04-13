import React,{Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class Item extends Component {   
    render() {
        return (
            <View>
                <Text style={ [ this.checkActive() ? styles.active : styles.inactive]}>{this.props.value}</Text>
                <Text style={[ this.checkActive() ? styles.line : {}]}> { this.checkActive() ? '|' : ''}</Text>
            </View>
        );
    }

    checkActive =()=>{
        if(this.props.value >= this.props.first && this.props.value <= this.props.second)
            return true 
        else
            return false 
    }
}

const styles = StyleSheet.create({
    active:{
        textAlign: 'center',
        fontSize:20,
        bottom:10,
        color:'#5e5e5e',
    },
    inactive:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight:'normal',
        color:'#bdc3c7',
    },
    line:{
        fontSize:10,
        textAlign: 'center',
    }
});
