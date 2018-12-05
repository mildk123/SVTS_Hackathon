import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image
} from "react-native";

import * as Expo from 'expo';




import { Container, Content, Button, Text } from 'native-base';

class AuthScreen extends Component {

    static navigationOptions = {
        header: null
    }

    componentWillMount(){
        Expo.SecureStore.getItemAsync('usered')
        .then(callback => console.log(callback))
    }


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                    <Image source={require('../assets/images/icon.png')} style={{width: 250, height: 250, justifyContent: 'center', margin: 100}}/>
                    </View>
                    <View style={styles.btn}>
                        <Button
                            large 
                            onPress={() => this.props.navigation.navigate('Parent')}
                        ><Text>Parent</Text>
                        </Button>
                        <Button
                            large 
                            onPress={() => this.props.navigation.navigate('Driver')}
                        ><Text>Driver</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00bfff',
        flex: 1,
        alignItems: 'center',
    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});