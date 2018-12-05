import React, { Component } from "react";
import {  StyleSheet, View } from "react-native";
import {
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text,
    Header,
    Spinner,
    Left,
    Title,
    Icon,
    Body
} from 'native-base'
import Expo from 'expo';

import { Constants, Location, Permissions } from 'expo';

import { AsyncStorage } from "react-native"

import firebase from '../Config/firebase'

class ParentScreen extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    _signUp = () => {
        if ((this.state.email !== undefined) && (this.state.password !== undefined)) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    AsyncStorage.setItem('usered', true);
                    this.props.navigation.navigate('Main')
                })
                .catch((error) => {
                    alert(error.message)
                });
        }
        else {
            alert('please enter email and password')
        }
    }


    _login = () => {
        if ((this.state.email !== undefined) && (this.state.password !== undefined)) {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    AsyncStorage.setItem('usered', true);
                    this.props.navigation.navigate('Main')
                })
                .catch((error) => {
                    alert(error.message)
                });
        }
        else {
            alert('please enter email and password')
        }
    }

    _onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <Container>
                <Header style={{ marginTop: 25 }}>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Parent</Title>
                    </Body>

                </Header>
                <Content>

                    <Form>

                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this._onChange('email', email)}
                            />
                        </Item>

                        <Item stackedLabel >
                            <Label>Password</Label>
                            <Input
                                onChangeText={(Password) => this._onChange('password', Password)}
                            />
                        </Item>

                    </Form>
                    <View style={styles.btn}>
                        <Button info onPress={() => this._signUp()}>
                            <Text> Create Account </Text>
                        </Button>
                        <Button info style={{ marginLeft: 10 }} onPress={() => this._login()}>
                            <Text> Login </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default ParentScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 10,
        padding: 13
    }
});