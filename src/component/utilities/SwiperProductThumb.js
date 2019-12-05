'use strict'
import React, {Component } from 'react'
import PropTypes from 'prop-types';
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'


const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2.5

class SwiperProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>
                <Image style={ styles.productImage } source={{ uri: this.props.imageUri }} />
                <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
                    { this.props.name }
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        marginRight: 15,
        flexDirection: 'column'
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,
        borderWidth: 0.5,
        borderColor: "#880000"
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: "black"
    }
})

module.exports = SwiperProductThumb
