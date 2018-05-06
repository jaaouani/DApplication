'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator, Image, ListView } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ProfileFragment extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.profileContainer}>
                <List style={styles.profileList}>
                    <ListItem icon style={styles.firstItem}>
                        <Left><Icon name="aperture" style={styles.Icon}/></Left>
                        <Body><Text>Changer de Nom Complet</Text></Body>
                        <Right><Switch value={false} /></Right>
                    </ListItem>
                    <ListItem icon style={styles.secondItem}>
                        <Left><Icon name="eye" style={styles.Icon}/></Left>
                        <Body><Text>Changer de Mot de passe</Text></Body>
                        <Right><Switch value={false} /></Right>
                    </ListItem>
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: { flex: 1 },
    profileList: { flex: 1, flexDirection: 'column', position: 'relative', top: 20, width: width - 20, alignSelf: 'center' },
    Icon: { color: '#1F3A93' },
    secondItem: { position: 'relative', top: 40 }
});