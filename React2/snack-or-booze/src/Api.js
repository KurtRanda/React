import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  Provides CRUD endpoints for snacks and drinks.
  Updated to include methods for fetching drinks and adding items.
*/

class SnackOrBoozeApi {
  /** Get all snacks */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  /** Get all drinks */
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  /** Get details of a single snack or drink by type and id */
  static async getItem(type, id) {
    const result = await axios.get(`${BASE_API_URL}/${type}/${id}`);
    return result.data;
  }

  /** Add a new snack or drink */
  static async addItem(type, data) {
    const result = await axios.post(`${BASE_API_URL}/${type}`, data);
    return result.data;
  }
}

export default SnackOrBoozeApi;
