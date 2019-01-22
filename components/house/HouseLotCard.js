import React from 'react';
import moment from 'moment';
import { LinearGradient } from 'expo';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        paddingBottom: 30,
        marginTop: 10,
        backgroundColor: '#fefff9',
        color: '#363636',
        borderRadius: 4,
    },
    innerImage: {
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageHeadingBlock: {
        padding: '5%',
        height: '18%'
    },
    imageDescriptionBlock: {
        padding: '5%',
        height: '30%'
    },
    innerText: {
        fontSize: 17,
        fontFamily: 'sans',
        padding: '5%'
    },
    itemTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitleText: {
        color: '#e8ffff',
        fontSize: 24,
        fontWeight: '500',
    },
    itemDescription: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemDescriptionText: {
        color: '#e8ffff',
        fontSize: 16,
    }
});

export default class HouseLotCard extends React.PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => Linking.openURL(this.props.item.url)}>
                    <ImageBackground style={styles.innerImage} source={{ uri: this.props.item.photo }}>
                        <LinearGradient
                            colors={['rgba(0,0,0,0.5)', 'transparent']}
                            style={styles.imageHeadingBlock}>
                            <View style={styles.itemDescription}>
                                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                    ANALner
                                </Text>
                                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                    {moment(this.props.item.last_time_up).fromNow()}
                                </Text>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.5)']}
                            style={styles.imageDescriptionBlock}>
                            <View style={styles.itemTitle}>
                                <Text numberOfLines={1} style={styles.itemTitleText}>
                                    {this.props.item.location.address}
                                </Text>
                                <Text numberOfLines={1} style={styles.itemTitleText}>

                                </Text>
                            </View>
                            <View style={styles.itemDescription}>
                                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                    { this.props.item.rent_type }
                                </Text>
                                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                    {this.props.item.price.amount}
                                </Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                    {/*<Text style={styles.innerText}>{this.props.item.title || "В 2019 ГОДУ ПУТИН ЗАПРЕТИТ РОССИЯНАМ ПОКУПАТЬ... ЧИТАТЬ ПРОДОЛЖЕНИЕ"}</Text>*/}
                </TouchableOpacity>
            </View>
        );
    }
}
