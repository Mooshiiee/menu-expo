import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MenuCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <Text style={styles.title}>New Borosroad Deli</Text>
      </View>
      <View style={[styles.row, styles.content]}>
        <Text style={styles.subtitle}>19 main st</Text>
        <Text style={styles.smallText}>10-94-29</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA', // Matches AppColors.softwhite
    elevation: 1, // Slight elevation for shadow
    padding: 8,
    borderRadius: 8,
    marginVertical: 8, // Optional spacing between cards
    shadowColor: '#000', // Shadow properties (iOS)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CCCCCC', // Placeholder background for avatar
  },
  title: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 8,
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666', // Dark grey text
    fontFamily: 'Roboto', // Ensure the font is available in the app
    fontWeight: 'normal',
  },
  smallText: {
    fontSize: 12,
    color: '#999999', // Light grey text
  },
});

export default MenuCard;
