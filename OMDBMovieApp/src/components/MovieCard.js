import React, { useState, useContext } from 'react';
import { Card, IconButton, useTheme, Text } from 'react-native-paper';
import { View, StyleSheet, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { BookmarkContext } from '../providers/BookmarkProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon
import { Share } from 'react-native';

const MovieCard = ({ movie }) => {
  const { colors } = useTheme();
  const { state, dispatch } = useContext(BookmarkContext);

  const isBookmarked = state.bookmarks.some(
    (item) => item.imdbID === movie.imdbID
  );

  const [modalVisible, setModalVisible] = useState(false);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch({ type: 'REMOVE_BOOKMARK', payload: movie });
    } else {
      dispatch({ type: 'ADD_BOOKMARK', payload: movie });
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this movie: ${movie.Title}`,
        url: `https://www.imdb.com/title/${movie.imdbID}/`,
      });
      if (result.action === Share.sharedAction) {
        // Handle shared action
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInfo = () => {
    setModalVisible(true); // Show modal when info button is pressed
  };

  const closeModal = () => {
    setModalVisible(false); // Hide modal
  };

  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.container}>
          <Image source={{ uri: movie.Poster }} style={styles.thumbnail} />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>{movie.Title}</Text>
              <Text style={styles.subtitle}>Year: {movie.Year}</Text>
            </View>
            <View style={styles.actions}>
              <IconButton
                icon={() => (
                  <MaterialCommunityIcons
                    name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                    size={20}
                    color={isBookmarked ? 'orange' : colors.text}
                  />
                )}
                onPress={handleBookmark}
              />
              <IconButton
                icon="share-outline"
                color={colors.text}
                size={20}
                onPress={handleShare}
              />
              <IconButton
                icon="information-outline"
                color={colors.text}
                size={20}
                onPress={handleInfo}
              />
            </View>
          </View>
        </View>
      </Card>

      {/* Modal for movie details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image source={{ uri: movie.Poster }} style={styles.largePoster} />
              <Text style={styles.modalTitle}>{movie.Title}</Text>
              <Text style={styles.modalSubtitle}>Year: {movie.Year}</Text>
              <Text style={styles.modalDescription}>Description: {movie.Description || "No description available."}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  largePoster: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MovieCard;
