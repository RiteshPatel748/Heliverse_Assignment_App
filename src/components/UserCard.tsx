// UserCard.js
import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Button from './Button';

type userCardType=
{
  user?:Object;
  onPress?:any;
  show?:boolean;
}
const UserCard = ({ user,onPress,show=true}:userCardType) => {

  return (
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
                  margin:10,width:'100%',padding:10,borderWidth:1,
                  borderRadius:10,alignSelf:"center"
    }}> 
      <Image source={{ uri: user?.avatar }} style={{width:60,height:60,}}/>
      <View  style={{flex:1}}>
        <Text style={{fontSize:21}}>{user?.first_name} {user?.last_name}</Text>
        <Text style={{fontSize:15}}>Email: {user?.email}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:12}}>Domain: {user?.domain}</Text>
        <Text style={{fontSize:12}}>Gender: {user?.gender}</Text>
      </View>
      {user?.available&&show&&<Button
        title={`Add To Team`}
        onPress={() => onPress(user)}
      />}
      </View>
    </View>
  );
};

export default UserCard;
