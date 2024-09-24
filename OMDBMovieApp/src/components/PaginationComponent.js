import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const PaginationComponent = ({ page, handlePrevPage, handleNextPage }) => {
  return (
    <Card style={styles.paginationContainer}>
      <Card.Content style={styles.cardContent}>
        <IconButton
          icon="chevron-left" // Left arrow icon
          onPress={handlePrevPage}
          disabled={page === 1}
        />
        <Text style={styles.pageNumber}>Page {page}</Text>
        <IconButton
          icon="chevron-right" // Right arrow icon
          onPress={handleNextPage}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    margin: 5,
    borderRadius: 8,
    elevation: 1, // For shadow effect on Android
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Spread the items evenly
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaginationComponent;
