import react from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Thing = (props) => {

    return (
        <View style={styles.item}>

            <View style={styles.itemL}>
                {/* Icon of the thing component */}
                {/* <TouchableOpacity style={styles.square}></TouchableOpacity> */}
                <View style={styles.square}></View>
                {/* Text content of the thing task */}
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            
            {/* Circular check-box */}
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 50,
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
    square: {
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
    circular: {
        width: 16,
        height: 16,
        borderColor: '#3EB489',
        borderRadius: 50,
        borderWidth: 2,
    },

});

export default Thing;