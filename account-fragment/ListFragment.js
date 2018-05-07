'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, ActivityIndicator, Image, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, List, ListItem, Card, CardItem, Body, Picker, Form } from 'native-base';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ListFragment extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { name: '', address: '', description: '', location: '', logement: '', surface: '', roomsI : [] };
        this.setupLocation = this.setupLocation.bind(this); this.setupLogement = this.setupLogement.bind(this);
        this.setupName = this.setupName.bind(this); this.setupDescription = this.setupDescription.bind(this);
        this.setupAddress = this.setupAddress.bind(this); this.setupSurface = this.setupSurface.bind(this);
    }

    setupName = (text) => { this.setState({ name: text }); }
    setupDescription = (text) => { this.setState({ description: text }); }
    setupAddress = (text) => { this.setState({ address : text }); }
    setupLocation = (text) => { this.setState({ location: text }); }
    setupLogement = (text) => { this.setState({ logement: text }); }
    setupSurface = (text) => { this.setState({ surface: text }); }

    render() {
        return (
        <KeyboardAvoidingView style={styles.listContainer} behavior="height">
            <ScrollView style={styles.listContainer}>
                <View style={styles.listSearch}>
                    <TextInput placeholder="Recherche Ma Propriété ..." placeholderTextColor="#1F3A93" onChangeText={(text) => { this.props.validateSearch(text); }}
                                underlineColorAndroid={'transparent'} autoCapitalize={'none'} style={styles.searchI} returnKeyType="search" />
                    <TouchableOpacity style={styles.listAdd} onPress={this.props.showModal}><Image source={require('../assets/drawable/icons8-plus-math-96.png')} style={styles.listIcon} /></TouchableOpacity> 
                    <TouchableOpacity style={styles.listS}><Image source={require('../assets/drawable/icons8-google-web-search-512.png')} style={styles.listSIcon} /></TouchableOpacity> 
                </View>
                <Modal visible={this.props.show} style={styles.modalProperty}>
                    <View style={ styles.closeView}>
                        <TouchableOpacity style={styles.listClose} onPress={this.props.closeModal}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.listCIcon} /></TouchableOpacity> 
                    </View>
                    <ScrollView style={styles.listProperty}>
                        <Card style={styles.firstCard}><CardItem><Body><TextInput onChangeText={(name) => { this.setupName(text); } } placeholder="Nom de la propriété" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} style={styles.nameI} returnKeyType="go" /></Body></CardItem></Card>
                        <Card style={styles.secondCard}><CardItem><Body><TextInput placeholder="Addresse de la propriété" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} style={styles.addressI} returnKeyType="go" /></Body></CardItem></Card>
                        <Card style={styles.thirdCard}><CardItem><Body><TextInput placeholder="Description de la propriété" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} style={styles.descriptionI} returnKeyType="go" editable={true} maxLength={40} multiline={true} /></Body></CardItem></Card>
                        <Card style={styles.sixthCard}><CardItem><Body><TextInput onChangeText={(text) => { this.setupSurface(text); } } keyboardType="numeric" placeholder="Surface de la propriété" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} style={styles.nameI} returnKeyType="go" /></Body></CardItem></Card>
                        <Card style={styles.fourthCard}>
                            <CardItem style={styles.fourthCardS}><Body>
                                <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down-outline" />} placeholder="Selectionner type de logement" selectedValue={this.state.logement}
                                    placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" style={styles.selectI} onValueChange={this.setupLogement.bind(this)}>
                                        <Picker.Item label="Appartement" value="Appartement" style={styles.selectM} />
                                        <Picker.Item label="Maison" value="Maison" style={styles.selectM} />
                                </Picker>
                            </Body></CardItem>
                        </Card>
                        <Card style={styles.fifthCard}>
                            <CardItem style={styles.fifthCardS}><Body>
                                <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down-outline" />} placeholder="Selectionner type de location" selectedValue={this.state.location}
                                    placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" style={styles.selectI} onValueChange={this.setupLocation.bind(this)}>
                                        <Picker.Item label="Vide" value="Vide" style={styles.selectM} />
                                        <Picker.Item label="Meublé" value="Meuble" style={styles.selectM} />
                                </Picker>
                            </Body></CardItem>
                        </Card>
                        <Card style={styles.seventhCard}>
                            <TouchableOpacity style={styles.next} onPress={this.props.showNModal}>
                                <Text style={styles.nextBtn}>Suivant</Text>
                            </TouchableOpacity>
                        </Card>
                    </ScrollView>
                </Modal>
                <Modal visible={this.props.showN} style={styles.modalNext}>
                    <View style={ styles.closeView}>
                        <TouchableOpacity style={styles.listClose} onPress={this.props.closeNModal}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.listCIcon} /></TouchableOpacity> 
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: { flex: 1, flexDirection: 'column', },
    listSearch: { position: 'absolute', width: width, height: 50, top: 15, backgroundColor: '#FFFFFF',justifyContent: 'flex-start', flex: 1, flexDirection: 'row' },
    closeView: { position: 'absolute', width: width, height: 50, top: 15, backgroundColor: '#FFFFFF', justifyContent: 'center', flex: 1, flexDirection: 'row' },
    searchI: { position: 'relative', top: 15, width: width - 40, height: 40, borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, fontFamily: 'Nunito-ExtraBold', fontWeight: '900', left: 20 },
    listAdd: { position: 'relative', top: 25, width: 22, height: 22, right: 50 },
    listS: { position: 'relative', top: 22, width: 22, height: 22, right: 40 },
    listClose: { alignSelf: 'center', position: 'relative', top: 22,},
    listIcon: { width: 22, height: 22 }, listSIcon: { width: 30, height: 30 }, listCIcon: { width: 35, height: 35 },
    listProperty: { position: 'absolute', top: 80, width: width - 20, backgroundColor: '#FFFFFF', alignSelf: 'center', },
    modalProperty: { flex: 1, flexDirection: 'column',},
    modalNext: { flex: 1, flexDirection: 'column',},
    firstCard: { borderRadius: 10, height: 40, position: 'relative' },
    thirdCard: { borderRadius: 10, height: 180, position: 'relative' },
    secondCard: { borderRadius: 10, height: 40, position: 'relative' },
    fourthCard: { borderRadius: 10, height: 30, position: 'relative' },
    fifthCard: { borderRadius: 10, height: 30, position: 'relative' },
    nameI: { position: 'relative', fontFamily: 'Nunito-ExtraBold', fontWeight: '900', color: '#000000' },
    descriptionI: { position: 'relative', fontFamily: 'Nunito-ExtraBold', fontWeight: '900', color: '#000000' },
    addressI: { position: 'relative', fontFamily: 'Nunito-ExtraBold', fontWeight: '900', color: '#000000' },
    selectI: { position: 'relative', top: -12, width: width - 40, height: 30, },
    fourthCardS : { position: 'relative', top: 0, width: width - 40, height: 30 },
    fifthCardS : { position: 'relative', top: 0, width: width - 40, height: 30 },
    selectM: { fontFamily: 'Nunito-ExtraBold', fontWeight: '900' }, 
    seventhCard: { width: width - 100, alignSelf: 'center', position: 'relative', height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    nextBtn: { fontFamily: 'Nunito-ExtraBold', fontWeight: '900' }
});