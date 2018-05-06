'use strict';

import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';

import LoginActivity from './account-off/LoginActivity';
import RegisterActivity from './account-off/RegisterActivity';
import ForgotActivity from './account-off/ForgotActivity';
import LoadingActivity from './account-off/LoadingActivity';
import ProfileActivity from './account-on/ProfileActivity';
import ListActivity from './account-on/ListActivity';
import LogOutActivity from './account-on/LogOutActivity';

const _authenticationStack = StackNavigator({
    Login : { screen : LoginActivity },
    Forgot : { screen : ForgotActivity }
}, { initialRouteName: 'Login', headerMode: 'none' });
const _authenticatioNavigation = TabNavigator({
    Login : { screen : _authenticationStack },
    Register : { screen : RegisterActivity },
}, { animationEnabled: true, swipeEnabled: true, tabBarOptions: { style: { height: 50, borderTopWidth: 0, borderTopColor: '#FFFFFF', backgroundColor: '#FFFFFF', paddingTop: 5 }, labelStyle: { color: '#1F3A93', fontFamily: 'Nunito-ExtraBold' },
     tabStyle : { backgroundColor: '#FFFFFF' } }, inactiveBackgroundColor: '#FFFFFF', activeBackgroundColor: '#FFFFFF' });

export const _accountNavigation = TabNavigator({
    Profile : { screen : ProfileActivity },
    List : { screen : ListActivity },
    LogOut : { screen : LogOutActivity }
}, { animationEnabled: true, swipeEnabled: true, tabBarOptions: { style: { height: 50, borderTopWidth: 0, borderTopColor: '#FFFFFF', backgroundColor: '#FFFFFF', paddingTop: 5 }, labelStyle: { color: '#1F3A93', fontFamily: 'Nunito-ExtraBold' },
     tabStyle : { backgroundColor: '#FFFFFF' } }, inactiveBackgroundColor: '#FFFFFF', activeBackgroundColor: '#FFFFFF' });

const _switchNavigation = SwitchNavigator({
    AccountLoading :  { screen : LoadingActivity },
    AccountOn : { screen: _accountNavigation },
    AccountOff : { screen: _authenticatioNavigation }
}, { initialRouteName: 'AccountLoading' });
export default _switchNavigation;