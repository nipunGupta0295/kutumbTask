import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, RefreshControl, StyleSheet, View, Text } from 'react-native';
import User from './User';
import data from './data';
import Error from './Error';
import UserShimmerCard from './ShimmerCard';

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

const styles = StyleSheet.create({
    groupTitle: {

    }
})

function Users() {

    const [userData, setUserData] = useState(data);
    const [refreshing, setRefreshing] = useState(false);
    const [fetchError, setfetchError] = useState(false);
    const unique = [...new Set(userData.map(item => item.language))];
    console.log("un", unique);
    const grouped = groupBy(userData, user => user.language)
    console.log("Grouped Array Items : ", grouped)

    const handleRefresh = () => {
        console.log("ref");
    }

    const handleApi = () => {
        console.log("api");
        axios({
            method: "GET",
            url: "https://ghapi.huchen.dev/repositories",
        })
            .then((response) => {
                console.log(response);
                setUserData(response.data);
                setfetchError(false);
            })
            .catch((err) => {
                console.log(err);
                //setfetchError(true);
            })
    }

    useEffect(() => {
        handleApi();
    }, [])

    return (
        <>
            {fetchError ? <Error apifunc={handleApi} /> :
                <>
                    {unique.map((item) => {
                        const group = grouped.get(item);
                        console.log("group", group);
                        console.log("color", group[0].languageColor)
                        return (
                            <>
                                <View style={{ backgroundColor: group[0].languageColor, height: 40, justifyContent: "center", paddingLeft: 10 }}>
                                    <Text>{item}</Text>
                                </View>
                                <FlatList
                                    data={group}
                                    renderItem={(item) => <User item={item} />}
                                    keyExtractor={item => item.author}
                                    refreshControl={<RefreshControl refreshing={refreshing} />}
                                />
                            </>
                        )
                    })}
                </>
                // <UserShimmerCard />}
            }

        </>

    );
}

export default Users;
