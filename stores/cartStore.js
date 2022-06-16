import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItem = async (item) => {
      this.items.push(item);
    await AsyncStorage.setItem('items', JSON.stringify(this.items))
  };

  getItemsCount() {
    return this.items.length;
  }
  getTotalPrice() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems = () => {
    return this.items;
  };

  clearItems = async() => {
    this.items = []
    await AsyncStorage.setItem('items', JSON.stringify(this.items))
  }
  
  fetchItems = async () =>{
    const jsonValue = await AsyncStorage.getItem('items')
    if(this.items)
      this.items = JSON.parse(jsonValue)
  } 
}

const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
