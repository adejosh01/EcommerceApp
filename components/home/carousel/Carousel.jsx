import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import styles from '../welcome/welcome.style'
import { COLORS } from '../../../constants'
import fn1 from '../../../assets/images/fn1.jpg'
import fn2 from '../../../assets/images/fn2.jpg'
import fn3 from '../../../assets/images/fn3.jpg'

const Carousel = () => {
    const slides = [
      {uri: fn1},
      {uri: fn2},
      {uri: fn3},
    ]
  return (
    <View style={styles.carouselContainer}>
       <SliderBox 
         images={[require('../../../assets/images/fn1.jpg'), require('../../../assets/images/fn2.jpg'), require('../../../assets/images/fn3.jpg')]}
         dotColor={COLORS.primary}
         inactiveDotColor={COLORS.secondary}
         ImageComponentStyle={{borderRadius: 15, width: "92%", marginTop: 30}}
         autoplay
         circleLoop
       />
    </View>
  )
}

export default Carousel