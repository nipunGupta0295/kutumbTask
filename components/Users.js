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

const Shimmer = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            {arr.map((item) => {
                return <UserShimmerCard />
            })}
        </>
    )
}

function Users() {

    const [userData, setUserData] = useState(data);
    const [refreshing, setRefreshing] = useState(false);
    const [fetchError, setfetchError] = useState(false);
    const [loading, setLoading] = useState(false);
    const unique = [...new Set(userData.map(item => item.language))];
    const grouped = groupBy(userData, user => user.language)

    const handleRefresh = () => {
        handleApi();
    }

    const handleApi = () => {
        setLoading(true);
        console.log("api");
        axios({
            method: "GET",
            url: "https://ghapi.huchen.dev/repositories",
        })
            .then((response) => {
                console.log(response);
                setUserData(response.data);
                setfetchError(false);
                setTimeout(() => {
                    setLoading(false);
                }, 2000)

            })
            .catch((err) => {
                console.log(err);
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
                //setfetchError(true);
            })
    }

    useEffect(() => {
        handleApi();
    }, [])

    return (
        <>
            {loading ? <Shimmer /> :
                <>
                    {fetchError ? <Error apifunc={handleApi} /> :
                        <>
                            {unique.map((item) => {
                                const group = grouped.get(item);
                                return (
                                    <>
                                        <View style={{ backgroundColor: group[0].languageColor, height: 40, justifyContent: "center", paddingLeft: 10 }}>
                                            <Text>{item}</Text>
                                        </View>
                                        <View>
                                            <FlatList
                                                data={group}
                                                renderItem={(item) => <User item={item} />}
                                                keyExtractor={item => item.author}
                                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                                            />
                                        </View>
                                    </>
                                )
                            })}
                        </>
                    }

                </>}

        </>

    );
}

export default Users;
