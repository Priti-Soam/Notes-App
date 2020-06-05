import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexView: {
        flex: 1
    },
    container: {
        justifyContent: 'center', alignItems: 'center', flex: 1
    },
    splashText: {
        alignItems: 'center', fontSize: 26, color: 'green', fontWeight: 'bold'
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    GridViewBlockStyle: {
        flex: 1,
        height: 150,
        margin: 10,
        backgroundColor: '#5f9ea0',
        borderRadius: 8,
        flex: 0.5
    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        paddingLeft: 5,
        fontSize: 18,
        marginTop: 5
    },
    GridViewInsideTextItemStyle1: {
        color: '#fff',
        paddingHorizontal: 10,
        fontSize: 12,
        // justifyContent: 'center', 
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        height: 260,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    modalView: {
        justifyContent: 'center', flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    text: {
        color: '#3f2949',
        fontSize: 20,
        alignSelf: 'center',
        color: 'white'
    },
    modalTextInput: {
        borderBottomWidth: 2, borderBottomColor: 'black',
        width: '80%', height: 40,
        margin: 10
    },
    modalTextInput1: {
        borderBottomWidth: 1.5, borderBottomColor: 'black',
        width: '80%', 
        height: 80,
        margin: 10,
    },
    plusIcon: {
        height: 60, width: 60
    },
    plusIconView: {
        justifyContent: 'flex-end', alignItems: 'flex-end', position: 'absolute', right: 0, bottom: 0
    },
    saveDetails: {
        borderRadius: 8,
        backgroundColor: 'green', height: 40, width: '30%',
        justifyContent: 'center',
        margin: 15
    },
    crossIcon: {
        height: 20, width: 20, right: 0, top: 0

    },
    crossIconView: {
        alignSelf: 'flex-end', right: 5, top: 0
    },
    date: {
        right: 0, fontSize: 12, color: 'white', alignSelf: 'flex-end', padding: 5
    },
    editIcon: {
        height: 18, width: 18, color: 'blue', marginRight: 15
    },
    deleteIcon: {
        height: 18, width: 18, color: 'red'
    },
    iconView: {
        flexDirection: 'row', justifyContent: 'flex-end', margin: 5
    }

});

export default styles;