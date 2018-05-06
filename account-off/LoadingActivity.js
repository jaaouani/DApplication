'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, AsyncStorage } from 'react-native';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import AccountService from '../account-service/AccountService';

type Props = {};
export default class LoadingActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {  const { navigate } = this.props.navigation;
        AccountService.isConnected()
                .then((_result) => {
                    if(_result.status == true) {  // verifying expire date. console.
                            AccountService.verifyAccountToken(_result.message)
                                    .then((_result) => {
                                        if(_result == true) { navigate('AccountOn'); }
                                        else if(_result == false) { navigate('AccountOff'); }
                                    });
                    } else if(_result.status == false) { navigate('AccountOff'); }
                }); 
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('../assets/drawable/icons8-eye-96.png')} style={styles.logo} />
                    </View>
                    <ActivityIndicator style={styles.indicator} size={'large'} animating={true} color="#1F3A93" />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF', width: width, justifyContent: 'center', alignItems: 'center', },
    indicator: { position: 'relative', top: 80 },
});