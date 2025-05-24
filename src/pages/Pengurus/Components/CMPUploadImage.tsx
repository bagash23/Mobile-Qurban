/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonts from '../../../utils/fonts';

interface IProps {
    filename: string;
    uri: string
    onPressImagePicker?: () => void;
}

const CMPUploadImage = ({filename, uri, onPressImagePicker}: IProps) => {
  return (
    < >
        {filename.length > 0 ? (
            <TouchableOpacity onPress={onPressImagePicker} style={styels.container} >
                <Image source={{uri: uri ?? ''}} style={styels.image} />
                <Text style={[styels.text, {maxWidth: 200}]} >{filename}</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styels.container} onPress={onPressImagePicker} >
                <Entypo name="images" size={20} />
                <Text style={styels.text} >Uplaod Gambar Anda!</Text>
            </TouchableOpacity>
        )}
      <Text />
    </>
  );
};

const styels = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 16,
        paddingVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        fontFamily: Fonts.medium.fontFamily,
        fontSize: 12,
    },
});

export default CMPUploadImage;
