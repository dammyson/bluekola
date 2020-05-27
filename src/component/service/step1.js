import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Dimensions, TextInput,TouchableOpacity } from "react-native";
import { Container, Content, Text, Button, Left, Right, Body, Title, List, Item, Thumbnail, Grid, Col } from 'native-base';
import { Card, Icon, SocialIcon } from 'react-native-elements'


import Navbar from '../utilities/Navbar';
import color from '../utilities/color';


export default class CreateService extends Component {

  constructor(props) {
    super(props);


    this.state = {
      loading: false,
      data: [],
      auth: '',
      dataone: [3, 4, 8],
      datatwo: [],
      slider1ActiveSlide: 0,
      selected: null
    };
  }




  componentDidMount() {
    AsyncStorage.getItem('auth').then((value) => {
      if (value == '') {

      } else {
        this.setState({ auth: value })
      }

    })
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    if(this.state.titleText == ""){
      Alert.alert('Validation failed', "All fields are requried", [{ text: 'Okay' }])
      return
    }
    saveState({ title: this.state.titleText });
    next();
  };




  render() {



    var left = (
      <Left style={{ flex: 1 }}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon
            active
            name="arrowleft"
            type='antdesign'
            color={color.black}
          />
        </Button>
      </Left>
    );

    var right = (
      <Right style={{ flex: 1, flexDirection: 'row' }}>
 <TouchableOpacity onPress={this.nextStep} style={styles.nextButtonContainer} block iconLeft>
                        <Text style={styles.nextButtonText}>Next</Text>
                      </TouchableOpacity>
      </Right>
    );


    if (this.state.loading) {
      return (
        <View
          style={styles.backgroundImage}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.welcome}>
              <PulseIndicator color={color.slide_color_dark} size={70} />
            </View>
          </View>
        </View>
      );
    }

    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Navbar left={left} right={right} title='Profile' bg='#fff' />
        <Content>
          <View style={styles.backgroundImage}>
            <View style={{ flex: 1 }}>
              <View style={styles.pageHeading}>
                <Text style={styles.title}>Name and Description </Text>
                <Text style={styles.description}>Create a new service you are prepared to offer and increase your client base  </Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.label}>Enter Service name </Text>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Service name"
                    placeholderTextColor={color.dark_blue}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    inlineImageLeft='ios-call'
                    style={{ flex: 1, fontFamily: 'Poppins-Light' }}
                    onChangeText={text => this.setState({ code: text })}
                  />


                </View>


                <Text style={styles.label}>Enter Service  Description  </Text>
                <View style={styles.textAreaContainer} >
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Input Notes"
                    placeholderTextColor="black"
                    numberOfLines={13}
                    multiline={true}
                  />
                </View>




                <Text style={styles.label}>Create Sub Section </Text>
                <View style={styles.subContainer} >
                  <Text style={styles.subLabel}>Sub Section </Text>
                  <View style={styles.whiteInputView}>
                    <TextInput
                      placeholder="Section name"
                      placeholderTextColor={color.dark_blue}
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType='email-address'
                      autoCapitalize="none"
                      autoCorrect={false}
                      inlineImageLeft='ios-call'
                      style={{ flex: 1, fontFamily: 'Poppins-Light' }}
                      onChangeText={text => this.setState({ code: text })}
                    />


                  </View>

                  <Text style={styles.subLabel}>Price Range </Text>
                  <View style={{ flexDirection: 'row' }}>

                    <View style={[styles.whiteInputView, { flex: 1 }]}>
                      <TextInput
                        placeholder="From"
                        placeholderTextColor={color.dark_blue}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        inlineImageLeft='ios-call'
                        style={{ flex: 1, fontFamily: 'Poppins-Light' }}
                        onChangeText={text => this.setState({ code: text })}
                      />


                    </View>

                    <View style={[styles.whiteInputView, { flex: 1 }]}>
                      <TextInput
                        placeholder="To"
                        placeholderTextColor={color.dark_blue}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        inlineImageLeft='ios-call'
                        style={{ flex: 1, fontFamily: 'Poppins-Light' }}
                        onChangeText={text => this.setState({ code: text })}
                      />


                    </View>

                  </View>

                  {this.state.buttonState == 'busy' ?
                    <Button style={styles.buttonContainer} block iconLeft>
                      <SkypeIndicator color='white' />
                    </Button>
                    : this.state.buttonState == 'success' ?
                      <Button style={styles.successButtonContainer} block iconLeft>
                        <Icon name="check" size={30} type='antdesign' color='#fff' />
                      </Button>
                      :
                      <Button style={styles.buttonContainer} block iconLeft>
                        <Text style={{ color: '#fdfdfd', fontWeight: '700' }}>ENTER</Text>
                      </Button>}



                </View>

                {this.renderSections(this.state.dataone)}



              </View>




            </View>
          </View>
        </Content>
      </Container>

    );
  }
  renderSections(data) {
    let cat = [];
    for (var i = 0; i < data.length; i++) {
      cat.push(
        <View style={styles.subSectionList} >
          <View style={{ flex: 1, justifyContent: 'center', }}>
            <Text style={styles.suSectionName}>Create Sub Section </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={styles.price}>N2000 - </Text>
            <Text style={styles.price}>N4000 </Text>
          </View>
        </View>
      );
    }
    return cat;
  }
}

const styles = StyleSheet.create({
  welcome: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
  },
  pageHeading: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25
  },
  title: {
    color: color.dark_blue,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  description: {
    color: color.dark_blue,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 10,
  },
  form: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25
  },
  label: {
    color: color.dark_blue,
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    marginTop: 15,
  },
  inputView: {
    height: 45,
    flexDirection: 'row',
    color: color.primary_color,
    backgroundColor: "#d1d1d1",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 25

  },
  textAreaContainer: {
    padding: 5,
    paddingLeft: 12,
    marginBottom: 3,
    marginTop: 5,
    backgroundColor: '#d1d1d1',
    borderRadius: 25
  },
  textArea: {
    height: 100,
    fontFamily: 'Poppins-Light',
    justifyContent: "flex-start"
  },
  subContainer: {
    padding: 5,
    paddingLeft: 12,
    marginBottom: 30,
    marginTop: 5,
    backgroundColor: '#d1d1d1',
    borderRadius: 25
  },
  whiteInputView: {
    height: 45,
    paddingLeft: 12,
    flexDirection: 'row',
    color: color.primary_color,
    backgroundColor: "#fff",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 20,
    marginLeft: 20

  },
  subLabel: {
    color: "#333333",
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20
  },
  buttonContainer: {
    backgroundColor: "#1A4093",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  successButtonContainer: {
    backgroundColor: "#5889c7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  subSectionList: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#394FA1',
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 25,
    paddingRight: 10,
    borderWidth: 0.6


  },
  suSectionName: {
    color: "#333333",
    fontFamily: "Poppins-Medium",
    fontSize: 13,

  },
  price: {
    color: "#394FA1",
    fontFamily: "Poppins-Medium",
    fontSize: 12,

  },
  nextButtonContainer: {
    backgroundColor: "#749AD1",
    borderRadius:20,
  
   
  
  },
  nextButtonText:{
    color: "#fff",
    fontSize: 13,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom:5,
    fontFamily: "Poppins-Bold",
   
  }


});