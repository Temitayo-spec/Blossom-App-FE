import React from 'react';
import { Box, Text } from '@/utils/theme';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import useSWR from 'swr';
import { fetcher } from '@/services/config';
import { Loader } from '@/components/shared/spinner';
import { FlatList } from 'react-native';
import Category from '@/components/categories/category';
import CreateNewList from '@/components/categories/create-new-list';

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategoryExtended>(
    'categories/',
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  const renderItem = ({ item }: { item: ICategory }) => {
    console.log(item);
    return <Category key={item._id} category={item} />;
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" pt="13">
        <Text variant="textXl" mb="10">
          Categories
        </Text>
        <Box justifyContent="space-between" flex={1} pb="6">
          {data && (
            <FlatList
              data={data.categories}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <Box height={14} />}
              showsVerticalScrollIndicator={false}
            />
          )}
          <CreateNewList />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoriesScreen;
