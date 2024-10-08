import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {
  children: ReactNode;
};

export default function Card(props: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginRight: 20,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
