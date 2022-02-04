import React, {useState, useEffect} from 'react';
import {View, Text,  ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


const PricePredictionScreen = ({navigation}) => {
  
  return (
    <ScrollView style={{flex: 1, marginBottom:10, backgroundColor:"#fff"}}>
      <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
        
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginBottom: 30,
              fontWeight: "bold"
            }}>
            Crop Price Prediction
          </Text>

      </View>
      <View>
      <TouchableOpacity  style={styles.box} onPress={() => navigation.navigate('Onion')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/onion.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Onion, Quality</Text>
          </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Wheat')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/wheat.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Wheat, Quality</Text>
          </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Paddy')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/paddy.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Paddy, Quality</Text>
          </View>
    </TouchableOpacity>
      </View>
      </ScrollView>
  );
};

export default PricePredictionScreen;

const styles = StyleSheet.create({
    box:{
      backgroundColor : '#F4F4F4',
      margin: 10,
      marginTop:10,
      borderColor: "#C4C4C4"
    },
    imageContainer: {
      flexDirection: 'row',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 1,
      overflow: 'hidden',
      marginVertical: 10,
      marginLeft:20
     
    },
    header:{
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
      marginTop: 30,
      marginLeft:15,
     
    },
  });