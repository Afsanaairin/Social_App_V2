import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, ScrollView,Button,Image,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) =>(
  <TouchableOpacity style={{marginHorizontal:10}}
  {...props}
  >
    <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) =>(
  <TouchableOpacity style={{marginHorizontal:10}}
  {...props}
  >
    <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) =>(
  <TouchableOpacity style={{marginHorizontal:10}}
  {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#fdeb93',
            image: <Image style={styles.img} source={require('../../assets/Onboarding_image_1.png')} />,
            title: 'Welcome to Instacity',
            subtitle: 'Gram theke shohore!!',
          },
          {
            backgroundColor: '#d4b9d4',
            image: <Image style={styles.img2} source={require('../../assets/Onboarding_image_2.png')} />,
            title: 'Share Your Favourites',
            subtitle: 'Share your thoughts with similar kind of people',
          },
          {
            backgroundColor: '#e9bcbe',
            // image: <Image source={require('../assets/icon.png')} />,
            title: 'Become the star',
            subtitle: 'Let the spotlight capture you',
          },
          
        ]}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      height: 200,
      width: 200,
    },
    img2:{
      height: 200,
      width: 200,
    },
    
});

export default OnboardingScreen;