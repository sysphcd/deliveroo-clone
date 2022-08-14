import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={{
                    uri: imgUrl,
                }}
          // style={{ height: 80, width: 80, borderRadius: 10}} 
          className="h-20 w-20 rounded"
        />
        <Text 
        // style={{ position: 'absolute', color:'white', fontWeight:"bold" }}
        className="absolute bottom-1 left-1 text-white font-bold">
          {title}
        </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;