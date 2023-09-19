import AppHeader from '@/components/AppHeader';
import {Layout} from '@/theme';
import {GenericNavigation} from '@/types/Navigation';
import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen = (props: GenericNavigation) => {
  return (
    // <SafeAreaView style={Layout.fill}>
    <AppHeader title="Pop Movies" onMorePress={() => {}} />
    // </SafeAreaView>
  );
};

export default HomeScreen;
