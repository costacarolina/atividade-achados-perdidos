import { Link } from "expo-router";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const itens = [
 {
   id: 1,
   title: "Mochila preta Adidas",
   subtitle: "Quadra de esportes · ADM",
   status: "PERDIDO",
   image: "🎒"
 },
 {
   id: 2,
   title: "Chaveiro com chave",
   subtitle: "Biblioteca · encontrado",
   status: "ENCONTRADO",
   image: "🔑"
 },
 {
   id: 3,
   title: "Fone de ouvido JBL",
   subtitle: "Sala 12 · Meca",
   status: "PERDIDO",
   image: "📱"
 },
];
const { width } = Dimensions.get("window");
export default function Index() {
 return (
<SafeAreaView style={style.container}>
<ScrollView showsVerticalScrollIndicator={false}>
<View>
<View style={style.titleContainer}>
<Text style={style.mainTitle}>Achados</Text>
<Text style={style.mainTitle2}> & Perdidos</Text>
</View>
<Text style={style.welcomeText}>
           SENAI - Ricardo Lerner · 12 itens ativos
</Text>
</View>
<View style={style.section}>
<FlatList
           data={itens}
           scrollEnabled={false}
           renderItem={({item}) => (
<Link href={"./item/mochila"}>
<View style={style.card}>
<Image style={style.cardImage} source={{uri: item.image}} />
<View style={{flex: 1}}>
<Text style={style.cardTitle}>{item.title}</Text>
<Text style={style.cardSubtitle}>{item.subtitle}</Text>
</View>
<View style={style.status}>
<Text style={style.statusText}>{item.status}</Text>
</View>
</View>
</Link>
           )}
         />
</View>
</ScrollView>
</SafeAreaView>
 );
}
const style = StyleSheet.create({
 container: {
   paddingTop: 10,
   paddingHorizontal: 15,
   backgroundColor: "#f3f1eb",
   flex: 1,
 },
 titleContainer: {
   flexDirection: "row",
 },
 mainTitle: {
   color: "#000",
   fontSize: 22,
   fontWeight: "bold",
 },
 mainTitle2: {
   color: "#c43e2f",
   fontSize: 22,
   fontWeight: "bold",
 },
 welcomeText: {
   color: "#777",
   fontSize: 14,
   marginBottom: 25,
 },
 section: {
   marginBottom: 40,
 },
 card: {
   flexDirection: "row",
   alignItems: "center",
   backgroundColor: "#fff",
   padding: 12,
   borderRadius: 16,
   marginBottom: 12,
   gap: 12,
 },
 cardImage: {
   width: 56,
   height: 56,
   borderRadius: 12,
 },
 cardTitle: {
   fontWeight: "bold",
   fontSize: 16,
   color: "#000",
 },
 cardSubtitle: {
   color: "#777",
   fontSize: 13,
 },
 status: {
   backgroundColor: "#fae9e8",
   paddingHorizontal: 10,
   paddingVertical: 4,
   borderRadius: 20,
 },
 statusText: {
   color: "#c43e2f",
   fontSize: 12,
   fontWeight: "bold",
 },
});