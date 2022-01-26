import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import img from '../assets/images/error.jpg'

const styles = StyleSheet.create({
    imgContainer: {
        height: 500,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 370,
        height: 400,
        resizeMode: "center"
    },
    text1con: {
        alignItems: 'center',

    },
    text1: {
        fontWeight: '700',
        fontSize: 20,
    },
    text2con: {
        padding: 10
    },
    text2: {
        color: "grey"
    },
    btn: {
        width: 300,
        height: 50,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: "center",
        alignItems:"center"
    },
    btnouter:{
        height: 240,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    btntxt: {
        color: 'green'
    }
})

function Error(props) {
    return (
        <View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={img} />
                <View style={styles.text1con}><Text style={styles.text1}>Something went wrong...</Text></View>
                <View style={styles.text2con}><Text style={styles.text2}>An alien probably blocking your signal</Text></View>
            </View>
            <View style={styles.btnouter}>
                <TouchableOpacity onPress={() => props.apifunc()} style={styles.btn}>
                    <Text style={styles.btntxt}>RETRY</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Error;
