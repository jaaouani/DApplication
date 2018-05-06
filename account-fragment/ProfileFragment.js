'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right, Switch, Toast } from 'native-base';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ProfileFragment extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { nF: '', nP: '' }
        this.validateFullname = this.validateFullname.bind(this);
    }

    validateFullname = () => {
        if(this.state.nF.length >= 3) { 
            this.props.submitF(this.state.nF);
        } else { Toast.show({ text: 'Il faut au moins 3 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    render() {
        return (
            <View style={styles.profileContainer}>
                <List style={styles.profileList}>
                    <ListItem icon style={styles.firstItem}>
                        <Left><Icon name="aperture" style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Nom Complet</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnFullname} onPress={this.props.showFullnameBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
                <Modal visible={this.props.fullnameB} style={styles.modalFullname} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.errorView}>
                                <TextInput tyle={styles.fInput} placeholder="Insérer Nom Complet" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nF: t }); } }/>
                                <TouchableOpacity onPress={this.props.closeF}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateFullname}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitF} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: { flex: 1 }, Icon: { color: '#1F3A93', fontSize: 23 },
    profileList: { flex: 1, flexDirection: 'column', position: 'relative', top: 20, width: width - 20, alignSelf: 'center' },
    secondItem: { position: 'relative', top: 40 },
    settingsText: { fontFamily: 'Nunito-ExtraBold', fontSize: 15, },
    btnFullname: { width: 22, height: 22 },
    iconSetting: { width: 22, height: 22, position: 'relative', },
    modalFullname: { position: 'absolute', top: height / 3, height: height / 3},
    modalContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', },
    modalView: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 60, justifyContent: 'center', alignItems: 'center', },
    errorView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
    errorClose: { width: 25, height: 25, position: 'relative', right: -85 },
    submitF: { width: 25, height: 25, position: 'relative', right: -25 },
    fInput: { width: width - 120, height: 50, borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, fontFamily: 'Nunito-ExtraBold', fontWeight: '900',},
});