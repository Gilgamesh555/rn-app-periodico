import { StyleProvider, View } from 'native-base'
import React, { useState } from 'react'

const App = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const modalHeader = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Delete your Account</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalBody = (
        <View style={styles.modalBody} >
            <Text style={styles.bodyText}>Are you sure you want to delete your account?</Text>
        </View>
    )
    const modalFooter = (
        <View>
            
        </View>
    )
}