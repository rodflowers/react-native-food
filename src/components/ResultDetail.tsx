import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({detail}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image} 
                source={{ uri: detail.image_url }}
            />
            <Text style={styles.name} >{detail.name}</Text>
            <Text>{detail.rating} Stars, {detail.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width:250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetail;