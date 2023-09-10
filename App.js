import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Thing from './components/Thing';
import { BlurView } from '@react-native-community/blur';

export default function App() {

  // Set up the thing-task state hook
  const [thing, setThing] = useState();
  const [thingItems, setThingItems] = useState([]);

  const handleAddThing = () => {
    Keyboard.dismiss();
    setThingItems([...thingItems, thing]);
    setThing(null);
  }
   
  const finishThing = (index) => {
    let itemsCopy = [...thingItems];
    // Remove 1 item from the array
    itemsCopy.splice(index, 1);
    // Save the changde to the array
    setThingItems(itemsCopy);
  }

  return (
    <View style={styles.container}>


        {/* ThingsTodo */}
        <View style={styles.thingsWrapper}>
          <Text style={styles.sectionTitle}>
            Things Today
            </Text>

            <ScrollView
              contentContainerStyle={{
              flexGrow: 1
              }}
              keyboardShouldPersistTaps='handled'
            >

              <View style={styles.items}>
                {/* There will be the detials of the things to do */}
                {
                  thingItems.map((item, index) => {
                    return (
                      <TouchableOpacity 
                      key={index} 
                      onPress={() => finishThing(index)}>
                        <Thing text={item}/>
                      </TouchableOpacity>
                      )
                  })
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
            value={thing} 
            onChangeText={text => setThing(text)}/>

          <TouchableOpacity onPress={() => handleAddThing()}>

            <View style={styles.addWrapper}>
              <Text style={styles.addText}> + </Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
        <View style={styles.navigationBar} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  thingsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  items: {
    marginTop: 30,
  },

  writeThingWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
    
  },
  navigationBar: {
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor: '#E1E1E1',
    bottom: 0,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    width: 280,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#3EB489',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: 18,
  },
  addText: {
    color: '#FFFFFF',
  },
});

