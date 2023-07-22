import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { Search as SearchIcon } from "lucide-react-native";
import styles from "./styles";
const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.content}>
      <View style={styles.inputContent}>
        <TextInput
          style={styles.input}
          placeholderTextColor={`#C8C8C8`}
          placeholder="Haber Ara"
          defaultValue={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.button}>
          <SearchIcon
            size={24}
            color="#C8C8C8"
            onPress={() => Alert.alert("Text: " + text)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
