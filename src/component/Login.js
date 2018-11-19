import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from '../style/styles';

export default class Login extends Component {
    constructor(props) {
        super(props);
        logo = require('../img/pgiatuan-logo.png');
        this.state={
            username:'',
            password:''
        }
    }

    login(){
        this.props.navigator.push({
            name:'firstScreen',
            passProps:{
                username:this.state.username,
                password:this.state.password
            }
        });
    }

    register(){
        this.props.navigator.push({
            name:'register'
        });
    }

    render() {
        return (
            <View style={styles.wrapperContainer}>
                <View style={styles.wrapperLogo}>
                    <Image source={logo} style={styles.logo}></Image>
                </View>
                <View style={styles.wrapperLoginForm}>
                    <TextInput style={[styles.textInput]} placeholder={'Username'} 
                                onChangeText={(value)=>{{this.setState({username:value})}}}></TextInput>
                    <TextInput style={[styles.textInput]} placeholder={'Password'} secureTextEntry={true} 
                                onChangeText={(value)=>{{this.setState({password:value})}}}></TextInput>
                    <View style={styles.wrapperTextForgot}>
                    <Text style={styles.textForgot}>Forgot password?</Text>
                    </View>
                    <TouchableHighlight style={styles.buttonLogin} onPress={()=>this.login()}>
                        <Text style={styles.textLogin}>LOGIN</Text>
                    </TouchableHighlight>
                    <Text style={styles.textForgot}>Don't have an account?</Text>
                    <Text style={styles.textCreateAccount} onPress={()=>this.register()}>Create new account</Text>
                </View>
            </View>
        );
    }
}