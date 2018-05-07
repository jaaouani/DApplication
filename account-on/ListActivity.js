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
        tabBarLabel: ('Mes Propriétés'), 
        tabBarIcon: (<Icon name='location' size={35} color='#1F3A93' />),
    };

    constructor(props) {
        super(props);
        this.state = { searchT: '', showNew: false, showNext: false };
        this.validateSearch = this.validateSearch.bind(this);
        this.showNewModal = this.showNewModal.bind(this); this.closeNewModal = this.closeNewModal.bind(this);
        this.showNextModal = this.showNextModal.bind(this); this.closeNextModal = this.closeNextModal.bind(this);
    }

    validateSearch = (text) => { this.setState({ searchT: text }); }
    showNewModal = () => { this.setState({ showNew : true }); }
    closeNewModal = () => { this.setState({ showNew : false }); }

    showNextModal = () => { this.setState({ showNext: true }); this.setState({ showNew: false }); }
    closeNextModal = () => { this.setState({ showNext : false}); }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="height">
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ListFragment validateSearch={this.validateSearch} closeModal={this.closeNewModal} showModal={this.showNewModal} show={this.state.showNew}
                                closeNModal={this.closeNextModal} showNModal={this.showNextModal} showN={this.state.showNext} />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF',},
});