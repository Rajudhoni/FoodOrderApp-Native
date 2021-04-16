import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card';
const RestaurantsSreen = () => {
    return (
        <>
        <SafeAreaView style={{
            flex: 1,
            marginTop: StatusBar.currentHeight,

        }}
  >
    <View style={styles.searchbar}>
        <Searchbar 
          placeholder="Search"
        />
    </View>

    <View style={{flex: 1, padding: 16, backgroundColor: "blue"}}>
        <RestaurantInfoCard />
    </View>
</SafeAreaView>
</>
    )
}

export default RestaurantsSreen;

const styles = StyleSheet.create({})
