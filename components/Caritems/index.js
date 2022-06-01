import react from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyleButton from "./StyledButton";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
            source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image}/>
        <View style={styles.titles}>
            <Text style={styles.title}> Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,000</Text>
        </View>

        <StyleButton
         type="primary" 
         content={"Custom Order"} 
         onPress={() => {
            console.warn( 
                'Custom Order was pressed'
            )}
         } />

        <StyleButton
         type="secondary" 
         content={"Exsiting Inventory"} 
         onPress={() => {
            console.warn(
                'Exsiting Inventory was pressed'
            )}
         } />


      </View>
    );
};

export default CarItem;