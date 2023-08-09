import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import { getData } from '../share/api';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [listData, setListData] = useState([]);
    useEffect(() => {
        // Update the data list using the API
        const getAllData = async () => {
            const data = await getData();
            setListData(data);
        };

        getAllData();
    }, []);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}
        >
            {
                listData && listData.length > 0 ? (
                    listData.map((item, idx) => (
                        <View style={styles.item} key={idx}>
                            <View style={styles.item_inner}>
                                <Image
                                    style={styles.item_img}
                                    source={{
                                        uri: item.imageURL,
                                    }}
                                />
                                <Text >{item.title}</Text>
                            </View>
                        </View>
                    ))
                ) : (
                    <View style={styles.stubStyle}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}
                        >
                            No Data to display!
                        </Text>
                    </View>
                )
            }
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    item: {
        marginTop: 10
    },
    item_inner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_img: {
        width: 50,
        height: 50,
        marginRight: 10,
        position: 'relative',
        objectFit: 'fill'
    },
    stubStyle: {
        marginTop: 50,
    },
});
