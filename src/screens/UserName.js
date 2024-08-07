import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const UserName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleContinue = () => {
    if (name.trim() === '') {
      alert('Please enter your name.');
    } else {
      navigation.navigate('Interests', { userName: name });
    }
  };

  return (
    <SafeAreaView className="flex-1 px-2">
      <StatusBar />
      <ProgressBar step={3} steps={5} />
      <Text className="text-black font-semibold text-2xl text-center">
        What's Your Name?
      </Text>
      <Text className="text-[#333] text-sm text-center my-2">
        Let's Get to Know Each Other
      </Text>
      <TextInput
        className={`border rounded-full p-3.5 my-2 ${isFocused ? 'border-[#FF5069]' : 'border-[#d1d5db]'} bg-white`}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
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

export default UserName;
