import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { LinearGradient, Localization } from 'expo';
import {
  Text, View, StyleSheet, ImageBackground, TouchableOpacity, Linking, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';
import t from '../../helpers/i18helper';
import SelfUpdatingText from '../core/SelfUpdatingText';

moment.locale(Localization.locale);
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
    fontFamily: 'sans',
    padding: '5%',
  },
  itemTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitleText: {
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

class HouseLotCard extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <ImageBackground style={styles.innerImage} source={{ uri: item.photo }}>
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
                  prefix="CREATED"
                  date={item.created_at}
                  style={styles.itemDescriptionText}
                />
              </View>
              <View style={styles.itemDescription}>
                <Text numberOfLines={1} style={styles.itemDescriptionText} />
                <SelfUpdatingText
                  prefix="UP"
                  date={item.last_time_up}
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
                  {item.location.address}
                </Text>
                <Text numberOfLines={1} style={styles.itemTitleText} />
              </View>
              <View style={styles.itemDescription}>
                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                  {t(item.rent_type)}
                </Text>
                <Text numberOfLines={1} style={styles.itemDescriptionText}>
                  {`${item.price.amount} ${item.price.currency}`}
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

HouseLotCard.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default HouseLotCard;
