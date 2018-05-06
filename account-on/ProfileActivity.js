'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ProfileFragment from '../account-fragment/ProfileFragment';
import AccountService from '../account-service/AccountService';

type Props = {};
export default class ProfileActivity extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: ('Mes Paramètres'), 
        tabBarIcon: (<Icon name='gear' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
        this.state = { loading: true, fullname: '', email: '', 
                            address: '', city: '', zip: '', reference: '', points: '' }
    }

    componentWillMount() {
        AccountService.isConnected() .then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.success == true) {
                            this.setState({ loading: false, fullname: _response.message.message.fullname, email: _response.message.message.email,
                                    address: _response.message.message.address, city: _response.message.message.city, zip: _response.message.message.zipcode,
                                    reference: _response.message.message.reference, points: _response.message.message.points });
                                    AccountService.storeAccount(_response.message.message);
                    } else if(_response.success == false) { console.log("Profile échoué."); }
                }); }
        }); 
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="position">
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ProfileFragment loading={this.state.loading} fullname={this.state.fullname} email={this.state.email} 
                            address={this.state.address} city={this.state.city} zipcode={this.state.zip} reference={this.state.reference}
                            points={this.state.points} />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF',},
});