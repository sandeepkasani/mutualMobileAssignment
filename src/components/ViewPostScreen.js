import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

const Post = (props)=>{

  if(!props.selectedPost){
    return <Text>Loading... </Text>
  }
  return (
    <View style={{margin:25, padding:5, borderWidth:1, borderRadius: 5, backgroundColor:'lightblue'}}>
      <Text style={{textAlign:"center"}}>id: {props.selectedPost.userId}</Text>
      <Text style={{fontSize: 14, textAlign:"center", fontWeight:"bold", margin: 5, borderBottomWidth: 1, padding: 5}}>Title: {props.selectedPost.title}</Text>
      <Text>{props.selectedPost.body}</Text>
    </View>
  )
}


function mapStateToProps(state, ownProps){
  let postsReducer = state.postsReducer;
  let usersReducer = state.usersReducer
  return {
    selectedPost: postsReducer.selectedPost,
    users: usersReducer.users
  }
}

export default connect(mapStateToProps)(Post);
