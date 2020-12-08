import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
