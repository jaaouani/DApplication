'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Modal, ActivityIndicator } from 'react-native';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class LoginFragment extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <View style={styles.form}>
                <View style={styles.header}>
                    <Image source={require('../assets/drawable/icons8-eye-96.png')} style={styles.logo} />
                    { ((this.props.emailV == false || this.props.passwordV == false) || (this.props.emailV == false && this.props.passwordV == false)) ? <Image source={require('../assets/drawable/icons8-cancel-512.png')} style={styles.error} /> : <Image source={require('../assets/drawable/icons8-ok-512.png')} style={styles.error} /> }
                </View>
                <View style={styles.login}>
                    <View style={styles.inputOne}>
                        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                autoCorrect={false} onChangeText={ (text) => { this.props.validateEmail(text); } } />
                        <Image source={require('../assets/drawable/icons8-secured-letter-96.png')} style={styles.inputLogo} />
                        
                    </View>
                    <View style={styles.inputTwo}>
                        <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                autoCorrect={false} secureTextEntry={true} onChangeText={ (text) => { this.props.validatePassword(text); } } />
                        <Image source={require('../assets/drawable/icons8-password-96.png')} style={styles.inputLogo} />
                    </View>
                    <TouchableOpacity style={styles.submit} onPress={this.props.submit}><Text style={styles.loginSubmit}>Se Connecter</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.forgot} onPress={this.props.forgotMyPassword}><Text style={styles.forgotSubmit}>Mot de passe Oublié ?</Text></TouchableOpacity>
                    <ActivityIndicator style={styles.indicator} size={'large'} animating={this.props.validated} color="#1F3A93" />
                </View>
                <Modal visible={this.props.error} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.errorView}>
                                <Text style={styles.message}>{this.props.message}</Text>
                                <TouchableOpacity onPress={this.props.close}>
                                    <Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: { width: width, flex: 1, backgroundColor: '#FFFFFF' },
    header: { position: 'relative', top: 0, width: width, height: 50, backgroundColor: '#FFFFFF', alignItems: 'center', },
    login: { position: 'relative', top: 300, width: width, height: 200, backgroundColor: '#FFFFFF', alignItems: 'center', },
    input: { width: width - 60, height: 50, borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, fontFamily: 'Nunito-ExtraBold', fontWeight: '900',},
    inputTwo: { marginTop: -22,},
    inputLogo: { width: 35, height: 35, position: 'relative', top: -45, alignSelf: 'flex-end', right: 15 },
    logo: { width: 96, height: 96, marginTop: 30 },
    submit: { width: width - 60, height: 45, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, justifyContent: 'center', },
    loginSubmit: { fontFamily: 'Nunito-ExtraBold', fontWeight: '900', alignSelf: 'center', color: '#1F3A93' },
    forgot: { width: width - 60, height: 45, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, justifyContent: 'center', marginTop: 15, },
    forgotSubmit: { fontFamily: 'Nunito-ExtraBold', fontWeight: '900', alignSelf: 'center', color: '#1F3A93',},
    error: { width: 85, height: 85, position: 'relative', alignSelf: 'center', top: 70 },
    modalContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', },
    modalView: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 60, justifyContent: 'center', alignItems: 'center', },
    errorView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
    errorClose: { width: 25, height: 25, position: 'relative', right: - 15 },
    message: { fontFamily: 'Nunito-ExtraBold', color: '#000000', fontSize: 14 },
    indicator: { marginTop: 20, }
});