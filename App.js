/**
 * Project Name: ThingsToday
 * Developer: Ayden Deng
 * Email: ayden.yiming.deng@gmail.com
 * Website: https://imayden.com
 * GitHub Repository: https://github.com/imayden/ThingsToday.git
 *
 * Copyright (c) 2023 Ayden Deng. All Rights Reserved.
 */

import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Dimensions, Vibration, Animated } from 'react-native';
import Thing from './components/Thing';
import ToastManager from './components/ToastManager';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';


const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
function RFValue(fontSize) {
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * screenWidth) / standardScreenHeight;
  return Math.round(heightPercent);
}

export default function App() {

  // Set up the thing-task state hook
  const [thing, setThing] = useState();
  const [thingItems, setThingItems] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    setCurrentDate(formattedDate);

  }, []);

  // Haptic Feedback: Input clicked
  const handleInputFocus = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleAddThing = () => {
    Keyboard.dismiss();

    // Haptic Feedback: Thing Added
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    if (thing && thing.trim().length > 0){
      const date = new Date();
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const newItem = {
        text: thing,
        timestamp: formattedDate
      }
      setThingItems([newItem, ...thingItems]);
      setThing(null);
    } else {

      // Vibration Warning: Null Thing to add
      Vibration.vibrate();
      Toast.show({
        type: 'error',
        text1: 'Oops...Write something to do!',
        topOffset: 80,
      });
    }
  }

   
  const finishThing = (index) => {
    let itemsCopy = [...thingItems];
    // Remove 1 item from the array
    itemsCopy.splice(index, 1);
    // Save the changde to the array
    setThingItems(itemsCopy);

    // Haptic Feedback: Thing Finished
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  return (
    <View style={styles.container}>
      

        {/* ThingsTodo */}
        <View style={styles.thingsWrapper}>
          <Text style={styles.sectionTitle}>
            Things Today
          </Text>
          {currentDate && <Text style={styles.dateText}>{currentDate}</Text>}
            <ScrollView
              contentContainerStyle={{
              flexGrow: 1
              }}
              keyboardShouldPersistTaps='handled'
            >
              {/* There will be the detials of the things to do */}
              <View style={styles.items}>
                  {
                    thingItems.length === 0 ? (
                      <View style={styles.emptyMessageWrapper}>
                          <Text style={styles.emptyMessageText}>Good Job! You Finished Everything Today!</Text>
                      </View>
                    ) : (
                      thingItems.map((item, index) => {
                        return (
                            <Thing 
                                key={index} 
                                text={item}
                                onDelete={() => finishThing(index)}
                            />
                        );
                    })
                    )
                  }
              </View>

          </ScrollView>
        </View>
      

      {/* Write a thing to do */}
      {/* padding for iOS, heights for Android */}
      <KeyboardAvoidingView 

        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
        style={styles.writeThingWrapper}>

          <TextInput 
            style={styles.input} 
            placeholder={'Write a thing to do today ...'} 
            selectionColor="#0ABBB5"
            value={thing} 
            onChangeText={text => setThing(text)}
            // Haptic Feedback: Input clicked
            onFocus={handleInputFocus}
          />
            
            <TouchableOpacity onPress={() => handleAddThing()}>
              <LinearGradient
                colors={['#06D8AD', '#0ABBB5']}
                style={styles.addWrapper}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <Text style={styles.addText}>+</Text>
              </LinearGradient>
            </TouchableOpacity>
          
        </KeyboardAvoidingView>
        <View style={styles.navigationBar} />
        
        <ToastManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  thingsWrapper: {
    paddingTop: '15%', 
    paddingHorizontal: '5%', 
    justifyContent: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: RFValue(48), 
    fontWeight: 'bold',
    marginVertical: '2.5%', 
  },
  dateText: {
    fontSize: RFValue(22), 
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: '5%', 
  },
  items: {
    marginTop: '5%',
  },
  emptyMessageWrapper: {
    flex: 1,
    marginTop: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessageText: {
    fontSize: RFValue(28), 
    color: 'rgba(0, 0, 0, 0.5)',
  },
  writeThingWrapper: {
    position: 'absolute',
    bottom: '2.5%', 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  navigationBar: {
    position: 'absolute',
    width: '100%',
    height: '2.5%', 
    backgroundColor: '#EFEFEF',
    bottom: 0,
  },
  input: {
    paddingVertical: height * 0.02, 
    paddingHorizontal: width * 0.04, 
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    width: '70%', 
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#0ABBB5',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: '20%', 
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 40, 
    bottom: '5%',
    left: '1%',
  },
});
