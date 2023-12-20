import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: 12,
        height: 50,
        marginTop: 12,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.primary,
        marginTop: 10,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
       fontFamily: "regular",
       width: "200%",
       height: "100%",
       paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: 50, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.primary,
    }
})

export default styles