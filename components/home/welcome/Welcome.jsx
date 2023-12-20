import { View, Text } from  'react-native'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../../constants'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    
    const navigation = useNavigation();

  return (
    <View>

        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                {" "}
                Find the most 
            </Text>
            <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                {" "}
                Luxurious Furniture 
            </Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons
                name="camera-outline"
                style={styles.searchIcon}
                size={24}
                />
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput 
                 style={styles.searchInput}
                 value=''
                 onPressIn={() => navigation.navigate("Search")}
                 placeholder='What are you looking for?'
                />
            </View>

            <View>
                <TouchableOpacity style={styles.searchBtn}>
                <Feather name="search" size={SIZES.xLarge} color={COLORS.lightWhite} />
                </TouchableOpacity>
            </View>

        </View>

        
    </View>
  )
}

export default Welcome