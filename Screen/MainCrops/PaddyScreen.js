import React,{useState, useEffect} from 'react';
import {View, Text,  SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';


const PaddyScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [previousDate, setPreviousDate] = useState('');
  

  useEffect(() => {
    var date = moment()
                  .utcOffset('+05:30')
                  .format('DD MMMM YYYY');
    setCurrentDate(date);

    const yesterday = moment().add(-1, 'days').utcOffset('+05:30')
    .format('DD MMMM YYYY');
    setPreviousDate(yesterday);
  }, []);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#ffff'}}>

      <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
      <Image
              source={require('./CropsImages/paddy.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Paddy, Quality
          </Text>

      <TouchableOpacity style={styles.box} >
           <Text style={styles.header}>{currentDate}</Text>
           <Text style={styles.header}>Rs.10/Quintal</Text>
           <Text style={styles.header}>
              <Icon name="arrow-up" size={20} color="green" />
            </Text>
   
   </TouchableOpacity>
   <TouchableOpacity style={styles.box} >
   <Text style={styles.header}>{previousDate}</Text>
           <Text style={styles.header}>Rs.09/Quintal</Text>
           <Text style={styles.header}>
              <Icon name="arrow-down" size={20} color="red" />
            </Text>
   </TouchableOpacity>

      </View>
      </SafeAreaView>
  );
};

export default PaddyScreen;

const styles = StyleSheet.create({
    box:{
      backgroundColor : '#F4F4F4',
      margin: 10,
      marginTop:10,
      borderColor: "#C4C4C4",
      width: '100%',
      flexDirection :'row',
      height: "10%",
      justifyContent:'center',
      marginBottom:30
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
  });