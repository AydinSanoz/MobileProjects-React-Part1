// Overall - 1
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import productData from './product_data.json'

import { ProductCard } from './components'

const ClarusShop = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayData , setDisplayData]= useState([]);

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        setDisplayData(productData)
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
        const text = searchValue.toLowerCase();
        const filteredData = productData.filter((product)=>{
            return product.title.toLowerCase().includes(text)
        })
        setDisplayData(filteredData)
            
        // }
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

export default ClarusShop;

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