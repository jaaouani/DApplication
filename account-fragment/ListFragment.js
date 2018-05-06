'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class ListFragment extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.listContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.leftContainer}>
                        <View style={styles.leftTitle}><Text style={styles.title}>Oussama Jaaouani</Text></View>
                        {/* <View style={styles.leftPoints}>
                            <Image source={require('../assets/drawable/icons8-money-box-96.png')} style={styles.pointsLogo} />
                            <Text style={styles.points}>20</Text>
                        </View> */}
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: { flex: 1, flexDirection: 'column', backgroundColor:'#FFFFFF',},
    headerContainer: { flex:1, flexDirection: 'row', position: 'relative', width: width, height: 45, top: 0, backgroundColor: '#FFFFFF' },
    leftContainer: { width: width - 100, height: 45, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', position:'relative', top: 0, flex:1, flexDirection: 'row' },
    rightContainer: { flex:1, flexDirection: 'row', width: 80, height: 45, backgroundColor: '#FFFFFF', alignSelf: 'flex-end', position: 'relative', top: 45, alignItems: 'center', justifyContent: 'center' },
    leftTitle: { position: 'relative', top: 0, left: 20 },
    title: { fontFamily: 'Nunito-ExtraBold', color: '#1F3A93' },
});