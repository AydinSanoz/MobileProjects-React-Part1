// Overall - 1
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import productData from './product_data.json'

import { ProductCard } from './components'

const Shopping = () => {
    const [searchValue, setSearchValue] = useState("");
    const [displayData, setDisplayData] = useState([]);
    

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        setDisplayData(productData)
        const Text = searchValue.toLowerCase();
        const filteredData = productData.filter((product) => {
            return (product.title.toLowerCase().includes(Text))
        });
        console.log("Shopping -> filteredData", filteredData)
        setDisplayData(filteredData)
        
    }, [searchValue])


    return (
        <SafeAreaView>
            <View>
                <Text style={styles.banner}>Clarushop</Text>

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Ürün ara..."
                        onChangeText={(value) => setSearchValue(value)}
                    />
                </View>

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={displayData}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

export default Shopping;

const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})