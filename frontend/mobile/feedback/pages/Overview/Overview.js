import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text,  TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons/';

export function Overview({navigation}) {
    const [selectedTile] = useState(null); // To keep track of the selected tile
  
    // Data for the grid
    const data = [
      { id: 'enquete', title: 'Vragenlijsten', icon: 'list-alt', component: 'Vragenlijsten' },
      { id: 'members', title: 'Leden', icon: 'person', component: 'Leden' },
      { id: 'teams', title: 'Teams', icon: 'group', component: 'Teams' },
      { id: 'reports', title: 'Rapportages', icon: 'insights', component: 'Rapportages' }
      // Add more tiles as needed
    ];
  
    // Render each tile
    const renderTile = ({ item }) => (
      <TouchableOpacity
        title=''
        style={[styles.tile, item.id === selectedTile && styles.selectedTile]}
        onPress={() => navigation.navigate(item.component)}
      >
        <MaterialIcons
          name={item.icon}
          size={50}
          color='white'
        />
        <Text style={styles.tileText}>{item.title}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderTile}
          keyExtractor={(item) => item.id}
          numColumns={1} // Adjust the number of columns as needed
        />
      </View>
    );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tile: {
    flex: 1,
    backgroundColor: '#46ad10',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  selectedTile: {
    backgroundColor: 'blue',
  },
  tileText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
})