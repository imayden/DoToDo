import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { LinearGradient } from 'expo-linear-gradient';


const ToastManager = () => (
  <Toast 
    config={{
      error: (internalState) => (
        <View style={styles.toastWrapper}>
                <LinearGradient
                    colors={['#06D8AD', '#0ABBB5']}
                    style={styles.toastContent}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />
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
    borderRadius: 10,
    marginRight: 10,
  },
  toastLayer: {
    zIndex: 9999,
  },
});

export default ToastManager;
