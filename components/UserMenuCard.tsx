import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Replace with your preferred icon library


const UserMenuCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title}>New Borosroad Deli</Text>
      </View>
      <View style={[styles.row, styles.content]}>
        <Text style={styles.updatedText}>Last Updated: 2d</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionChip, styles.shareChip]} onPress={() => {}}>
            <Ionicons name="menu" size={20} color="white" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionChip, styles.editChip]} onPress={() => {}}>
            <Ionicons name="pencil-outline" size={20} color="white" />
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#133434', // Matches AppColors.softwhite
    elevation: 1, // Slight elevation for shadow
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderColor: '#2c7777',
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    color: '#FFF'
  },
  updatedText: {
    color: '#666666', // Dark grey
    fontSize: 16,
  },
  content: {
    paddingTop: 16,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 'auto', // Align to the right
  },
  actionChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginLeft: 8,
  },
  shareChip: {
    backgroundColor: '#34744e',
  },
  editChip: {
    backgroundColor: '#1a4747',
    borderColor: '#205656',
    borderWidth: 2
  },
  actionText: {
    marginLeft: 4,
    fontSize: 18,
    color: '#FFF',
  },
});

export default UserMenuCard;
