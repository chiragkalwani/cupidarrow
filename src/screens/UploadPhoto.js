import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import ProgressBar from './ProgressBar';

const UploadPhoto = () => {
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotos([...photos, ...result.assets]);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-2">
      <StatusBar />
      <ProgressBar step={5} steps={5} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-black font-semibold text-2xl text-center">
          Upload Your Photo
        </Text>
        <Text className="text-[#333] text-sm text-center my-2">
          We'd love to see you. Upload a photo for your dating journey.
        </Text>
        <View className="flex flex-row flex-wrap mt-4 mx-auto align-middle justify-center">
          <View className="w-[210px] h-[210px] mb-4 mr-4">
            {photos[0] ? (
              <Image
                source={{ uri: photos[0].uri }}
                className="w-full h-full rounded-lg"
              />
            ) : (
              <TouchableOpacity
                className="border border-gray-300 rounded-lg w-full h-full justify-center items-center"
                onPress={pickImage}
              >
                <Text className="text-[#FF5069] text-4xl">+</Text>
              </TouchableOpacity>
            )}
          </View>
          <View className="grid grid-cols-3 gap-2">
            {[...Array(2)].map((_, index) => (
              photos[index + 1] ? (
                <Image
                  key={index}
                  source={{ uri: photos[index + 1].uri }}
                  className="w-[100px] h-[100px] m-2 rounded-lg"
                />
              ) : (
                <TouchableOpacity
                  key={index}
                  className="border border-gray-300 rounded-lg w-[100px] h-[100px] m-2 justify-center items-center"
                  onPress={pickImage}
                >
                  <Text className="text-[#FF5069] text-4xl">+</Text>
                </TouchableOpacity>
              )
            ))}
          </View>
          <View className="flex flex-row gap-2">
            {[...Array(3)].map((_, index) => (
              photos[index + 1] ? (
                <Image
                  key={index}
                  source={{ uri: photos[index + 1].uri }}
                  className="w-[100px] h-[100px] m-2 rounded-lg"
                />
              ) : (
                <TouchableOpacity
                  key={index}
                  className="border border-gray-300 rounded-lg w-[100px] h-[100px] m-2 justify-center items-center"
                  onPress={pickImage}
                >
                  <Text className="text-[#FF5069] text-4xl">+</Text>
                </TouchableOpacity>
              )
            ))}
          </View>
        </View>
        <TouchableOpacity
          className="bg-[#FF5069] p-2 py-4 rounded-full mt-3"
          onPress={() => console.log('Finish Registration')}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadPhoto;
