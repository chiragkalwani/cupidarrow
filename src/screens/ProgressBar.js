import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose any icon from the Ionicons set

const ProgressBar = ({ step, steps }) => {
  const progress = (step / steps) * 100;
  const navigation = useNavigation();

  return (
    <View className="w-full p-2 bg-gray-100 items-center flex-row mt-2 mb-12">
      <TouchableOpacity onPress={() => navigation.goBack()} className="ml-2">
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="flex-1 mx-2">
        <View className=" h-2 bg-gray-300 rounded overflow-hidden mb-2 w-2/5 mx-auto">
          <View className="h-full bg-[#FF5069]" style={{ width: `${progress}%` }} />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
