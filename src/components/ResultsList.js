import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow') }>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default ResultsList;