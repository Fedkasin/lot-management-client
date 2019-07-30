import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Text, View, StyleSheet, ImageBackground, TouchableOpacity, Linking, Image,
} from 'react-native';
import * as Colors from '../../constants/Colors';
import SelfUpdatingText from '../core/SelfUpdatingText';

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: Colors.white,
    color: Colors.gray,
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
    height: '22.5%',
  },
  imageDescriptionBlock: {
    padding: '5%',
    height: '30%',
  },
  innerText: {
    fontSize: 17,
    padding: '5%',
  },
  itemTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitleText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '500',
  },
  itemDescription: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDescriptionText: {
    color: Colors.white,
    fontSize: 16,
  },
  fetcherLogo: {
    width: 21,
    height: 21,
  },
});

class CarLotCard extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => Linking.openURL(`https://ab.onliner.by/car/${item.id}`)}>
          <ImageBackground style={styles.innerImage} source={{ uri: item.photoUrl }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'transparent']}
              style={styles.imageHeadingBlock}
            >
              <View style={styles.itemDescription}>
                <Image
                  style={styles.fetcherLogo}
                  source={require('../../../assets/images/onlinerby.png')}
                />
                <SelfUpdatingText
                  prefix="UP"
                  date={item.lastTimeUp}
                  style={styles.itemDescriptionText}
                />
              </View>
              <View style={styles.itemDescription}>
                <Text numberOfLines={1} style={styles.itemDescriptionText} />
                <SelfUpdatingText
                  prefix="CREATED"
                  date={item.creationDate}
                  style={styles.itemDescriptionText}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.5)']}
              style={styles.imageDescriptionBlock}
            >
              <View style={styles.itemTitle}>
                <Text numberOfLines={1} style={styles.itemTitleText}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.itemTitleText}>
                  {(item.car.fuel === 1) ? 'petrol ' : 'diesel '}
                  {item.car.engineCapacity}
                  {' L'}
                  {/* transmission
                  {item.car.transmission} */}
                </Text>
              </View>
              <View style={styles.itemDescription}>
                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                  {item.car.year}
                </Text>
                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                  {JSON.stringify(item.price.usd)}
                  USD
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

CarLotCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CarLotCard;
