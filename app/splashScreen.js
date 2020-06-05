import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

export default class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            screen: false,
        };
        setTimeout(() =>
            this.setState({
                screen: this.props.navigation.navigate('FirstScreen')
            }),
            1000
        );
    }

    render() {
        return (
            <LinearGradient
                colors={['#00ffff', '#7fffd4']} style={styles.flexView}>
                <View
                    style={styles.container}>
                    <Text style={styles.splashText}>SPLASH SCREEN </Text>
                </View>
            </LinearGradient >
        );
    }
}