import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Container, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Spinner } from 'native-base';


class Notifications extends Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            isLoading: true,
            notifiList: []
        }
    }

    componentDidMount = async () => {
        fetch('https://randomuser.me/api/?results=45')
            .then(call => call.json())
            .then(data => this.setState({
                notifiList: data.results,
                isLoaded: true,
                isLoading: false
            })
            )
            .catch(err => console.log(err))
    }


    static navigationOptions = {
        title: 'Notifications '
    };

    render() {
        const { isLoading, isLoaded, notifiList } = this.state;
        if (isLoading) return <Spinner />
        if (!isLoaded || !notifiList) return null;
        return (
            <Container>
                <Content>
                    <List>
                        {notifiList && notifiList.map((item, index) => {
                           return <ListItem thumbnail key={index} 
                           style={{padding: 5}}
                           >

                                <Left>
                                    <Thumbnail source={{ uri: item.picture.thumbnail }} />
                                </Left>

                                <Body>
                                    <Text note numberOfLines={1}>{item.name.first} {item.name.first} has been dropped off at {item.location.street}</Text>
                                </Body>

                                {/* <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right> */}

                            </ListItem>

                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}
export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});