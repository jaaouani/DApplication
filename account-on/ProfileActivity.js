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
                        fullnameB : false, passwordB : false, addressB : false, cityB : false, zipcodeB : false, phoneB : false,
                        addressB2 : false }
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
                                if(!_result) { this.closeFullnameBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closeFullnameBox(); } 
                               else { Toast.show({ text: 'Impossible de changer de nom.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closeFullnameBox(); }
                          });
                    } else { console.log("Changement de nom échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showPasswordBox = () => { this.setState({ passwordB : true }); }
    closePasswordBox = () => { this.setState({ passwordB : false }); }
    submitPassword = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updatePassword(_result.message, text).then((_result) => {
                                if(!_result) { this.closePasswordBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closePasswordBox(); } 
                               else { Toast.show({ text: 'Impossible de changer de mot de passe.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closePasswordBox(); }
                          });
                    } else { console.log("Changement de mot de passe échoué."); return false;}
                }); 
            } else { return false; } 
        });        
    }
    
    showAddressBox = () => { this.setState({ addressB: true }); }
    closeAddressBox = () => { this.setState({ addressB : false }); }
    submitAddress = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updateAddress(_result.message, text).then((_result) => {
                                if(!_result) { this.closeAddressBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closeAddressBox(); } 
                               else { Toast.show({ text: 'Impossible de changer d\'addresse.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closeAddressBox(); }
                          });
                    } else { console.log("Changement d'addresse échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showAddressBox2 = () => { this.setState({ addressB2: true }); }
    closeAddressBox2 = () => { this.setState({ addressB2 : false }); }
    submitAddress2 = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updateAddress2(_result.message, text).then((_result) => {
                                if(!_result) { this.closeAddressBox2(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closeAddressBox2(); } 
                               else { Toast.show({ text: 'Impossible de changer d\'addresse ligne 2.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closeAddressBox2(); }
                          });
                    } else { console.log("Changement d'addresse ligne 2 échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showCityBox = () => { this.setState({ cityB: true }); }
    closeCityBox = () => { this.setState({ cityB : false }); }
    submitCity = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updateCity(_result.message, text).then((_result) => {
                                if(!_result) { this.closeCityBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closeCityBox(); } 
                               else { Toast.show({ text: 'Impossible de changer de ville.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closeCityBox(); }
                          });
                    } else { console.log("Changement de ville échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showZipcodeBox = () => { this.setState({ zipcodeB: true }); }
    closeZipcodeBox = () => { this.setState({ zipcodeB : false }); }
    submitZipcode = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updateZipcode(_result.message, text).then((_result) => {
                                if(!_result) { this.closeZipcodeBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closeZipcodeBox(); } 
                               else { Toast.show({ text: 'Impossible de changer de code postale.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closeZipcodeBox(); }
                          });
                    } else { console.log("Changement de code postale échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    showPhoneBox = () => { this.setState({ phoneB: true }); }
    closePhoneBox = () => { this.setState({ phoneB : false }); }
    submitPhone = (text) => { Keyboard.dismiss();
        AccountService.isConnected().then((_result) => {
            if(_result.status == true) {  
                AccountService.retrieveAccount(_result.message).then((_response) => {
                    if(_response.status == "success") {
                          ProfileService.updatePhone(_result.message, text).then((_result) => {
                                if(!_result) { this.closePhoneBox(); }
                                else if(_result.hasOwnProperty('status') && _result.status == "success") { this.closePhoneBox(); } 
                               else { Toast.show({ text: 'Impossible de changer de numéro de téléphone.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); this.props.closePhoneBox(); }
                          });
                    } else { console.log("Changement de numéro de téléphone échoué."); return false;}
                }); 
            } else { return false; } 
        }); 
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="height">
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ProfileFragment loading={this.state.loading} fullname={this.state.fullname} email={this.state.email}  address={this.state.address} city={this.state.city} zipcode={this.state.zip} reference={this.state.reference}
                            points={this.state.points} fullnameB={this.state.fullnameB} passwordB={this.state.passwordB} showFullnameBox={this.showFullnameBox} closeF={this.closeFullnameBox} closeP={this.closePasswordBox} 
                            submitF={this.submitFullname} submitP={this.submitPassword} showPasswordBox={this.showPasswordBox} submitA={this.submitAddress} addressB={this.state.addressB} closeA={this.closeAddressBox} showAddressBox={this.showAddressBox}
                            submitA2={this.submitAddress2} addressB2={this.state.addressB2} closeA2={this.closeAddressBox2} showAddressBox2={this.showAddressBox2} 
                            submitC={this.submitCity} cityB={this.state.cityB} closeC={this.closeCityBox} showCityBox={this.showCityBox} 
                            submitZ={this.submitZipcode} zipcodeB={this.state.zipcodeB} closeZ={this.closeZipcodeBox} showZipcodeBox={this.showZipcodeBox}
                            submitPH={this.submitPhone} phoneB={this.state.phoneB} closePH={this.closePhoneBox} showPhoneBox={this.showPhoneBox} />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF', },
});