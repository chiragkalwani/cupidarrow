import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class Login extends Component {
    render() {
        const { navigation } = this.props; // Access navigation prop

        return (
            <SafeAreaView className="flex-1 px-2">
                <StatusBar />
                <View className="mx-auto my-5">
                    <Image
                        source={require('../../assets/logo.png')}
                        className="h-auto object-cover"
                    />
                </View>
                <View className="">
                    <Image
                        source={require('../../assets/intro-img.png')}
                        className="h-auto"
                    />
                </View>
                <Text className="text-black font-semibold text-2xl text-center">
                    Discover Love where your story begins.
                </Text>
                <Text className="text-[#333] text-sm text-center my-5">
                    Join us to discover your ideal partner and ignite the sparks of romance in your journey.
                </Text>
                <TouchableOpacity
                    className="bg-[#FF5069] p-4 rounded-full flex flex-row items-center"
                    onPress={() => navigation.navigate('Register')} // Use navigation prop
                >
                    <View className="bg-white rounded-full p-2 ">
                        <Icon name="phone" size={24} color="#FF5069" />
                    </View>
                    <Text className="text-white text-lg font-semibold flex-1 text-center">
                        Login with Phone
                    </Text>
                </TouchableOpacity>

                <Text className="text-black text-center mt-5">
                    Don’t have an account?
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text className="text-[#FF5069] ml-1 font-semibold -mb-1 underline border-dashed">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Text>
            </SafeAreaView>
        );
    }
}
