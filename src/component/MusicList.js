import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function MusicList({navigation}) {
    const [CategoryList, setCategoryList] = useState([])
    useEffect(()=>{
        getAudioCategory()
    },[])
    const getAudioCategory=()=>{
        fetch('http://veepal.co.in/savitri-mission/category/get_all_category', {
      headers: {
        'Cookie': 'ci_session=898abadd3c6236dd0edba20324bf09ea441d0f91',
      },
    })
    .then(res=>res.json())
    .then(res=>setCategoryList(res?.data))
    .catch(error=>console.log(error))
    }
const renderItem=({item,index})=>{
    return(
        <TouchableOpacity style={{
            flexDirection:'row',
            marginTop:10
            // padding:10
        }}
        onPress={()=>{navigation.navigate('PlayMusic',{id:item.catId})}}>
            
            <Image style={{height:60,width:60}} resizeMode='cover' source={{uri:item.catImg}}/>
            <Text style={{marginLeft:20,fontWeight:'600',alignSelf:'center'}}>{item.catName}</Text>
        </TouchableOpacity>
    )
}
  return (
    <View>
      <FlatList
       data={CategoryList}
       renderItem={renderItem}
      />
    </View>
  )
}