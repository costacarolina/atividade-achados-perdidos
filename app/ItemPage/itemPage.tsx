import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ItemPage(){
    return(
        <View>
            <Text>Pagina do item</Text>
            <Link href={"/"}>
                <Text>Voltar para pagina anterior</Text>
            </Link>
        </View>
    )
}