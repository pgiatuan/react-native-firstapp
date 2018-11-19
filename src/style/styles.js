import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    wrapperContainer : {
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center',
    },
    wrapperLogo:{
        flex:1,
        justifyContent:'center'
    },
    logo:{
        width:300,
        resizeMode:'contain',
        marginTop:200
    },
    wrapperLoginForm:{
        flex:1,
        alignItems:'center'
    },
    textInput:{
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:1,
        margin:1,
        padding:5,
        fontSize:12,
        height:40,
        width:300
    },
    buttonLogin:{
        height:50,
        width:150,
        backgroundColor:'rgba(15,151,147,1)',
        borderRadius:55,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textLogin:{
        color:'white',
        textAlign:'center'
    },
    textForgot:{
        color:'rgba(0,0,0,0.5)',
        marginTop:10,
        fontSize:11
    },
    wrapperTextForgot:{
        width:300,
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    textCreateAccount:{
        fontSize:11,
        color:'rgba(242,114,98,1)'
    },
    createNewAccount:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
    },
    formRegister:{
        flex:3,
        alignItems:'center'
    },
    formName:{
        flexDirection:'row'
    },
    firstLastName:{
        width:149
    },
    defaultText:{
        fontSize:11,
        color:'rgba(0,0,0,0.5)'
    },
});

export default styles;