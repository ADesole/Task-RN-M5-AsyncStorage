import { createStackNavigator } from '@react-navigation/stack';
import { ProductsList } from '../ProductsList';
import { ProductDetail } from '../ProductDetail';
import Cart from '../Cart';
import productStore from '../../stores/productStore';
import CartIcon from '../CartIcon';

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Screen name="ProductsList" component={ProductsList} />
      <Screen
        name="ProductDetails"
        component={ProductDetail}
        options={({ route }) => {
          const { id } = route.params;
          return {
            title: productStore.getProductById(id).name,
          };
        }}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
};

export default RootNavigator;
