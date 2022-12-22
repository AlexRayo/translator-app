import { StyleSheet, Dimensions } from 'react-native';
// import styled from 'styled-components';

// export const safeAreaViewCenter = styled.SafeAreaView`
//     flex: center;
//     align-items: center;
//     justify-content: center;
// `
//Prefered styling without styledComponents because legibility on components, and adding multiple inline code to each element
export const primaryColor = "#154733";
export const secondaryColor = "#f3a000";
export const grayColor = "#606060";
export const darkColor = "#212121";
export const lightColor = "#f1f1f1";
export const warningColor = "#f3a000";
export const dangerColor = "#db0a4a";
const lightPrimaryColor = "#80d0c9"
const darkPrimaryColor = "#125c56"
export default StyleSheet.create({
    //
    dFlex: {
        flex: 1,
    },
    flexRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flexRowBetween: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
        padding: 10,
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    containerCenterAll: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    itemsCenter: {
        alignItems: 'center',
    },

    //components
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    h1: {
        fontSize: 24,
    },
    h2: {
        fontSize: 22,
    },
    h3: {
        fontSize: 20,
    },
    h4: {
        fontSize: 18,
    },
    p: {
        fontSize: 16,
    },
    flagPrimary: {
        backgroundColor: lightPrimaryColor,
        borderRadius: 5,
        color: darkPrimaryColor,
        fontWeight: 'bold',
        padding: 5,
    },
    darkFlag: {
        backgroundColor: darkColor,
        borderRadius: 5,
        color: grayColor,
        fontWeight: 'bold',
        padding: 5,
    },
    //LIST and Components
    listItem: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, .05)',
    },
    listItemDanger: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    listItemWhite: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    listItemPrimary: {
        borderLeftWidth: 5,
        borderColor: primaryColor,
    },
    listItemWarning: {
        borderLeftWidth: 5,
        borderColor: secondaryColor,
    },
    listItemDanger: {
        borderLeftWidth: 5,
        borderColor: dangerColor,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontWeight: 'bold',
    },

    //MARGIN
    m1: {
        margin: 10,
    },
    my1: {
        marginTop: 10,
        marginBottom: 10,
    },
    mx1: {
        marginLeft: 10,
        marginRight: 10,
    },
    mt1: {
        marginTop: 10,
    },
    mb1: {
        marginBottom: 10,
    },

    padding: {
        padding: 10,
    },
    p0: {
        padding: 0,
    },
    px: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    px2: {
        paddingRight: 30,
        paddingLeft: 30,
    },
    px3: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    py: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    py2: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    pr: {
        paddingRight: 10,
    },
    pl: {
        paddingLeft: 10,
    },

    //COLORS
    textPrimary: {
        color: primaryColor,
    },
    textSecondary: {
        color: secondaryColor,
    },
    textDark: {
        color: darkColor,
    },
    textGray: {
        color: grayColor,
    },
    textLight: {
        color: lightColor,
    },
    textWhite: {
        color: '#fff',
    },
    w100: {
        width: Dimensions.get('window').width,
    },
    w50: {
        width: (Dimensions.get('window').width) / 2,
    },
    w75: {
        width: (Dimensions.get('window').width) / 1.5,
    },

    //BACKGROUDS
    bgWhite: {
        backgroundColor: 'white',
    },
    bgPrimary: {
        backgroundColor: primaryColor,
    },
    bgSecondary: {
        backgroundColor: secondaryColor,
    },
    bgDanger: {
        backgroundColor: dangerColor,
    },
    bgDark: {
        backgroundColor: darkColor,
    },
    bgGray: {
        backgroundColor: grayColor,
    },
    bgLight: {
        backgroundColor: lightColor,
    },
    //TEXT
    uppercase: {
        textTransform: 'uppercase',
    },
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: 'right',
    },
    textCenter: {
        textAlign: 'center',
    },

    textDanger: {
        color: 'crimson',
    },
    textWarning: {
        color: warningColor,
    },
    textDark: {
        color: darkColor,
    },
    textBold: {
        fontWeight: 'bold',
    },
    //TEXT-SIZE
    textSM: {
        fontSize: 16,
    },
    textMD: {
        fontSize: 18,
    },
    textLG: {
        fontSize: 20,
    },
    textXL: {
        fontSize: 25,
    },
    textXXL: {
        fontSize: 30,
    },
    //ALIGNMENT
    flexRow: {
        flexDirection: 'row',
    },
    flexColumn: {
        flexDirection: 'column',
    },

    centerHorizontal: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    justifyBetween: {
        justifyContent: 'space-between',
    },

    textWrap: {
        flex: 1,
        flexWrap: 'wrap',
    },
    //UTILS
    borderRadius: {
        borderRadius: 5,
    },
    alignSelfStart: {
        alignSelf: 'flex-start',
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },
    alignSelfCenter: {
        flex: 1,
        alignSelf: 'center',
    },
    borderTop: {
        borderBottomWidth: 1,
        borderBottomColor: lightColor,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: lightColor,
    },

    maxWidth250: {
        maxWidth: 250,
    },

    circleIcon: {
        color: 'white',
        height: 40,
        width: 40,
        borderRadius: 5,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 5,
    },

    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
        borderColor: darkColor,
        borderWidth: 5,
    },
});
