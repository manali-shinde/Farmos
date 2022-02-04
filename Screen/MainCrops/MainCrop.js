import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import OnionScreen from './OnionScreen';
import moment from 'moment';

const MainCrop = () => {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://farmos-api.herokuapp.com/api/crop-price')
      .then(res => res.json()).then(data => {

        console.log(data.onion)
        setData(data.onion)
        })
  }
  , []);
  
 
  return (
    
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff'}}>
       <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
    <Image
            source={require('./CropsImages/onion.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 10,
          }}>
         Onion, Quality
        </Text>
    </View>
    <OnionScreen data={data.day1}/>
    
   

    
   </ScrollView>
      
  );
};

export default MainCrop;

const styles = StyleSheet.create({
  box:{
    margin: 10,
    borderColor: "#C4C4C4",
    width: '100%',
    height: "12%",
    justifyContent:'center',
    marginBottom:5
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10,
    alignItems: 'center'
  },
  header:{
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    margin: 15,
    marginTop: 20
  },
  headerLine: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: '#000',
    marginTop: 1,
    marginBottom:10
  },
  txt:{
    fontSize:16
  }
});