import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card';
import styled from 'styled-components';


const RestaurantsSreen = () => {

    const SafeArea = styled(SafeAreaView)`
        flex: 1;
       
    `;
    const SearchBarContainer = styled(View)`
        padding: 16px;
    `;

    const RestaurantListContainer = styled(View)`
        flex: 1;
        padding: 16px;
        backgroundColor: blue;
    `;

    return (
        <>
    <SafeArea>
    <SearchBarContainer>
        <Searchbar 
          placeholder="Search"
        />
    </SearchBarContainer>

    <RestaurantListContainer>
        <RestaurantInfoCard />
    </RestaurantListContainer>
</SafeArea>
</>
    )
}

export default RestaurantsSreen;


