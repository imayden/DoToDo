import react from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Thing = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemL}>
                {/* Icon of the thing component */}
                <LinearGradient
                    colors={['#06D8AD', '#0ABBB5']}
                    style={styles.icon}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />
                {/* Text content and timestamp container */}
                <View>
                    {/* Text content of the thing task */}
                    <Text style={styles.itemText}>{props.text.text}</Text>
                    {/* Timestamp */}
                    <Text style={styles.timestamp}>{props.text.timestamp}</Text>
                </View>
            </View>
            
            {/* Circular check-box */}
            <TouchableOpacity onPress={props.onDelete}>
                <View style={styles.circularOuter}>
                    <LinearGradient
                        colors={['#06D8AD', '#0ABBB5']}
                        style={styles.circular}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <View style={styles.circularInner}>
                            <Text style={styles.checkbox}>✓</Text>
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemL: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    icon: {
        width: 24,
        height: 24,
        backgroundColor: '#0ABBB5',
        opacity: 0.4,
        borderRadius: 50,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },

    timestamp: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5, 
    },

    circularOuter: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circular: {
        width: 24,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularInner: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        color: '#06D8AD',
        fontWeight: 'bold',
    },

});

export default Thing;

