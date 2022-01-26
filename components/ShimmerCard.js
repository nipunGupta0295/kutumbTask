import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ContentLoader, { Facebook, Rect, Circle } from 'react-content-loader/native'


const MyLoader = () => (
    <ContentLoader width={"100%"} height={"150%"} viewBox="0 0 400 55" backgroundColor='grey' foregroundColor="lightgrey">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="200" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="300" height="10" />
    </ContentLoader>
)

// const MyLoader = () => (
//     <ContentLoader
//     //   height={140}
//     //   speed={1}
//     //   backgroundColor={'#333'}
//     //   foregroundColor={'#999'}
//       viewBox="0 0 380 70"
//     >
//       {/* Only SVG shapes */}
//       <React x="0" y="0" rx="5" ry="5" width="70" height="70" />
//       <React x="80" y="17" rx="4" ry="4" width="300" height="13" />
//       <React x="80" y="40" rx="3" ry="3" width="250" height="10" />
//     </ContentLoader>
//   )

const UserShimmerCard = (props) => {
    return (
        <View style={styles.container}>
            <MyLoader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'f2f2f4',
        marginTop: 2,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 10,
        paddingTop: 10,
        height: 105
    },
    circle: {
        marginLeft: 15,
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.2,
        borderColor: '#606060',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#edeef1'
    },
    UserData: {
        paddingLeft: 15,
        paddingRight: 20
    },
    line: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#606060',
        width: 100,
        height: 15,
        backgroundColor: '#edeef1'
    },
    line1: {
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#606060',
        width: 230,
        height: 15,
        color: '#000',
        backgroundColor: '#edeef1'
    },
    shimmer: {
        // backgroundColor: '#f6f7f8'
    }
});

export default UserShimmerCard;
