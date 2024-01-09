import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../../context/AuthContext";
import { ActivityIndicator } from "react-native";

export default function LoginLayout() {
  const { isLoading, auth } = useAuth();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  // if (!auth) {
  //   return <Redirect href="/(drawer)/login" />;
  // }

  return (
    <>
      <Stack />
    </>
  );
}
