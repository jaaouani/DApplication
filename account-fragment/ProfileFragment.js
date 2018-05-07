'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { List, ListItem, Text, Left, Body, Right, Switch, Toast, Separator } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ProfileFragment extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { nF: '', nP: '', nA: '', nA2: '', nC: '', nZ: '', nPH: '' }
        this.validateFullname = this.validateFullname.bind(this);
    }

    validateFullname = () => {
        if(this.state.nF.length >= 3) { 
            this.props.submitF(this.state.nF);
        } else { Toast.show({ text: 'Il faut au moins 3 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validatePassword = () => {
        if(this.state.nP.length >= 8) { 
            this.props.submitP(this.state.nP);
        } else { Toast.show({ text: 'Il faut au moins 8 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validateAddress = () => {
        if(this.state.nA.length >= 12) { 
            this.props.submitA(this.state.nA);
        } else { Toast.show({ text: 'Il faut au moins 12 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validateAddress2 = () => {
        if(this.state.nA2.length >= 4) { 
            this.props.submitA2(this.state.nA2);
        } else { Toast.show({ text: 'Il faut au moins 4 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validateCity = () => {
        if(this.state.nC.length >= 4) { 
            this.props.submitC(this.state.nC);
        } else { Toast.show({ text: 'Il faut au moins 4 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validateZipcode = () => {
        if(this.state.nZ.length >= 4) { 
            this.props.submitZ(this.state.nZ);
        } else { Toast.show({ text: 'Il faut au moins 4 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }
    validatePhone = () => {
        if(this.state.nPH.length >= 9) { 
            this.props.submitPH(this.state.nPH);
        } else { Toast.show({ text: 'Il faut au moins 9 caractères.', buttonText: 'Compris', position: 'top', textStyle: { color: "#FFFFFF" }, type: "danger", duration: 3000 } ); }
    }

    render() {
        return (
            <View style={styles.profileContainer}>
                <List style={styles.profileList}>
                    <ListItem icon style={styles.firstItem}>
                        <Left><Icon name="play" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Nom Complet</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnFullname} onPress={this.props.showFullnameBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.secondItem}>
                        <Left><Icon name="lock" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Mot de passe</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnPassword} onPress={this.props.showPasswordBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.thirdItem}>
                        <Left><Icon name="location" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Addresse Ligne 1</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnAddress} onPress={this.props.showAddressBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.fourthItem}>
                        <Left><Icon name="tag" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Addresse Ligne 2</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnAddress2} onPress={this.props.showAddressBox2}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.fifthItem}>
                        <Left><Icon name="star" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Ville</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnCity} onPress={this.props.showCityBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.sixthItem}>
                        <Left><Icon name="paperclip" size={22} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Code Postale</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnZipcode} onPress={this.props.showZipcodeBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem icon style={styles.seventhItem}>
                        <Left><Icon name="bell" size={30} style={styles.Icon}/></Left>
                        <Body><Text style={styles.settingsText}>Modifier Numéro de Téléphone</Text></Body>
                        <Right>
                            <TouchableOpacity style={styles.btnPhone} onPress={this.props.showPhoneBox}>
                                <Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.iconSetting} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
                <Modal visible={this.props.fullnameB} style={styles.modalFullname} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Nom Complet" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nF: t }); } } returnKeyType="send"/>
                                <TouchableOpacity onPress={this.props.closeF}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateFullname}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitF} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.passwordB} style={styles.modalPassword} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewP}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Mot de passe" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nP: t }); } } secureTextEntry={true} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closeP}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validatePassword}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitP} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.addressB} style={styles.modalAddress} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewA}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Addresse Ligne 1" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nA: t }); } } secureTextEntry={false} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closeA}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateAddress}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitA} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.addressB2} style={styles.modalAddress2} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewA2}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Addresse Ligne 2" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nA2: t }); } } secureTextEntry={false} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closeA2}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateAddress2}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitA2} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.cityB} style={styles.modalCity} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewC}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Ville" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nC: t }); } } secureTextEntry={false} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closeC}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateCity}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitC} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.zipcodeB} style={styles.modalZipcode} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewZ}>
                            <View style={styles.errorView}>
                                <TextInput  placeholder="Insérer Code Postale" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nZ: t }); } } secureTextEntry={false} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closeZ}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validateZipcode}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitZ} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.props.phoneB} style={styles.modalPhone} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalViewPH}>
                            <View style={styles.errorView}>
                                <TextInput placeholder="Insérer Numéro de Téléphone" placeholderTextColor="#1F3A93" underlineColorAndroid={'transparent'} autoCapitalize={'none'} 
                                    autoCorrect={false} onChangeText={ (t) => { this.setState({ nPH: t }); } } secureTextEntry={false} returnKeyType="send" />
                                <TouchableOpacity onPress={this.props.closePH}><Image source={require('../assets/drawable/icons8-delete-512.png')} style={styles.errorPHClose}/></TouchableOpacity>
                                <TouchableOpacity onPress={this.validatePhone}><Image source={require('../assets/drawable/icons8-edit-512.png')} style={styles.submitPH} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: { flex: 1 }, Icon: { color: '#1F3A93', fontSize: 30 },
    profileList: { flex: 1, flexDirection: 'column', position: 'relative', top: 50, width: width - 20, alignSelf: 'center' },
    firstItem: { position: 'relative', top: 0 },
    secondItem: { position: 'relative', top: 0 },
    thirdItem: { position: 'relative', top: 0 },
    fourthItem: { position: 'relative', top: 0 },
    fifthItem: { position: 'relative', top: 0 },
    sixthItem: { position: 'relative', top: 0 },
    seventhItem: { position: 'relative', top: 0 },
    settingsText: { fontFamily: 'Nunito-ExtraBold', fontSize: 15, },
    btnFullname: { width: 22, height: 22 },
    btnPassword: { width: 22, height: 22 },
    btnAddress: { width: 22, height: 22 },
    btnAddress2: { width: 22, height: 22 },
    btnCity: { width: 22, height: 22 },
    btnZipcode: { width: 22, height: 22 },
    iconSetting: { width: 22, height: 22, position: 'relative', },
    modalFullname: { position: 'absolute', top: height / 3, height: height / 3},
    modalPassword: { position: 'absolute', top: height / 3, height: height / 3},
    modalAddress: { position: 'absolute', top: height / 3, height: height / 3},
    modalAddress2: { position: 'absolute', top: height / 3, height: height / 3},
    modalCity: { position: 'absolute', top: height / 3, height: height / 3},
    modalZipcode: { position: 'absolute', top: height / 3, height: height / 3},
    modalContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', },
    modalView: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewP: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewA: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewA2: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewC: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewZ: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    modalViewPH: { width: width - 25, height: 50, backgroundColor: '#FFFFFF', borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, position: 'absolute', top: 440, justifyContent: 'center', alignItems: 'center', },
    errorView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
    errorClose: { width: 25, height: 25, position: 'relative', right: -85 },
    errorPHClose: { width: 25, height: 25, position: 'relative', right: -65 },
    submitF: { width: 25, height: 25, position: 'relative', right: -25 },
    submitP: { width: 25, height: 25, position: 'relative', right: -25 },
    submitA: { width: 25, height: 25, position: 'relative', right: -25 },
    submitA2: { width: 25, height: 25, position: 'relative', right: -25 },
    submitC: { width: 25, height: 25, position: 'relative', right: -25 },
    submitZ: { width: 25, height: 25, position: 'relative', right: -25 },
    submitPH: { width: 25, height: 25, position: 'relative', right: -15 },
    fInput: { width: width - 120, height: 50, borderColor: '#DCDDE1', borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, fontFamily: 'Nunito-ExtraBold', fontWeight: '900'},
});