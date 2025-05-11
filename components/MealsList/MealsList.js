import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealItem";

const MealsList = ({ items }) => {
  function renderMealItem({ item }) {
    const mealItemProps = { ...item };

    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
