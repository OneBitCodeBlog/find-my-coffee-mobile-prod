import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ListCoffees from './ListCoffees';

const Separator = () => (
  <View style={styles.separator} />
);

const NearstCoffees = (props) => {
  const [showDropdownButton, setShowDropdownButton] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => (setShowDropdownButton(!showDropdownButton))}>

        <Text style={styles.text}>Find my Coffee</Text>
        <FontAwesomeIcon icon={faHeart} color='white' style={{ marginRight: 5 }} />
        <FontAwesomeIcon icon={faAngleDown} color='white' />
      </TouchableOpacity>
      {
        showDropdownButton == true &&
        <View style={styles.nearstCoffees}>
          <Text style={styles.title}>Cafés mais amados próximos a você</Text>

          <Separator />

          <ListCoffees latitude={props.latitude} longitude={props.longitude} />
        </View>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    flex: 1,
    width: 370,
  },
  button: {
    height: 30,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 20,
  },
  nearstCoffees: {
    backgroundColor: 'black',
    width: 190,
    marginTop: 5,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    color: '#F56D50',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default NearstCoffees;