import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const RestaurantCard = styled(Card)`
    backgroundColor: white;
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    backgroundColor: white;
  `;

  const Title = styled(Text)`
    padding: 16px;
    color: ${(props) => props.theme.colors.ui.success}
  `;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
