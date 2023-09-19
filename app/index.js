import { Text, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { COLORS, SIZES, images } from "./assets/constants";
import { createStackNavigator } from "@react-navigation/stack";
import icons from "../constants/icons";
import { ScrollView } from "react-native-gesture-handler";
import ScreenHeaderBtn from "../components/HeaderButton/ScreenHeaderBtn";
import Welcome from "../components/Welcome/Welcome.jsx";
import PopularJobs from "../components/PopularJobs/PopularJobs";
import Nearbyjobs from "../components/Nearbyjobs/Nearbyjobs";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSerachTerm] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSerachTerm={setSerachTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs />
          <Nearbyjobs />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
