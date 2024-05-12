import { AnimatedBox, Box, Text } from '@/utils/theme';
import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CategoriesNavigationType } from '@/navigation/types';
import { FadeInRight, FadeInLeft } from 'react-native-reanimated';
type CategoryProps = {
  category: ICategory;
};

const Category = ({ category }: CategoryProps) => {
  const navigation = useNavigation<CategoriesNavigationType>();
  const navigateToCreateCategory = () => {
    navigation.navigate('CreateCategory', {
      category: category,
    });
  };

  const navigateToCategoryScreen = () => {
    navigation.navigate('Category', {
      id: category._id,
    });
  };

  return (
    <AnimatedBox entering={FadeInRight} exiting={FadeInLeft}>
      <Pressable onPress={navigateToCategoryScreen}>
        <Box
          bg="lightGray"
          borderRadius="rounded-5xl"
          height={60}
          flexDirection="row"
          alignItems="center"
          p="4"
        >
          <Box
            flex={1}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Text variant="textBase" fontWeight="600" mr="3">
                {category.icon.symbol}
              </Text>
              <Text variant="textBase" fontWeight="600">
                {category.name}
              </Text>
            </Box>
            <Box
              ml="auto"
              width={20}
              height={20}
              alignItems="center"
              justifyContent="center"
            >
              <Pressable onPress={navigateToCreateCategory}>
                <Entypo name="dots-three-vertical" size={16} />
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Pressable>
    </AnimatedBox>
  );
};

export default Category;
