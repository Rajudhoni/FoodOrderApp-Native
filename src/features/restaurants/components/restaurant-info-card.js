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
    backgroundColor: ${(props) => props.theme.colors.bg.primary}
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    backgroundColor: ${(props) => props.theme.colors.bg.primary}
  `;

  const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

  const Title = styled(Text)`
    fontFamily: ${(props) => props.theme.fonts.heading}
    fontSize: ${(props) => props.theme.fontSizes.body}
    color: ${(props) => props.theme.colors.ui.primary}
  `;
  const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
