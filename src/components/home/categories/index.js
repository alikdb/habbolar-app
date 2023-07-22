import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles";

import { categories } from "../../../fake-data";
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("tumu");

  return (
    <View style={styles.content}>
      <ScrollView horizontal={true} alwaysBounceVertical={false}>
        {categories.map((category) => (
          <TouchableWithoutFeedback
            key={category.id}
            onPress={() => setSelectedCategory(category.id)}
          >
            {selectedCategory === category.id ? (
              <Text style={[styles.category, styles.activeCategory]}>
                {category.name}
              </Text>
            ) : (
              <Text style={styles.category}>{category.name}</Text>
            )}
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
