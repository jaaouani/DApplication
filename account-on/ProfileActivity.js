'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ProfileFragment from '../account-fragment/ProfileFragment';
import AccountService from '../account-service/AccountService';
import ProfileService  from '../account-service/ProfileService';

type Props = {};
export default class ProfileActivity extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: ('Mes Paramètres'), 
        tabBarIcon: (<Icon name='gear' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
        this.state = { loading: true, fullname: '', email: '', 
                            address: '', city: '', zip: '', reference: '', points: '',
                        fullnameB : false, passwordB : false }
        this.showFullnameBox = this.showFullnameBox.bind(this);
        this.showPasswordBox = this.showPasswordBox.bind(this);
    }

    componentWillMount() {
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                            this.setState({ loading: false, fullname: _response.message.fullname, email: _response.message.email,
                                    address: _response.message.address, city: _response.message.city, zip: _response.message.zipcode,
                                    reference: _response.message.reference, points: _response.message.points });
                                    AccountService.storeAccount(_response.message);
                    } else { console.log("Profile échoué."); }
                }); }
        }); 
    }

    closeFullnameBox = () => { this.setState({ fullnameB: false }); }
    showFullnameBox = () => { this.setState({ fullnameB: true }); }
    submitFullname = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updateFullname(_result.message, text).then((_result) => {
                                if(_result.hasOwnProperty('status') && _result.status == "success") { return true; } 
                               else { return false; }
                          });
                    } else { console.log("Changement de nom échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showPasswordBox = () => { this.setState({ passwordB : true }); }
    closePasswordBox = () => { this.setState({ passwordB : false }); }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="position">
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ProfileFragment loading={this.state.loading} fullname={this.state.fullname} email={this.state.email} 
                            address={this.state.address} city={this.state.city} zipcode={this.state.zip} reference={this.state.reference}
                            points={this.state.points} fullnameB={this.state.fullnameB} passwordB={this.state.passwordB} 
                            showFullnameBox={this.showFullnameBox} closeF={this.closeFullnameBox} closeP={this.closePasswordBox} 
                            submitF={this.submitFullname} />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF',},
});