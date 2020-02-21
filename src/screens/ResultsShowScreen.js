import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id =  navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if ( !result ) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center',
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        borderRadius: 4
    }
});

export default ResultsShowScreen;