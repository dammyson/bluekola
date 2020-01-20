import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Alert, AsyncStorage} from "react-native";
const URL = require("../../component/server");
import styles from "./styles";
import { Actions } from "react-native-router-flux";


export class step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image:'',
      auth:''
    };
  }

  componentDidMount() {

    AsyncStorage.getItem('auth').then((value) => {
      if(value==''){ }else{this.setState({auth: value})}
    })
   

  }

  createRequest()
  {
    
 
      const {auth, image } = this.state
      const data= this.props.getState()
  
      this.setState({ loading: true})
      fetch(URL.url+'/api/service/create', { method: 'POST',  headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer ' + auth,
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        short_brief: data.title,
        description: data.description,
        category_id: data.category,
        user_id: 4,
        image_url: image,
      
      }), 
     })
      .then(res => res.json())
      .then(res => {
        console.warn(res);
        if(res.status){
        this.setState({ loading: false})
        Actions.home();

        }else{
      Alert.alert('Login failed', "Check your details", [{text: 'Okay'}])
      this.setState({ loading: false})
        }
      }).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });



  
 }
  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ image: text })}
          value={this.state.text}
          placeholder={"Image"}
          placeholderTextColor="#fff"
        />
       
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
           


          </TouchableOpacity>

            <TouchableOpacity onPress={() => this.createRequest()} style={styles.btnStyle}>
           
           </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step4;
