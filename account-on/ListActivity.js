'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ListFragment from '../account-fragment/ListFragment';

type Props = {};
export default class ListActivity extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: ('Mon Dépôt'), 
        tabBarIcon: (<Icon name='navicon' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="position">
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ListFragment />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF',},
});