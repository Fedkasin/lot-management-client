import React from 'react';
import {
  View, StyleSheet, Text, Platform, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import IonIcon from '../core/IonIcon';

import * as Colors from '../../constants/Colors';

function houseJob({
  index, item, onPlayPause, onClose, iosIcon, otherIcon, isEditing,
}) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: Colors.silver,
      borderBottomWidth: 1,
      backgroundColor: Colors.silver,
      marginBottom: 20,
      borderRadius: 9,
      height: 150,
    },
    job: {
      fontSize: 16,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 5,
      flexDirection: 'row',
    },
    jobButtons: {
      display: 'flex',
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.job}>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          borderRightColor: Colors.lightGray,
          borderRightWidth: 1,
          padding: 6,
          height: 120,
          width: 120,
        }}
        >
          <Image
            style={{ width: 100, height: 30 }}
            source={require('../../../assets/images/onlinerby.png')}
          />
          <Text style={{ fontWeight: '500', marginTop: 10, color: Colors.gray }}>
            #
            { index }
          </Text>
          <TouchableOpacity
            onPress={() => console.log('heyy')}
            style={{
              backgroundColor: Colors.lightGray,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 85,
              height: 30,
              borderRadius: 6,
              marginTop: 12,
            }}
          >
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'}
              color={Colors.gray}
            />
            <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.white }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', height: 80 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.gray,
            marginLeft: 9,
          }}
          >
            PRICE
          </Text>
          <View style={{
            width: 110,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          >
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
              color={Colors.gray}
            />
            <Text style={{ color: Colors.gray, fontSize: 16, fontWeight: '500' }}>
              { item.params.min }
              -
              { item.params.max }
            </Text>
          </View>
          <View style={{ flexDirection: 'column', marginTop: 9 }}>
            <Text style={{
              color: Colors.gray,
              fontSize: 16,
              fontWeight: '500',
              paddingLeft: 9,
            }}
            >
              FOUND
            </Text>
            <View style={{
              width: 110,
              height: 35,
              marginLeft: 9,
              marginTop: 6,
              flexDirection: 'row',
            }}
            >
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                color={Colors.gray}
              />
              <Text style={{ color: Colors.gray, fontSize: 16, fontWeight: '500' }}>
                { item.apartments.onliner.apartments.length }
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', height: 80 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.gray,
            marginLeft: 9,
          }}
          >
            ROOMS
          </Text>
          <View style={{
            width: 70,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          >
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
              color={Colors.gray}
            />
            <Text style={{ color: Colors.gray, fontSize: 16, fontWeight: '500' }}>
              { item.params.rooms.toString() }
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.jobButtons}>
        <TouchableOpacity
          style={{ padding: 5, marginRight: 5 }}
          onPress={onPlayPause}
        >
          <IonIcon
            name={Platform.OS === 'ios' ? iosIcon : otherIcon}
            color={Colors.gray}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 5, display: isEditing ? 'flex' : 'none' }}
          onPress={onClose}
        >
          <IonIcon
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

houseJob.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default houseJob;
