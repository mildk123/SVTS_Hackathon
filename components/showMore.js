import React from "react";
import {
    Text,
    StyleSheet,
    BackHandler

} from "react-native";
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Right, Button } from 'native-base';


class ShowMore extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.goBack(); // works best when the goBack is async
        return true;
    }

    _getDirections = (coordinates) => {
        console.log(coordinates)
    }


    render() {
        const { selectedKid } = this.props;
        return <Container>
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Left>
                            <Thumbnail source={{ uri: selectedKid.picture.thumbnail }} />
                            <Body>
                                <Text>{selectedKid.name.first} {selectedKid.name.last}</Text>
                                <Text note>School Name: Becon Light Secondary School</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                            <Text>Cell : {selectedKid.cell}</Text>
                            <Text>Age : {selectedKid.dob.age}</Text>
                            <Text>gender : {selectedKid.gender}</Text>
                            <Text>Parent's Name : {`${selectedKid.name.title}.${selectedKid.name.first} ${selectedKid.name.last}`}</Text>
                            <Text>Parent's Cell : {selectedKid.phone}</Text>
                            <Text>Registered : {selectedKid.registered.date} </Text>
                            <Text>Pickup Time : 7:45 AM </Text>
                            <Text>Dropoff time : 1:20 PM </Text>

                        </Body>
                    </CardItem>

                    <CardItem footer bordered>
                        <Text>Location : {selectedKid.location.street}</Text>

                        <Right>
                            <Text>{selectedKid.location.street}</Text>
                            <Button
                                onPress={() => this._getDirections(selectedKid.location.coordinates)}>
                                <Text>Get Directions
                                </Text>
                            </Button>
                        </Right>
                    </CardItem>

                </Card>
            </Content>
        </Container >
    }
}
export default ShowMore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});