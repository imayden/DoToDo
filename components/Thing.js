import react from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Thing = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemL}>
                {/* Icon of the thing component */}
                <View style={styles.icon}></View>
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
                <View style={styles.circular}>
                    <Text style={styles.checkbox}>✓</Text>
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
        backgroundColor: '#3EB489',
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

    circular: {
        width: 24,
        height: 24,
        borderColor: '#3EB489',
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        color: '#3EB489',
        fontWeight: 'bold',
    },

});

export default Thing;

