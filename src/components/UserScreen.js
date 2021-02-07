import React from 'react';
import { View, Text } from 'react-native'
import {connect} from 'react-redux';

const User = (props)=>{
  if(!props.user){
    return <Text>Loading... </Text>
  }
  return (
    <View style={{margin:25, padding:5, borderWidth:1, borderRadius: 5, backgroundColor:'lightblue'}}>
      <Text style={{fontSize: 14, textAlign:"center", fontWeight:"bold", margin: 5, borderBottomWidth: 1, padding: 5}}>{props.user.name}</Text>
      <Text style={{textAlign:"center", marginBottom:10 }}>{props.user.username}</Text>
      <Text>Email: {props.user.email}</Text>
      <Text>Phone: {props.user.phone}</Text>
      <Text>website: {props.user.website}</Text>
      <Text style={{fontSize: 14, fontWeight:"bold", marginTop: 15, paddingVertical: 5}}>Company</Text>
      <Text>{props.user.company.name}</Text>
      <Text style={{font:10, color:"grey"}}>{props.user.company.catchPhrase}</Text>
      <Text style={{font:10, color:"teal"}}>{props.user.company.bs}</Text>
    </View>
  )
}

function mapStateToProps(state, ownProps){
  let usersReducer = state.usersReducer
  return {
    user: usersReducer.selectedUser,
  }
}

export default connect(mapStateToProps)(User);
