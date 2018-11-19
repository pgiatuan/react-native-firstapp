import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import Login from './Login';
import FirstScreen from './FirstScreen';
import Register from './Register';

export default class LoginNavigator extends Component {
    _renderScene(route, navigator){
        let name = route.name;
        let passProps = route.passProps;
        switch(name){
            case 'login':
                return <Login navigator={navigator}/>;
                break;
            case 'firstScreen':
                return <FirstScreen navigator={navigator} {...passProps}/>;
                break;
            case 'register':
                return <Register navigator={navigator}/>;
                break;
        }
    }

    render(){
        return(
            <Navigator renderScene={this._renderScene.bind(this)} initialRoute={{name:'login'}}></Navigator>
        );
    }
}