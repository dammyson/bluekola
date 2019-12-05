'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Line from './Line'

class ListPanel extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        onPressSeeAll: PropTypes.func
    }
  
    constructor(props) {
        super(props)
    }

    render() {
        let headerLeftPartStyle = (this.props.description) ? { justifyContent: 'center' } : { flexDirection: 'row', alignItems: 'center' }
        return(
            <View>
                <View style={styles.holder}>
                    <View style={ styles.header }>
                        <View style={ headerLeftPartStyle }>
                            <Text style={{ fontSize: 16 }}>{ this.props.title }</Text>
                        </View>
                        <TouchableOpacity onPress={ this.props.onPressSeeAll } style={ styles.headerRightPart }>
                            <Text style={{ marginRight: 10, color: '#01215B' }}>See All</Text>
                            <Icon style={{ color: '#01215B' }} name='angle-right' size={ 23 } />
                        </TouchableOpacity>
                    </View>

                    { this.props.children }
                </View>
                <Line />
            </View>
              )
    }
}

const styles = StyleSheet.create({
    holder: {
        flexDirection: 'column',
        paddingBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    },
    headerRightPart: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
})

module.exports = ListPanel
