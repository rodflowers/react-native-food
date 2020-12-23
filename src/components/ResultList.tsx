import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return <ResultDetail detail={ item } />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultList;
