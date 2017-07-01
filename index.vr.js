import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import TextBoxes from './components/TextBoxes'
import Title from './components/Title'

export default class HelloVirtualWorld extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedState: '',
      title: "Panoramic Road Trip",
      states: {
        Arizona: "Arizona",
        NewHampshire: "New Hampshire",
      California: "California",
      Hawaii: "Hawaii",
      Texas: "Texas"
      }
    }
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    let randState;
    switch(random) {
      case 1:
        randState = "Arizona";
        break;
      case 2:
        randState = "NewHampshire";
        break;
      case 3:
        randState = "California";
        break;
      case 4:
        randState = "Hawaii";
        break;
      case 5:
        randState = "Texas";
        break;
    }
    this.setState({ selectedState: randState});
  }

  stateClicked (selection) {
    let newState;
    switch(selection) {
      case 1:
        newState = "Arizona";
        break;
      case 2:
        newState = "NewHampshire";
        break;
      case 3:
        newState = "California";
        break;
      case 4:
        newState = "Hawaii";
        break;
      case 5:
        newState = "Texas";
        break;
    }
    console.log(newState); //log the result
    this.setState({ selectedState: newState});
}


  render() {
    return (
      <View>
        <View style={{
          width: 2,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent:'flex-start',
          transform: [{translate: [0, 0, -5]}],
          layoutOrigin: [0.5,0.5]
        }}>
        <Pano source={asset(this.state.selectedState + '.jpg')}/>
        <Title title={this.state.title} />
        <TextBoxes
          stateClicked={this.stateClicked.bind(this)}
          states={this.state.states}/>

      </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
