import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { userDetailStyles } from "../styles/userDetail";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/MainStack";

type UserDetailProps = NativeStackScreenProps<RootStackParamList, "userDetail">;

const UserDetail = ({ navigation, route }: UserDetailProps) => {
  const { name, address, email, image, phoneNumber } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <View style={userDetailStyles.container}>
        <View style={userDetailStyles.profile}>
          <Image
            alt=""
            source={{
              uri: image,
            }}
            style={userDetailStyles.userImageDetail}
          />
          <Text
            style={userDetailStyles.profileName}
          ></Text>
          <Text style={userDetailStyles.profileEmail }>{email || "N/A"}</Text>
          <Text
            style={userDetailStyles.profileEmail}
          >{`País: ${address.country || "N/A"}`}</Text>
          <Text
            style={userDetailStyles.profileEmail}
          >{`Ciudad: ${address.city || "N/A"}`}</Text>
          <Text
            style={userDetailStyles.profileEmail}
          >{`Dirección: ${address.street.name || ""} ${address.street.number || ""}`}</Text>
          <Text
            style={userDetailStyles.profileEmail}
          >{`Telefono: ${phoneNumber} `  || "N/A"}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetail;
