import { StyleSheet, Image, View, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { router } from 'expo-router'

const SearchBar = ({ placeholder, onPress }: { placeholder: string, onPress: () => void }) => {
  return (
    <View className="flex-row item-center bg-black/20 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5 mt-3" resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        className="flex-1 text-white ml-2"
        value= ""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})