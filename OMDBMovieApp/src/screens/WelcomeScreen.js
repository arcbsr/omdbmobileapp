import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title, Paragraph } from 'react-native-paper';

const WelcomeScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('Home');  // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome to the Demo App</Title>
      <Paragraph style={styles.paragraph}>
        This app demonstrates the usage of Clean Architecture, Redux for state management, API integration, Provider pattern, and routing/navigation.
      </Paragraph>
      
      <Text style={styles.text}>
        Explore how these modern technologies are integrated into a simple, clean structure.
      </Text>

      <Button
        mode="contained"
        onPress={handleNavigate}
        style={styles.button}
      >
        Go to Home Screen
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  text: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    padding: 10,
    width: '80%',
    borderRadius: 25,
  },
});

export default WelcomeScreen;
