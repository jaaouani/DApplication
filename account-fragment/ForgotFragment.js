'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ForgotFragment extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.form}>
                <View style={styles.header}>
                    <Image source={require('../assets/drawable/icons8-eye-96.png')} style={styles.logo} />
                    { (this.props.emailV == false) ? <Image source={require('../assets/drawable/icons8-cancel-512.png')} style={styles.error} /> : <Image source={require('../assets/drawable/icons8-ok-512.png')} style={styles.error} /> }
                </View>
                <View style={styles.forgot}>
                    <View style={styles.inputOne}>
                        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                autoCorrect={false} onChangeText={ (text) => { this.props.validateEmail(text); } }/>
                        <Image source={require('../assets/drawable/icons8-secured-letter-96.png')} style={styles.inputLogo} />
                    </View>
                    <TouchableOpacity style={styles.submit} onPress={this.props.submit}><Text style={styles.forgotSubmit}>Récupérer Mot de passe</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: { width: width, flex: 1, backgroundColor: '#FFFFFF' },
    header: { position: 'relative', top: 0, width: width, height: 50, backgroundColor: '#FFFFFF', alignItems: 'center', },
    forgot: { position: 'relative', top: 300, width: width, height: 200, backgroundColor: '#FFFFFF', alignItems: 'center', },
    input: { width: width - 60, height: 50, borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, fontFamily: 'Nunito-ExtraBold', fontWeight: '900',},
    inputLogo: { width: 35, height: 35, position: 'relative', top: -45, alignSelf: 'flex-end', right: 15 },
    logo: { width: 96, height: 96, marginTop: 30 },
    submit: { width: width - 60, height: 45, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, justifyContent: 'center', },
    forgotSubmit: { fontFamily: 'Nunito-ExtraBold', fontWeight: '900', alignSelf: 'center', color: '#1F3A93' },
    error: { width: 85, height: 85, position: 'relative', alignSelf: 'center', top: 70 }
});