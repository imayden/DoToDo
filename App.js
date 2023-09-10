import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Thing from './components/Thing';
import { BlurView } from '@react-native-community/blur';

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
                          <Text style={styles.emptyMessageText}>Yay! You Finished Everything Today!</Text>
                      </View>
                    ) : (
                      thingItems.map((item, index) => {
                        return (
                          <Thing 
                            key={index} 
                            text={item}
                            onDelete={() => finishThing(index)} // 这里传递删除功能
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
            value={thing} 
            onChangeText={text => setThing(text)}/>

          <TouchableOpacity onPress={() => handleAddThing()}>

            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
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
    justifyContent: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  dateText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },

  items: {
    marginTop: 30,
  },

  emptyMessageWrapper: {
    flex: 1,
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessageText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 40, 
    // backgroundColor: '#3EB489',
    bottom: '5%',
    left: '1%',
  },

  


});

