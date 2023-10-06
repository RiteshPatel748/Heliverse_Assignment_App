import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

type buttonType=
{
    onPress?:any;
    title?:String;
    style?:Object;
}

const Button =({onPress,title,style}:buttonType)=>{
    return(
        <TouchableOpacity 
            style={[{borderWidth:1,borderRadius:10,padding:10,justifyContent:'center',
                     alignItems:'center',backgroundColor:'#318CE7',margin:10,},style]} 
            onPress={onPress}>
            <Text style={{color:'#fff'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;