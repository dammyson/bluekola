'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View, StyleSheet
} from 'react-native'



class Line extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        color: PropTypes.string
    }

    static defaultProps = {
        color: '#01215B'
    }

    render() {
        return <View style={[styles.line, { backgroundColor: this.props.color }, this.props.style || {}] }></View>
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1
    }
})

module.exports = Line
