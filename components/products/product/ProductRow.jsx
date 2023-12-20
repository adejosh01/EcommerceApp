import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './productRow.style'
import { SIZES } from '../../../constants'
import ProductCardView from '../productCard/ProductCardView'

const ProductRow = () => {
    const products = [1, 2, 3, 4]
  return (
    <View style={{marginTop: SIZES.medium}}>
      <FlatList 
       data={products}
       renderItem={({item}) => (<ProductCardView />)}
       horizontal
       contentContainerStyle={{columnGap: SIZES.medium, }}
    />

    </View>
    
  )
}

export default ProductRow