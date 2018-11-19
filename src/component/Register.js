import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import styles from '../style/styles';

export default class Register extends Component {
    register(){
        alert(1)
    }
    
    render() {
        return (
            <View style={styles.wrapperContainer}>
                <View style={styles.createNewAccount}>
                    <Text>CREATE NEW</Text>
                    <Text>ACCOUNT</Text>
                </View>
                <View style={styles.formRegister}>
                    <View style={styles.formName}>
                        <TextInput style={[styles.textInput, styles.firstLastName]} placeholder={'Firstname'} />
                        <TextInput style={[styles.textInput, styles.firstLastName]} placeholder={'Lastname'} />
                    </View>
                    <TextInput style={[styles.textInput]} placeholder={'Username'} />
                    <TextInput style={[styles.textInput]} placeholder={'Email address'} />
                    <TextInput style={[styles.textInput]} placeholder={'Password'} />
                    <Text style={[styles.defaultText]}>By tapping "Create new account"</Text>
                    <Text style={[styles.defaultText]}>you agree to the</Text>
                    <Text style={styles.textCreateAccount}>term & conditions.</Text>
                    <TouchableHighlight style={styles.buttonLogin} onPress={()=>this.register()}>
                        <Text style={styles.textLogin}>CREATE NEW ACCOUNT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}