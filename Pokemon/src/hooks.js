import { useState } from "react";
import axios from "axios";

/**
 * Custom hook to manage the flip state of a card.
 * @returns {Array} - The current flip state and a function to toggle it.
 */
export function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle flip state
  const toggleFlip = () => setIsFlipped((prevState) => !prevState);

  return [isFlipped, toggleFlip];
}

/**
 * Custom hook to manage AJAX requests with axios.
 * @param {string} baseURL - The base URL for axios requests.
 * @returns {Array} - An array containing the fetched data and a function to add new data.
 */
export function useAxios(baseURL) {
    const [data, setData] = useState([]);
  
    // Function to add new data by making an axios request
    const addData = async (endpoint = "") => {
      try {
        const response = await axios.get(`${baseURL}${endpoint}`);
        setData(data => [...data, { ...response.data }]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
  
    return [data, addData];
  }
