import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import ProgressBar from './ProgressBar';

const Register = () => {
  const navigation = useNavigation();
  const phoneInput = React.useRef(null);

  return (
    <SafeAreaView className="flex-1 px-2">
      <StatusBar />
      <ProgressBar step={1} steps={5} />
      <Text className="text-black font-semibold text-2xl text-center">
        My Number Is
      </Text>
      <Text className="text-[#333] text-sm text-center my-2">
        We'll need your phone number to send an OTP for verification.
      </Text>
      <PhoneInput
        ref={phoneInput}
        defaultCode="IN"
        layout="first"
        onChangeFormattedText={text => console.log(text)}
        containerStyle={{ borderWidth: 1, borderColor: '#d1d5db', borderRadius: 30, width: '100%', overflow: 'hidden' }}
        textContainerStyle={{ backgroundColor: 'white' }}
        textInputStyle={{ fontSize: 16 }}
        codeTextStyle={{ fontSize: 16 }}
      />
      <TouchableOpacity
        className="bg-[#FF5069] p-2 py-4 rounded-full mt-3"
        onPress={() => navigation.navigate('Verification')}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
