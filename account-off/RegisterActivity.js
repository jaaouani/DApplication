'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import RegisterFragment from '../account-fragment/RegisterFragment';
import AccountService from '../account-service/AccountService';

type Props = {};
export default class RegisterActivity extends Component<Props> {
    static navigationOptions = {
            tabBarLabel: ('Inscription'), 
            tabBarIcon: (<Icon name='user' size={35} color='#1F3A93' />),
    };
    constructor(props) {
        super(props);
        this.state = { validated: false, emailV: true, passwordV: true, fullnameV: true,
                            emailI: '', passwordI: '', fullnameI: '', error: false, message: '' };
        this.forgotMyPassword = this.forgotMyPassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateFullname = this.validateFullname.bind(this);
    }

    forgotMyPassword = () => { const { navigate } = this.props.navigation; navigate('Forgot'); }
    validateEmail = (text) => { const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; if(!filter.test(text)) {  this.setState({ emailV: false}); return false; } this.setState({ emailV: true}); this.setState({ emailI: text}); return true; }
    validatePassword = (text) => { if(text.length >= 8 && text.length <= 20) { this.setState({ passwordV: true}); this.setState({ passwordI: text}); return true; } this.setState({ passwordV: false}); return false; }
    validateFullname = (text) => { if(text.length > 3) { this.setState({ fullnameV: true}); this.setState({ fullnameI: text}); return true; } this.setState({ fullnameV: false}); return false; }
    showErrorBox = (text) => { this.setState({ error: true }); this.setState({ message: text }); }
    closeErrorBox = () => { this.setState({ error: false }); }

    submit = () => { const { navigate } = this.props.navigation; Keyboard.dismiss();
        if(this.state.emailV == true && this.state.passwordV == true && this.state.fullnameV == true) { 
            this.setState({ validated: true });
            AccountService.registerAccount(this.state.fullnameI, this.state.emailI, this.state.passwordI).then((_result) => {
                if(_result.status == "success") { 
                    AccountService.loginAccount(this.state.emailI, this.state.passwordI).then((_result) => {
                        if(_result.status == "success") {  AsyncStorage.setItem('token', _result.token); navigate('AccountOn');
                        } else if(_result.status == "error") { this.setState({ validated: false });  this.showErrorBox(_result.message); } }); 
                } else if(_result.status == "error") { this.setState({ validated: false });  this.showErrorBox(_result.message); }
            });
        } else { this.setState({ validated: false });  this.showErrorBox("Remplissez Correctement tous les champs."); }
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <RegisterFragment forgotMyPassword={this.forgotMyPassword} validateEmail={this.validateEmail} validatePassword={this.validatePassword} validateFullname={this.validateFullname} error={this.state.error} close={this.closeErrorBox}
                            validated={this.state.validated} submit={this.submit} emailV={this.state.emailV} passwordV={this.state.passwordV} fullnameV={this.state.fullnameV} message={this.state.message} />
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : { flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF' }
});