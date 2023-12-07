import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
    
        setLoading(false);
        setSincronizedItem(true);
      } catch (error){
          setLoading(false);
          setError(true);
      }
    }, 2000)
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false)
  }

  return {
    item, 
    saveItem,
    loading,
    error, 
    sincronizeItem
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de introducción a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'LALALALA', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
