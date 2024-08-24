import React from "react";
import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean; // ?(オプショナル): propsにあってもなくても動くようになる
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  // const children = props.children;
  const { children, bang, style } = props; // 分割代入=>非構造化

  // 配列のあとのstyleの方が優先される
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
