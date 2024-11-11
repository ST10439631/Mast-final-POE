import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the MenuItem interface
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [dishes, setDishes] = useState<MenuItem[]>([
    { id: '1', name: 'Spinach Sensation', description: 'A fusion of creamy spinach, crispy garlic, and mozzarella wrapped in filo.', course: 'Starters', price: 39.99 },
    { id: '2', name: 'Mexican Morsels', description: 'Crispy tortilla pockets with delicious fillings.', course: 'Starters', price: 49.99 },
    { id: '3', name: 'Grilled Chicken', description: 'Marinated and grilled to perfection.', course: 'Mains', price: 89.00 },
    { id: '4', name: 'Classic Burger', description: 'Juicy beef patty made from premium meat.', course: 'Mains', price: 122.80 },
    { id: '5', name: 'Cheesecake', description: 'Rich and creamy cheesecake for dessert lovers.', course: 'Desserts', price: 59.99 },
    { id: '6', name: 'Golden Waffles', description: 'Golden-brown waffles with a delicate crunch.', course: 'Desserts', price: 39.99 },
  ]);
  const [filter, setFilter] = useState('All');
  const [newDish, setNewDish] = useState<MenuItem>({ id: '', name: '', description: '', course: '', price: 0 });

  // Calculate average prices by course
  const calculateAveragePrice = (course: string) => {
    const courseDishes = dishes.filter(dish => dish.course === course);
    const total = courseDishes.reduce((acc, dish) => acc + dish.price, 0);
    return courseDishes.length ? `R ${(total / courseDishes.length).toFixed(2)}` : 'R 0.00';
  };

  // Filter dishes by selected course
  const filteredDishes = filter === 'All' ? dishes : dishes.filter(dish => dish.course === filter);

  // Handler to add a new dish
  const handleAddDish = () => {
    if (newDish.name && newDish.course && newDish.price) {
      setDishes([...dishes, { ...newDish, id: Math.random().toString() }]);
      setNewDish({ id: '', name: '', description: '', course: '', price: 0 });
      setCurrentScreen('Home');
    }
  };

  // Handler to remove a dish by ID
  const handleRemoveDish = (id: string) => {
    setDishes(dishes.filter(dish => dish.id !== id));
  };

  // Render each screen based on currentScreen state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return (
          <ImageBackground source={require('./assets/background1.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
              <Image source={require('./assets/logo.jpg')} style={styles.logo} />
              <Text style={styles.title}>Welcome to Our Restaurant</Text>
              
              <Text style={styles.averagePrice}>Starters Avg: {calculateAveragePrice('Starters')}</Text>
              <Text style={styles.averagePrice}>Mains Avg: {calculateAveragePrice('Mains')}</Text>
              <Text style={styles.averagePrice}>Desserts Avg: {calculateAveragePrice('Desserts')}</Text>
              
              <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('ManageMenu')}>
                <Text style={styles.buttonText}>Manage Menu</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('FilterByCourse')}>
                <Text style={styles.buttonText}>Filter by Course</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );

      case 'FilterByCourse':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Filter Dishes by Course</Text>
            
            <Picker
              selectedValue={filter}
              onValueChange={(itemValue: string) => setFilter(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="All Courses" value="All" />
              <Picker.Item label="Starters" value="Starters" />
              <Picker.Item label="Mains" value="Mains" />
              <Picker.Item label="Desserts" value="Desserts" />
            </Picker>

            <ScrollView style={styles.scrollView}>
              {filteredDishes.map(dish => (
                <View key={dish.id} style={styles.dishCard}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.dishDescription}>{dish.description}</Text>
                  <Text style={styles.dishPrice}>Price: R {dish.price.toFixed(2)}</Text>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('Home')}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        );

      case 'ManageMenu':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Add a New Dish</Text>
            <TextInput
              placeholder="Dish Name"
              value={newDish.name}
              onChangeText={(text) => setNewDish({ ...newDish, name: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Description"
              value={newDish.description}
              onChangeText={(text) => setNewDish({ ...newDish, description: text })}
              style={styles.input}
            />
            <Picker
              selectedValue={newDish.course}
              onValueChange={(itemValue: string) => setNewDish({ ...newDish, course: itemValue })}
              style={styles.picker}
            >
              <Picker.Item label="Select Course" value="" />
              <Picker.Item label="Starters" value="Starters" />
              <Picker.Item label="Mains" value="Mains" />
              <Picker.Item label="Desserts" value="Desserts" />
            </Picker>
            <TextInput
              placeholder="Price"
              value={newDish.price.toString()}
              onChangeText={(text) => setNewDish({ ...newDish, price: parseFloat(text) || 0 })}
              style={styles.input}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleAddDish}>
              <Text style={styles.buttonText}>Add Dish</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Existing Dishes</Text>
            <ScrollView style={styles.scrollView}>
              {dishes.map(dish => (
                <View key={dish.id} style={styles.dishCard}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.dishDescription}>{dish.description}</Text>
                  <Text style={styles.dishPrice}>Price: R {dish.price.toFixed(2)}</Text>
                  <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveDish(dish.id)}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('Home')}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return <Text>Unknown Screen</Text>;
    }
  };

  return <View style={styles.appContainer}>{renderScreen()}</View>;
};

// Styles
const styles = StyleSheet.create({
  appContainer: { flex: 1 },
  backgroundImage: { flex: 1, justifyContent: 'center' },
  container: { flex: 1, padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2a9d8f', marginBottom: 20, textAlign: 'center' },
  averagePrice: { fontSize: 18, color: '#2a9d8f', marginBottom: 10, textAlign: 'center' },
  picker: { width: '80%', alignSelf: 'center', marginBottom: 20 },
  scrollView: { width: '100%' },
  dishCard: { backgroundColor: '#f4f4f4', padding: 15, borderRadius: 10, marginBottom: 10 },
  dishName: { fontSize: 20, fontWeight: 'bold' },
  dishDescription: { fontSize: 16, color: '#555' },
  dishPrice: { fontSize: 16, color: '#333' },
  button: { backgroundColor: '#2a9d8f', padding: 15, borderRadius: 8, alignItems: 'center', marginVertical: 10 },
  backButton: { backgroundColor: '#e76f51', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  removeButton: { marginTop: 10, backgroundColor: '#e63946', padding: 8, borderRadius: 5 },
  removeButtonText: { color: 'white' },
  buttonText: { color: '#fff', fontSize: 18 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5, marginBottom: 10 }
});

export default App;
