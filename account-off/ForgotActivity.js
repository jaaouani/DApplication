'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import ForgotFragment from '../account-fragment/ForgotFragment';

type Props = {};
export default class ForgotActivity extends Component<Props> {
    static navigationOptions = {
            tabBarLabel: ('Connexion'), 
            tabBarIcon: (<Icon name='user' size={35} color='#1F3A93' />),
    };
    constructor(props) {
        super(props);
        this.state = { emailV: true, validated: false };
        this.validateEmail = this.validateEmail.bind(this);
        this.submit = this.submit.bind(this);
    }

    validateEmail = (text) => { const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; if(!filter.test(text)) {  this.setState({ emailV: false}); return false; } this.setState({ emailV: true}); return true; }
    submit = () => {
        if(this.validateEmail() == true) { this.setState({ validated: true })}
    }
    render() {
        return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <ForgotFragment validated={this.state.validated} emailV={this.state.emailV} submit={this.submit} validateEmail={this.validateEmail} />
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : { flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF' }
});