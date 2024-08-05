import React, { useState, useEffect } from "react";

function App() {
  
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await response.json();
        
        setDogImageUrl(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        
        setIsLoading(false);
      }
    };

    
    fetchDogImage();
  }, [])

  return (
    <div>
      {isLoading ? (
        
        <p>Loading...</p>
      ) : (
        
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
