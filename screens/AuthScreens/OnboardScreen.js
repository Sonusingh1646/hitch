
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = (...props) => (
	<TouchableOpacity
		style={{marginHorizontal:20}}
		{...props}
		>
		<Text>Skip</Text>
		</TouchableOpacity>


);

const Next = (...props) => (
	<TouchableOpacity
		style={{marginHorizontal:50}}
		{...props}
		>
		<Text>Next</Text>
		</TouchableOpacity>


);

const Done = (...props) => (	
	<TouchableOpacity
		style={{marginHorizontal:30}}
		{...props}
		>
		<Text>Done</Text>
		</TouchableOpacity>


);

const Onboard = ({navigation}) => {

	return (
		  <Onboarding
		    //SkipButtonComponent ={Skip}
		    //NextButtonComponent ={Next}
		    //DoneButtonComponent ={Done}
		    onSkip={() => navigation.navigate("Welcome")}
		  
		    onDone={() => navigation.navigate("Welcome")}
		    pages={[
		      {
		        backgroundColor: '#fff',
		        image: <Image source={require('../../assets/backgrounds/back2.jpg')} />,
		        title: 'Onboarding',
		        subtitle: 'Done with React Native Onboarding Swiper',
		      },
		      {
		        backgroundColor: '#fe6e58',
		        image: <Image source={require('../../assets/backgrounds/back2.jpg')} />,
		        title: 'The Title',
		        subtitle: 'This is the subtitle that sumplements the title.',
		      },
		      {
		        backgroundColor: '#999',
		        image: <Image source={require('../../assets/backgrounds/back.jpg')} />,
		        title: 'Triangle',
		        subtitle: "Beautiful, isn't it?",
		      },
		    ]}
		  />
	);
}

export default Onboard;