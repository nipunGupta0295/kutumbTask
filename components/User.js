import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, RefreshControl, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import fork from '../assets/images/code.png'
import star from '../assets/images/star.png'
const styles = StyleSheet.create({
    userComponent: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        marginRight: 10,
        paddingRight: 100,
        borderColor: "lightgrey",
        borderBottomWidth: 1
    },
    imgContainer: {
        padding: 20
    },
    img: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 30
    },
    userdetails: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingStart: 10,
        paddingEnd: 20

    },
    reponametext: {
        fontWeight: 'bold',
    },
    github: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    forkcon: {
        flexDirection: "row",
        marginRight: 9,
        alignItems: "center",
    },
    fork: {
        width: 19,
        height: 19,
        marginRight: 2
    },
    starcon: {
        flexDirection: "row",
        marginRight: 9,
        alignItems: "center",
    },
    star: {
        width: 19,
        height: 19,
        marginRight: 3,
    },
    langcon: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 9
    }
})
function User({ item }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <>
            <Pressable onPress={handleOpen} style={styles.userComponent} underlayColor={'gray'}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{
                        uri: item.item.avatar,
                    }} />
                </View>
                <View style={styles.userdetails}>
                    <View style={styles.username}><Text style={styles.usernametext}>{item.item.author}</Text></View>
                    <View style={styles.reponame}><Text style={styles.reponametext}>{item.item.name}</Text></View>

                    {open ? <View style={styles.extradetails}>
                        <View style={styles.description}><Text style={styles.descriptionText}>{item.item.description}</Text></View>
                        <View style={styles.github}>
                            <View style={styles.langcon}><View style={{ width: 14, height: 14, backgroundColor: item.item.languageColor, borderRadius: 7, marginRight: 2 }}></View><Text>{item.item.language}</Text></View>
                            <View style={styles.forkcon}><Image style={styles.star} source={star} /><Text>{item.item.stars}</Text></View>
                            <View style={styles.starcon}><Image style={styles.fork} source={fork} /><Text>{item.item.forks}</Text></View>
                        </View>
                    </View> : <></>}
                </View>
            </Pressable>
        </>
    );
}

export default User;
