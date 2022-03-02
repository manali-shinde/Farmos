import React,{useState, useEffect} from 'react';
import {View, Text,  SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment-timezone'

const GarlicScreen = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://farmos-api.herokuapp.com/api/crop-price')
      .then(res => res.json()).then(data => {

        console.log(data.garlic)
        setData(data.garlic)
        })
  }
  , []);
  
 
  return (
    
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff', marginBottom:10}}>
       <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
    <Image
            source={require('./CropsImages/garlic.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 10,
          }}>
         Garlic, Quality
        </Text>
    </View>
    <View >

            {
                data && data.length > -1 ? 

                data.map((data, idx) => (

                    idx !== -1 &&  <PricePredict key={idx} price={data}/>
                ))

                :

                <View/>
            }

        </View>

    
   </ScrollView>
      
  );
};

const PricePredict = ({price}) => {
  return (
    <Card style={{width:'60%'}}>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.header}>{price.date}</Text>
    </View>
    <View style={styles.headerLine} />
    <View style={{flexDirection:"row"}}>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Min Price</Text>
              <Text style={styles.txt}> ₹ {Math.floor(price.min_price)}/Qtl</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Avg Price</Text>
              <Text style={styles.txt}>₹ {Math.floor(price.avg_price)}/Qtl</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Max Price</Text>
              <Text style={styles.txt}>₹ {Math.floor(price.max_price)}/Qtl</Text>
            </TouchableOpacity>
    </View>

  </Card>
  )
}

export default GarlicScreen;

const styles = StyleSheet.create({
  box:{
    color: '#000',
    backgroundColor : '#228B22',
    padding : 6,
    fontSize: 13,
    margin: 4,
    marginTop:5,
    width: 100,
    alignItems:'center',
     
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
      fontSize: 20,
      textAlign:'center',
      color: '#000',
      margin: 5,
      justifyContent:'center',
      marginLeft:110
    },
    headerLine: {
      height: 1,
      marginHorizontal: 10,
      backgroundColor: '#000',
      marginTop: 1,
      marginBottom:10
    },
    txt:{
      fontSize:16,
      color:'#fff'
    }
  });