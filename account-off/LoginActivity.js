'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import LoginFragment from '../account-fragment/LoginFragment';
import AccountService from '../account-service/AccountService';

type Props = {};
export default class LoginActivity extends Component<Props> {
    static navigationOptions = {
            tabBarLabel: ('Connexion'), 
            tabBarIcon: (<Icon name='lock' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
        this.state = { validated: false, emailV: true, passwordV: true,
                            emailI: '', passwordI: '', error: false, message: '' };
        this.forgotMyPassword = this.forgotMyPassword.bind(this);
        this.showErrorBox = this.showErrorBox.bind(this);
        this.closeErrorBox = this.closeErrorBox.bind(this);
    }

    forgotMyPassword = () => { const { navigate } = this.props.navigation; navigate('Forgot'); }
    validateEmail = (text) => { const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; if(!filter.test(text)) {  this.setState({ emailV: false }); return false; } this.setState({ emailV: true}); this.setState({ emailI: text}); return true; }
    validatePassword = (text) => { if(text.length >= 8 && text.length <= 20) { this.setState({ passwordV: true}); this.setState({ passwordI: text}); return true; } this.setState({ passwordV: false}); return false; }
    showErrorBox = (text) => { this.setState({ error: true }); this.setState({ message: text }); }
    closeErrorBox = () => { this.setState({ error: false }); }

    submit = () => { const { navigate } = this.props.navigation; Keyboard.dismiss();
        if(this.state.emailV == true && this.state.passwordV == true) { 
            this.setState({ validated: true });
            AccountService.loginAccount(this.state.emailI, this.state.passwordI).then((_result) => {
                    if(_result.status == "success") {  AsyncStorage.setItem('token', _result.token); navigate('AccountOn');
                    } else if(_result.status == "error") { this.setState({ validated: false }); this.showErrorBox(_result.message); } }); 
        } else { this.setState({ validated: false });  this.showErrorBox("Remplissez Correctement tous les champs."); }
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <LoginFragment forgotMyPassword={this.forgotMyPassword} validateEmail={this.validateEmail} validatePassword={this.validatePassword} message={this.state.message}
                            validated={this.state.validated} submit={this.submit} emailV={this.state.emailV} passwordV={this.state.passwordV} error={this.state.error} close={this.closeErrorBox} />
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : { flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF' }
});