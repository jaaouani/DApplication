import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import _switchNavigation from './Navigation';

type Props = {};
export default class Application extends Component<Props> {
  render() {
    return (
        <_switchNavigation />
    );
  }
}

