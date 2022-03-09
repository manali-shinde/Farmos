import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

import 'react-native-gesture-handler';


// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CropCalendar = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
     
        <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box}   onPress={() => navigation.navigate('Wheat')}>
              <Image
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyibu5FYyNTgI40SvxBsZOBNeqN9zMwQs6OA&usqp=CAU'}}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}> Wheat</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Rice')} >
                  <Image
            source={require('./MainCrops/CropsImages/rice.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}>Rice</Text>
            </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Potato')}>
                  <Image
            source={{uri:'https://www.latiaagribusinesssolutions.com/wp-content/uploads/2018/02/potato-farming-in-Kenya-1600x800.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}>Potato</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Cotton')}>
                  <Image
            source={{uri:'https://media.fashionnetwork.com/m/f965/bf23/e7df/a629/b2c7/f827/5071/718c/de44/ea65/ea65.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Cotton</Text>
            </TouchableOpacity>
        </View>
    
    </SafeAreaView>
  );
};

const CropCalendarScreen = () => {
  return (
      <Stack.Navigator initialRouteName="CropCalendar">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="CropCalendar"
          component={CropCalendar}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Wheat"
          component={WheatScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Rice"
          component={RiceScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Potato"
          component={PotatoScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Cotton"
          component={CottonScreen}
          options={{headerShown: true}}
        />
        
      </Stack.Navigator>
  );
};

export default CropCalendarScreen;

const WheatScreen = ({ navigation }) => {
  return (
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff', marginBottom:10}}>
    <Image
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyibu5FYyNTgI40SvxBsZOBNeqN9zMwQs6OA&usqp=CAU'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={{fontSize: 25, margin: 5,textAlign: 'center',fontWeight:"bold" }}>
         Wheat
        </Text>
        <Card>
         <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>Wheat occupies the prime position among the food crops in the world.
           In India, it is the second important food crop being next to rice and contributes to the total foodgrain production of the country to the extent of about 25%.{'\n'}
           Type of Crop: Rabi
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Wheat is grown in a variety of soils of India. Soils with a clay loam or loam texture, 
             good structure and moderate water holding capacity are ideal for wheat cultivation.
              Care should be taken to avoid very porous and excessively drained oils.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>
               Best sowing time for wheat plantation is from late October to December.
               There may be slight variation for each region.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type: Sprinkler</Text>
            <Text style={styles.txt1}>Water Requirement: 450 - 650 mm{'\n'}Generally, 6 irrigation are needed to get good yield of wheat. It should be done in the following stages- {'\n'}
                I  - Crown root initiation stage : 20-25 days{'\n'}
                II - Tillering stage : 40-45 days{'\n'}   
                III - Jointing stage : 60-65 days{'\n'}
                IV - Flowering stage : 80-85 days{'\n'}
                V - Milking stage : 100-105 days{'\n'}
                VI - Dough stage : 115-120 days
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
             The rain-fed crop reaches the harvest stage much earlier than the irrigated crop. 
             The crop is harvested when the grains become hard and the straw becomes dry and brittle.
             The harvest begins from February and can last until end April.
             The harvesting is mostly done by sickle.
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};

const PotatoScreen = ({ navigation }) => {
  return (
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff', marginBottom:10}}>
    <Image
            source={{uri:'https://www.latiaagribusinesssolutions.com/wp-content/uploads/2018/02/potato-farming-in-Kenya-1600x800.jpg'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={{fontSize: 25, margin: 5,textAlign: 'center',fontWeight:"bold" }}>
         Potato
        </Text>
        <Card>
         <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>Potato is the most important food crop of the world. Potato is a temperate crop grown under subtropical conditions in India. The potato is a crop which has always been the 'poor man's friend'. 
          Potato is being cultivated in the country for the last more than 300 years.{'\n'}
          Type of Crop: Rabi
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Loamy and sandy loam soils, rich in organic matter with good drainage and aeration are most suitable for cultivation of potato crop. 
            The soil with pH range of 5.2-6.4 is considered to be ideal.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>Best time of planting is when maximum and minimum temperature is from 30-32 °C and 18-20 °C respectively.
               The sowing time of potato is from October to December.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type: Sprinkler</Text>
            <Text style={styles.txt1}>Water Requirement: 500 - 700 mm{'\n'}Depending soil moisture present in soil, irrigate field immediately or 2-3 days after planting. Light and frequent irrigation gives best result, avoid flood irrigation as it will cause rot disease.
             For medium to heavy soils, three to four irrigation is required whereas for sandy soils, 8-12 irrigation are necessary.
             Second irrigation should be done within 30-35days after planting depending on soil moisture. 
            Remaining irrigation should be given as per requirement of soil and crop need. 
            Stop irrigation 10-12 days before harvesting.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
            The best Harvesting time of potato is 75-120 days after planting, depending on the area of sowing, soil type and variety. 
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};

const RiceScreen = ({ navigation }) => {
  return (
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff', marginBottom:10}}>
    <Image
            source={{uri:'https://world-crops.com/wp-content/uploads/038-Rice-field.jpg'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={{fontSize: 25, margin: 5,textAlign: 'center',fontWeight:"bold" }}>
         Rice
        </Text>
        <Card>
         <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population.
          Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population.
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>It can be grown on a variety of soils with low permeability and pH varying from 5.0 to 9.5. 
            Sandy loam to loamy sand to silty loam to clay loams, silty to clayey loam soils with low permeability, free of water logging and sodicity are considered best for paddy cultivation.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>
              Kharif Crop: July to August{'\n'}
              Rabi Crop: September to November{'\n'}
              Summer Crop: January to April
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type</Text>
            <Text style={styles.txt1}>Water Requirement: 900 - 2500 mm{'\n'}Rice is traditionally cultivated through flood irrigation and consumes 85% of the water used in agriculture.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
              Kharif Crop: October to December{'\n'}
              Rabi Crop: December to January{'\n'}
              Summer Crop: May to June
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};

const CottonScreen = ({ navigation }) => {
  return (
    <ScrollView  style={{flex: 1, backgroundColor:'#ffff', marginBottom:10}}>
    <Image
            source={{uri:'https://media.fashionnetwork.com/m/f965/bf23/e7df/a629/b2c7/f827/5071/718c/de44/ea65/ea65.jpg'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={{fontSize: 25, margin: 5,textAlign: 'center',fontWeight:"bold" }}>
         Cotton
        </Text>
        <Card>
          <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>Cotton is one of the most important fiber and cash crop of India and plays a 
            dominant role in the industrial and agricultural economy of the country. Cotton is a Kharif crop in the major parts of the 
            country viz. Punjab, Haryana, Rajasthan, Uttar Pradesh, Madhya Pradesh, Gujarat, 
            Maharashtra and parts of Andhra Pradesh & Karnataka. It provides the basic raw material (cotton fibre) to cotton textile industry. 
          </Text>
          <View style={styles.headerLine} />
          <Text style={styles.head}>Soil</Text>
          <Text style={styles.txt1}>Cotton is grown on a variety of soils ranging from well drained deep alluvial soils 
                      in the north to black clayey soils of varying depth in central region and in black and mixed black and red soils in south zone. 
                      Cotton is semi-tolerant to salinity and sensitive to water logging.
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>
            The sowing season of cotton varies considerably from tract to tract and is generally early (April-May) in northern India and 
            is delayed as we proceed to down south(monsoon based in southern zone). 
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type</Text>
            <Text style={styles.txt1}>Water Requirement: 700 - 1300 mm{'\n'}The water requirement is low during first
                60-70 days after sowing & highest during flowering & boll development.
                Cotton is commonly flood irrigated although irrigation by furrow or alternate 
                furrow method is more effective and water saving. Drip irrigation is becoming popular 
                particularly in the hybrids for central and southern zones.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
            Harvest begins in October in northern India and typically continues until January in the rest of the country.
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};




const styles = StyleSheet.create({
  box:{
    color: '#000',
    backgroundColor : '#ffff',
    padding : 6,
    fontSize: 13,
    margin: 6,
    width: 185,
    alignItems:'center',
    marginBottom:10,
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius:10
  },
  cropimage:{
    width: "100%",
    height: 160,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  txt:{
    fontSize:20,
    color:'#000'
  },
  headerLine: {
    height: 2,
    marginHorizontal: 0,
    backgroundColor: 'black',
    marginTop: 2,
    marginBottom:2
  },
  txt1:{
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10, 
    textAlign:"justify"
  },
  head:{
    fontSize: 15,
    margin: 5,
    fontWeight:"bold"
  }

})