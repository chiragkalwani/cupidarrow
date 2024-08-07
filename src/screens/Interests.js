import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component

// Define icons for each interest
const interestIcons = {
  Reading: 'book',
  Photography: 'camera-alt',
  Gaming: 'gamepad',
  Music: 'music-note',
  Travel: 'flight',
  Painting: 'brush',
  Politics: 'public',
  Charity: 'volunteer-activism',
  Cooking: 'restaurant',
  Pets: 'pets',
  Sports: 'sports',
  Fashion: 'style'
};

const interests = Object.keys(interestIcons);

const Interests = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params;
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleContinue = () => {
    if (selectedInterests.length < 3) {
      alert('Please select at least three interests.');
    } else {
      navigation.navigate('UploadPhoto', { userName, selectedInterests });
    }
  };

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  return (
   
    <SafeAreaView className="flex-1 px-2 bg-[#FFF7F8]-to-[#FFEBEE]">
      <StatusBar />
      <ProgressBar step={4} steps={5} />
      <Text className="text-black font-semibold text-2xl text-center">
        Hey {userName}, Please Select Up To 3 Interests
      </Text>
      <Text className="text-[#333] text-sm text-center my-2">
        Tell us what piques your curiosity and passions
      </Text>
      <View className="flex-row flex-wrap justify-center mt-4">
        {interests.map((interest, index) => (
          <TouchableOpacity
            key={index}
            className={`border rounded-full p-3 m-1 ${selectedInterests.includes(interest) ? 'border-[#FF5069] bg-[#FF5069]' : 'border-[#d1d5db] bg-white'}`}
            onPress={() => toggleInterest(interest)}
          >
            <View className="flex-row items-center">
              <Icon
                name={interestIcons[interest]}
                size={20}
                color={selectedInterests.includes(interest) ? 'white' : '#FF5069'}
                style={{ marginRight: 8 }}
              />
              <Text className={`${selectedInterests.includes(interest) ? 'text-white' : 'text-black'}`}>
                {interest}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        className="bg-[#FF5069] p-4 rounded-full mt-3"
        onPress={handleContinue}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Interests;
