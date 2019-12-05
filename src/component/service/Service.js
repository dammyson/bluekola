import React, {Component, PropTypes} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
  Alert,
} from 'react-native';

import { Icon } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const bg = require('../../assets/userbackground.jpg');
const logo = require('../../assets/logo.png');

export default class ProfileInfo extends Component {
  state = {
    scrollY: new Animated.Value(0),
  };
  renderImage = () => {
    let {property} = this.props;
    let {scrollY} = this.state;

    let logoScale = scrollY.interpolate({
      inputRange: [-50, 0, 100],
      outputRange: [1.5, 1, 1],
    });

    let logoTranslateY = scrollY.interpolate({
      inputRange: [-150, 0, 150],
      outputRange: [40, 0, -40],
    });

    return (
      <View style={styles.hero}>
        <Animated.Image
        source={logo} 
          style={[
            styles.image,
            {
              transform: [{scale: logoScale}, {translateY: logoTranslateY}],
            },
          ]}
        />
      </View>
    );
  };

  render() {
    let {scrollY} = this.state;
    return (
      <View style={styles.root}>
       
        {this.renderImage()}
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={[StyleSheet.absoluteFill]}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              {
                useNativeDriver: true,
              },
            )}>
            <TouchableHighlight
              onPress={() => setSceneType('galleryScene')}
              underlayColor="transparent">
              <View style={styles.heroSpacer} />
            </TouchableHighlight>

            <View style={styles.contentContainerStyle}>

              <Text style={styles.title}>LLLLL the ehchchhhchehchhfhhhehfhhehhreihgheihrgeh</Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>

                <View style={{ flex: 2 }}>

                 

                  <Text style={[styles.lightText]}>
                    Added
                  </Text>

                </View>

                <View style={{ flex: 1 }}>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>

                    <Text style={styles.price}>
                    LOLLLOLOLLLLLLLLLOLLLLOL
                    </Text>

                   
                  </View>

                  <Text style={[styles.lightText, { textAlign: 'center' }]}>
                   676 views
        </Text>

                </View>

              </View>

        

              <View style={styles.extraInfo}>

                <View style={styles.infoRow}>
                  <Text style={styles.infoTitle}>Area</Text>
                  <Text style={styles.infoResult}>
                   768 metre
        </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoTitle}>Social Status</Text>
                  <Text style={styles.infoResult}>
                   male
                  </Text>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoTitle}>Address</Text>

                  <Text style={styles.infoResult}>
                   kjkjkj ljljljljljlljljljljljljljljljljljljljljljl
                   
                  </Text>
                </View>

              </View>


              <View>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.description}>
               hhghghghghsjjkskjsjjdjhjhjhjejhjehjdhfjhdfjhdfjhfjehrjhjdhfjdhjdhfjdfhjdhfjdhfjdhfjdfhjdjghdiehdjnrugjdjfhjhjhjsdjsgdjsgdjsdjsgdjsgjsdjsgdjsdgjsgjsgjsdgjsdgjssjdj
                </Text>
              </View>

           

            
      

              <View style={[styles.infoRow, { paddingVertical: 5 }]}>
                <FontAwesome
                  name="mobile"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  color='#000'
                />
                <Text style={styles.infoTitle}>Mobile</Text>
                <Text
                  style={styles.infoResult}
                 >
                081663126432
                </Text>

              </View>

                <View style={[styles.infoRow, { paddingVertical: 5 }]}>
                <FontAwesome
                  name="mobile"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  color='#000'
                />
                <Text style={styles.infoTitle}>Mobile</Text>
                <Text
                  style={styles.infoResult}
                 >
                081663126432
                </Text>

              </View>


              <View style={styles.extraInfo}>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Area</Text>
  <Text style={styles.infoResult}>
   768 metre
</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Social Status</Text>
  <Text style={styles.infoResult}>
   male
  </Text>
</View>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Address</Text>

  <Text style={styles.infoResult}>
   kjkjkj ljljljljljlljljljljljljljljljljljljljljljl
   
  </Text>
</View>

</View>


<View>
<Text style={styles.descTitle}>Description</Text>
<Text style={styles.description}>
hhghghghghsjjkskjsjjdjhjhjhjejhjehjdhfjhdfjhdfjhfjehrjhjdhfjdhjdhfjdfhjdhfjdhfjdhfjdfhjdjghdiehdjnrugjdjfhjhjhjsdjsgdjsgdjsdjsgdjsgjsdjsgdjsdgjsgjsgjsdgjsdgjssjdj
</Text>
</View>

                <View style={[styles.infoRow, { paddingVertical: 5 }]}>
                <FontAwesome
                  name="mobile"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  color='#000'
                />
                <Text style={styles.infoTitle}>Mobile</Text>
                <Text
                  style={styles.infoResult}
                 >
                081663126432
                </Text>

              </View>


              <View style={styles.extraInfo}>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Area</Text>
  <Text style={styles.infoResult}>
   768 metre
</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Social Status</Text>
  <Text style={styles.infoResult}>
   male
  </Text>
