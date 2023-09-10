import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';


const ToastManager = () => (
  <Toast 
    config={{
      error: (internalState) => (
        <View style={styles.toastWrapper}>
          <View style={styles.toastContent} />
          <Text>{internalState.text1}</Text>
        </View>
      ),
    }} 
    style={styles.toastLayer} 
    visibilityTime={3000} 
    autoHide 
    hideOnPress 
  />
);

const styles = StyleSheet.create({
  toastWrapper: {
    height: 60, 
    backgroundColor: 'white', 
    borderRadius: 20, 
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  toastContent: {
    width: 20,
    height: 20,
    backgroundColor: '#3EB489',
    borderRadius: 10,
    marginRight: 10,
  },
  toastLayer: {
    zIndex: 9999,
  },
});

export default ToastManager;
