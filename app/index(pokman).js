// // import React from "react";
// // import { View, Text, SafeAreaView , ScrollView} from "react-native";
// // import { COLORS, SIZES } from "../constants";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import Welcome from "../components/home/welcome/Welcome";
// // import Popularjobs from "../components/home/popular/Popularjobs";
// // import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
// // import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
// // import { icons } from "../constants";
// // const Stack = createStackNavigator();

// // const Home = () => {
// //   return (
// //     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
// //       <Stack.Navigator>
// //         <Stack.Screen
// //           name="HomeScreen"
// //           component={HomeContent}
// //           options={{
// //             headerStyle: { backgroundColor: COLORS.lightWhite },
// //             headerShadowVisible: false,
// //             headerLeft: () => (
// //               <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
// //             ),
// //             headerRight: () => (
// //               <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
// //             ),
// //             headerTitle: "",
// //           }}
// //         />
// //       </Stack.Navigator>
// //     </SafeAreaView>
// //   );
// // };

// // const HomeContent = () => {
// //   return (
// //     <ScrollView showsVerticalScrollIndicator={false}>
// //       <View
// //         style={{
// //           flex: 1,
// //           padding: SIZES.medium,
// //         }}
// //       >
// //         <Welcome />
// //         <Popularjobs />
// //         <Nearbyjobs />
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // export default Home;

// import { View, StyleSheet, SafeAreaView, ScrollView,Platform } from "react-native";
// import Pokemoncard from "../components/pokemoncard";

// export default function App() {
//   const charmanderData = {
//     name: "Charmander",
//     image: require("../app/assets/cardimages/charmander.png"),
//     type: "Fire",
//     hp: 39,
//     moves: ["Scratch", "Ember", "Growl", "Leer"],
//     weaknesses: ["Water", "Rock"],
//   };
//   const squirtleData = {
//     name: "Squirtle",
//     image: require("../app/assets/cardimages/squirtle.png"), // Replace with the actual image path
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };


//   const pikachuData = {
//     name: "Pikachu",
//     image: require("../app/assets/cardimages/pikachu.png"), // Replace with the actual image path
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
//     weaknesses: ["Ground"],
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//     <ScrollView>
//       <Pokemoncard {...charmanderData} />
//       <Pokemoncard {...squirtleData} />
//       <Pokemoncard {...pikachuData} />
//     </ScrollView>
//   </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop:Platform.OS === "android" ? 25 : 0
//   },
// });