</View>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Address</Text>

  <Text style={styles.infoResult}>
   kjkjkj ljljljljljlljljljljljljljljljljljljljljljl
   
  </Text>
</View>

</View>


<View>
<Text style={styles.descTitle}>Description</Text>
<Text style={styles.description}>
hhghghghghsjjkskjsjjdjhjhjhjejhjehjdhfjhdfjhdfjhfjehrjhjdhfjdhjdhfjdfhjdhfjdhfjdhfjdfhjdjghdiehdjnrugjdjfhjhjhjsdjsgdjsgdjsdjsgdjsgjsdjsgdjsdgjsgjsgjsdgjsdgjssjdj
</Text>
</View>
                <View style={[styles.infoRow, { paddingVertical: 5 }]}>
                <FontAwesome
                  name="mobile"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  color='#000'
                />
                <Text style={styles.infoTitle}>Mobile</Text>
                <Text
                  style={styles.infoResult}
                 >
                081663126432
                </Text>

              </View>


              <View style={styles.extraInfo}>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Area</Text>
  <Text style={styles.infoResult}>
   768 metre
</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Social Status</Text>
  <Text style={styles.infoResult}>
   male
  </Text>
</View>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Address</Text>

  <Text style={styles.infoResult}>
   kjkjkj ljljljljljlljljljljljljljljljljljljljljljl
   
  </Text>
</View>

</View>


<View>
<Text style={styles.descTitle}>Description</Text>
<Text style={styles.description}>
hhghghghghsjjkskjsjjdjhjhjhjejhjehjdhfjhdfjhdfjhfjehrjhjdhfjdhjdhfjdfhjdhfjdhfjdhfjdfhjdjghdiehdjnrugjdjfhjhjhjsdjsgdjsgdjsdjsgdjsgjsdjsgdjsdgjsgjsgjsdgjsdgjssjdj
</Text>
</View>
                <View style={[styles.infoRow, { paddingVertical: 5 }]}>
                <FontAwesome
                  name="mobile"
                  size={20}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  color='#000'
                />
                <Text style={styles.infoTitle}>Mobile</Text>
                <Text
                  style={styles.infoResult}
                 >
                081663126432
                </Text>

              </View>


              <View style={styles.extraInfo}>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Area</Text>
  <Text style={styles.infoResult}>
   768 metre
</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Social Status</Text>
  <Text style={styles.infoResult}>
   male
  </Text>
</View>

<View style={styles.infoRow}>
  <Text style={styles.infoTitle}>Address</Text>

  <Text style={styles.infoResult}>
   kjkjkj ljljljljljlljljljljljljljljljljljljljljljl
   
  </Text>
</View>

</View>


<View>
<Text style={styles.descTitle}>Description</Text>
<Text style={styles.description}>
hhghghghghsjjkskjsjjdjhjhjhjejhjehjdhfjhdfjhdfjhfjehrjhjdhfjdhjdhfjdfhjdhfjdhfjdhfjdfhjdjghdiehdjnrugjdjfhjhjhjsdjsgdjsgdjsdjsgdjsgjsdjsgdjsdgjsgjsgjsdgjsdgjssjdj
</Text>
</View>
        

            </View>
          </Animated.ScrollView>

           <View style={styles.ellipse}>
          <Icon
            name="angle-left"
            size={30}
            type='font-awesome'
            color='#000'
          />
        </View>

        <View style={styles.ellipse2}>
          <Icon
            name="angle-left"
            size={30}
            type='font-awesome'
            color='#000'
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },

  ellipse: {
    bottom: 26,
    right: 51,
    width: 81,
    height: 81,
    position: "absolute",
    backgroundColor: "#000",
  },
  ellipse2: {
    left: 59,
    bottom: 26,
    width: 81,
    height: 81,
    position: "absolute",
    backgroundColor: "#000",
  }, container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 10,
    backgroundColor: 'white',
    minHeight: Dimensions.get('window').height - 250,
  },
  content: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  tags: {
    marginTop: 10,
    flexDirection: 'row',
  },
  icons: {
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    color: '#2c2d30',
    fontWeight: '600',
    marginBottom: 10,
  },
  descTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#2c2d30',
  },
  address: {
    marginTop: 10,
    fontSize: 14,
    color: '#2c2d30',
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'justify',
    color: '#384760',
    fontFamily: 'Avenir-Light',
  },
  amenity: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#384760',
    fontFamily: 'Avenir-Light',
  },
  username: {
    color: '#384760',
  },
  label: {
    color: '#384760',
    fontSize: 12,
  },
  price: {
    fontSize: 17,
    color: '#2c2d30',
    margin: 10,
    fontWeight: '600',
  },
  lightText: {
    color: '#384760',
    fontWeight: '100',
    fontSize: 12,
    paddingVertical: 2,
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  heroSpacer: {
    height: 250,
    backgroundColor: 'transparent',
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  extraInfo: {
    marginTop: 20,
  },
  infoTitle: {
    fontWeight: '100',
  },
  infoResult: {
    fontWeight: '500',
    paddingLeft: 10,
  },
});