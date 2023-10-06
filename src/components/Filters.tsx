// Filters.js
import React from 'react';
import { View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Filters = ({
  domainFilter,
  setDomainFilter,
  genderFilter,
  setGenderFilter,
  availabilityFilter,
  setAvailabilityFilter,
}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:5,flexWrap:'wrap',gap:10,width:'100%',paddingHorizontal:10}}>
      <View>
        <Text>Filter by Domain:</Text>
        <Picker
          selectedValue={domainFilter}
          onValueChange={(value) => setDomainFilter(value)}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="IT" value="IT" />
          <Picker.Item label="Sales" value="Sales" />
          <Picker.Item label="Management" value="Management" />
          <Picker.Item label="Finance" value="Finance" />
          <Picker.Item label="UI Designing" value="UI Designing" />
          <Picker.Item label="Business Development" value="Business Development" />
        </Picker>
      </View>
      <View>
        <Text>Filter by Gender:</Text>
        <Picker
          selectedValue={genderFilter}
          onValueChange={(value) => setGenderFilter(value)}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          {/* Add more gender options */}
        </Picker>
      </View>
      <View>
        <Text>Filter by Availability:</Text>
        <Picker
          selectedValue={availabilityFilter}
          onValueChange={(value) => setAvailabilityFilter(value)}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Available" value={true} />
          <Picker.Item label="Not Available" value={false} />
        </Picker>
      </View>


    </View>
  );
};

export default Filters;
