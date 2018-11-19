import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class FirstScreen extends Component {
    constructor(props){
        super(props)
    }

    _onPress(){
        this.props.navigator.pop({
            name:'login'
        });
    }

    render(){
        return(
            <View>
                <Text>WELCOME</Text>
                <Text>Username : {this.props.username}</Text>
                <Text>Password : {this.props.password}</Text>
                <Text onPress={this._onPress.bind(this)}>Back</Text>
            </View>
        );
    }
}