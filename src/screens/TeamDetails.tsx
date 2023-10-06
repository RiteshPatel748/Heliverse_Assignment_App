// TeamDetails.js
import React from 'react';
import { View, Text } from 'react-native';
import UserCard from '../components/UserCard';

const TeamDetails = ({ route }) => {
  const { teamMembers } = route.params;

  return (
    <View>
      <Text style={{fontSize:30}}>Team Details:</Text>
      <View style={{marginHorizontal:10}}>
        {teamMembers.map((member, index) => (
          <UserCard user={member} show={false}/>
        ))}
      </View>
    </View>
  );
};

export default TeamDetails;
