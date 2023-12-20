import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './productcardview.style'
import { Image } from 'react-native'

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image 
            source={require("../../../assets/images/fn2.jpg")}
            style={styles.image}
            />

            </View>

            <View style={styles.details}>
                <Text>djnrvnrnivjre</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView