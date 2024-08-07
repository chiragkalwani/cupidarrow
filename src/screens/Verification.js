import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import Toast from 'react-native-root-toast';

const Verification = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    // Move to the next input field
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    if (code.join('') === '5154') {
      navigation.navigate('UserName');
    } else {
      Toast.show('Invalid OTP. Please enter 5154 OTP sent to your phone.', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  };

  const handleResendCode = () => {
    setCode(['', '', '', '']);
    inputs.current[0].focus();
    // Add your resend OTP logic here
    console.log('Resend Code');
  };

  return (
    <SafeAreaView className="flex-1 px-2">
      <StatusBar />
      <ProgressBar step={2} steps={5} />
      <Text className="text-black font-semibold text-2xl text-center">
        Verification Code
      </Text>
      <Text className="text-[#333] text-sm text-center mt-2 mb-6">
        Please enter code we just sent to +91 99282 77633
      </Text>
      <View className="flex-row justify-center  gap-3">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            className="w-14 h-14 bg-white rounded-full text-center"
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            ref={(el) => (inputs.current[index] = el)}
          />
        ))}
      </View>
      <TouchableOpacity className="mt-6 mb-3" onPress={handleResendCode}>
        <Text className="text-black text-center">Didn't receive OTP? <Text className="text-[#FF5069]">Resend Code</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#FF5069] p-2 py-4 rounded-full mt-3"
        onPress={handleVerify}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Verify
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Verification;
