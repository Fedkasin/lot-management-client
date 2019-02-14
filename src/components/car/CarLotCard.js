import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import {
  Text, View, StyleSheet, ImageBackground,
} from 'react-native';

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
    height: '18%',
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
  },
});

class CarLotCard extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.item}>
        <ImageBackground style={styles.innerImage} source={{ uri: 'https://content.onliner.by/automarket/456974/800x800/0510d6cd493c7dda740d767df5b12294.jpeg' }}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'transparent']}
            style={styles.imageHeadingBlock}
          >
            <View style={styles.itemDescription}>
              <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                Oleg Terpilov
              </Text>
              <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                20 minutes ago
              </Text>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.5)']}
            style={styles.imageDescriptionBlock}
          >
            <View style={styles.itemTitle}>
              <Text numberOfLines={1} style={styles.itemTitleText}>
                                Toyota Corolla
              </Text>
              <Text numberOfLines={1} style={styles.itemTitleText}>
                                X (E140, E150)
              </Text>
            </View>
            <View style={styles.itemDescription}>
              <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                2008
              </Text>
              <Text numberOfLines={1} style={styles.itemDescriptionText}>
                                9000$
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.innerText}>{item.title}</Text>
      </View>
    );
  }
}

CarLotCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CarLotCard;
