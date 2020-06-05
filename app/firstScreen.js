import React, { Component } from 'react';
import { FlatList, Text, View, Keyboard, Image, Modal, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesArr: [
                { title: 'Title One', detail: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', date: '6/5/2020, 3:10:35 PM' },
                { title: 'Title Two', detail: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', date: '6/5/2020, 3:10:35 PM' },
            ],
            isVisible: false, //state of modal default false 
            title: '',
            detail: '',
            selectedIndex: null
        }

    }

    // Open & close Modal //
    addNotes = () => {
        this.setState({ isVisible: !this.state.isVisible, title: '', detail: '', selectedIndex: null })
    }

    // Save notes details
    saveDetail = () => {
        if (this.state.title && this.state.detail != '') {
            const now = new Date();
            console.log(now.toLocaleString())
            var newArr = { title: this.state.title, detail: this.state.detail, date: now }

            if(this.state.selectedIndex != null) {
                this.state.notesArr[this.state.selectedIndex] = newArr;
            } else {
                this.state.notesArr.push(newArr)
            }
            this.setState({ isVisible: !this.state.isVisible, title: '', detail: '', selectedIndex: null })
        } else {
            alert('Please fillup the input fields')
        }
    }

    // change textinput value
    inputChangeText = (input, value, error) => {
        this.setState({
            [input]: value,
            [error]: null
        })
    };

    //update notes details
    editForm = (index, title, detail) => {
        this.setState({ isVisible: !this.state.isVisible, title: title, detail: detail, selectedIndex: index })
    }

    // delete notes details
    deleteForm = (index) => {
        let notesList = this.state.notesArr;
        notesList.splice(index, 1);
        this.setState({
            notesArr: notesList
        })

    }

    render() {
        return (
            <LinearGradient
                colors={['#00ffff', '#7fffd4']} style={styles.flexView}>
                <View style={styles.MainContainer}>
                    <FlatList
                        data={this.state.notesArr}
                        renderItem={({ item, index }) => <View style={styles.GridViewBlockStyle}>
                            <View style={styles.iconView}>
                                <TouchableOpacity onPress={() => this.editForm(index, item.title, item.detail)}>
                                    <Image
                                        source={require('../assets/download.png')} style={
                                            styles.editIcon
                                        } />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.deleteForm(index)} >
                                    <Image
                                        source={require('../assets/dl.png')} style={styles.deleteIcon} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.date}> {item.date.toLocaleString()} </Text>
                            <Text style={styles.GridViewInsideTextItemStyle}
                                numberOfLines={1}> {item.title} </Text>
                            <Text style={styles.GridViewInsideTextItemStyle1}
                                numberOfLines={3}> {item.detail} </Text>
                        </View>}
                        numColumns={2}
                    />
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.isVisible}
                        onRequestClose={() => { console.log("Modal has been closed.") }}>
                        {/*All views of Modal*/}
                        <View style={styles.modalView}>
                            <View style={styles.modal}>
                                <TouchableOpacity style={styles.crossIconView}
                                    onPress={() => {
                                        this.setState({ isVisible: !this.state.isVisible })
                                    }} >
                                    <Image
                                        source={require('../assets/cross1.png')} style={styles.crossIcon} />
                                </TouchableOpacity>
                                <TextInput placeholder='Add Title'
                                    value={this.state.title}
                                    onChangeText={(val) => this.inputChangeText("title", val)}
                                    style={styles.modalTextInput} />
                                <TextInput placeholder='Add Detail'
                                    value={this.state.detail}
                                    onChangeText={(val) => this.inputChangeText("detail", val)}
                                    numberOfLines={10}
                                    multiline={true}
                                    onBlur={Keyboard.dismiss}
                                    style={styles.modalTextInput1} />
                                <TouchableOpacity style={styles.saveDetails} onPress={() => this.saveDetail()}>
                                    <Text style={styles.text}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>
                    <View style={styles.plusIconView}>
                        <TouchableOpacity onPress={this.addNotes}>
                            <Image source={require('../assets/plus1.png')} style={styles.plusIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}


