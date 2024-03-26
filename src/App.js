import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddItemForm from './components/AddItemForm';
import ClothingItemList from './components/ClothingItemList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);

  // Function to handle login
  const handleLogin = (credentials) => {
    // Perform login logic here (e.g., send login credentials to backend)
    // Upon successful login, set isLoggedIn to true
    setIsLoggedIn(true);
    // Simulate fetching clothing items from backend
    setClothingItems([
      { id: 1, name: 'T-shirt', category: 'Tops', color: 'Red', size: 'M', image: 'https://example.com/tshirt.jpg' },
      { id: 2, name: 'Jeans', category: 'Bottoms', color: 'Blue', size: '32', image: 'https://example.com/jeans.jpg' },
    ]);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove tokens)
    // Upon logout, set isLoggedIn to false
    setIsLoggedIn(false);
    // Clear clothing items
    setClothingItems([]);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout}>
          <AddItemForm onAddItem={(newItem) => setClothingItems([...clothingItems, newItem])} />
          <ClothingItemList items={clothingItems} />
        </Dashboard>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
