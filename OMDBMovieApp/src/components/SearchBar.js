import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { BookmarkProvider } from '../providers/BookmarkProvider';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={[styles.input, { backgroundColor: '#f0f0f0', borderBottomWidth: 0  }]}
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholderTextColor="#888"
          underlineColor="transparent"
          dense
        />
        <TouchableOpacity onPress={() => onSearch(searchTerm)}>
          <MaterialIcons name="search" size={24} color="#888" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
          <MaterialIcons name="bookmark" size={24} color="#888" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
    color: '#333',
    height: 36,
  },
});

export default SearchBar;