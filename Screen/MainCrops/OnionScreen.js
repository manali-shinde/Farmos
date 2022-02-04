import React,{useState, useEffect} from 'react';
import {View, Text,  SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment-timezone'

const OnionScreen = () => {
  
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
    <Card>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.header}>{price.date}</Text>
    </View>
    <View style={styles.headerLine} />
    <View style={{flexDirection:"column"}}>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Min Price: ₹ {price.min_price} /Qtl</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Avg Price: ₹ {price.avg_price} /Qtl</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} disabled={true}>
              <Text style={styles.txt}>Max Price: ₹ {price.max_price} /Qtl</Text>
            </TouchableOpacity>
        </View>

  </Card>
  )
}

export default OnionScreen;

const styles = StyleSheet.create({
    box:{
      margin: 10,
      borderColor: "#C4C4C4",
      width: '100%',
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
      fontSize: 20,
      textAlign:'center',
      color: '#000',
      margin: 5,
      justifyContent:'center'
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