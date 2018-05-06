'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, AsyncStorage } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import AccountService from '../account-service/AccountService';

type Props = {};
export default class LogOutActivity extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: ('Déconnexion'), 
        tabBarIcon: (<Icon name='unlock' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() { const { navigate } = this.props.navigation;
        AccountService.isConnected()
                .then((_result) => { 
                    if(_result.status == true) { AsyncStorage.removeItem('token').then((_error) => { const { navigate } = this.props.navigation; navigate('AccountOff'); }); }
                    else if(_result.status == false) { navigate('AccountOff'); }
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