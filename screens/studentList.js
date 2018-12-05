import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Button, Spinner } from 'native-base';
import ShowMore from '../components/showMore';


export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      isLoading: true,
      kidlist: [],
      selectedKid: null
    }

  }

  static navigationOptions = {
    title: 'Students '
  };


  componentDidMount = () => {
    fetch('https://randomuser.me/api/?results=45')
      .then(call => call.json())
      .then(data => this.setState({
        kidlist: data.results,
        isLoaded: true,
        isLoading: false
      })
      )
      .catch(err => console.log(err))
  }


  _viewMore = (index) => {
    this.setState({
      showMore: true,
      selectedKid: this.state.kidlist[index]
    })
  }

  _back = () => {
    this.setState({
      isLoaded: true,
      isLoading: false,
      showMore: false,
    })
  }

  render() {
    const { isLoading, isLoaded, kidlist, showMore } = this.state;
    if (isLoading) return <Spinner />
    if (showMore) return <ShowMore selectedKid={this.state.selectedKid} goBack={this._back} />
    if (!isLoaded || !kidlist) return null;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <List>
              {kidlist && kidlist.map((kid, index) => {
                return <ListItem
                  avatar
                  onPress={() => this._viewMore(index)}
                  key={index}
                >
                    <Left>
                      <Thumbnail source={{ uri: kid.picture.thumbnail }} />
                    </Left>
                  <Body>
                    <Text>{kid.name.first} {kid.name.last}</Text>
                    <Text note>Doing what you like will always</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              })
              }
            </List>
          </Content>
        </Container>

      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
