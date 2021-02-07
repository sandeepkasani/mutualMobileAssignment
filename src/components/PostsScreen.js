import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Button, TouchableHighlight  } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPosts, selectPost, setUsers, selectUser} from '../actions';
import {getPosts, getUsers} from '../util/ApiUtil.js';
import {layout} from '../styles'

const Posts = (props)=>{
  const [posts, setPosts] = useState(null);

  useEffect(()=>{
    getPosts()
      .then(data => props.setPosts(data))
      .catch(err => console.log(err))
    getUsers()
      .then(data=>props.setUsers(data))
      .catch(err => console.log(err))
  },[])

  const selectPost = (postId)=>{
    props.selectPost(postId);
    props.navigation.navigate('ViewPost')
  }

  const selectUser = (userId)=>{
    props.selectUser(userId);
    props.navigation.navigate('User')
  }

  function getPost(post){
    return (
      <View key={post.id} style={{marginVertical: 3, marginHorizontal: 10, borderWidth:1, backgroundColor: 'lightgrey', padding:10}}>
        <TouchableHighlight activeOpacity={0.9} underlayColor="lightblue" onPress={()=>selectPost(post.id)}>
          <View style={{flexDirection: "row", padding: 10}}>
            <TouchableHighlight activeOpacity={0.9} underlayColor="lightblue" onPress={()=>selectUser(post.userId)} style={{flex:1}}>
              <Text>User: {props.users[post.userId].username}</Text>
            </TouchableHighlight>
            <Text style={{flex:4, paddingHorizontal: 4}}>Title: {post.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  return (
    <ScrollView>
      {
          props.posts && props.users &&
          Object.values(props.posts).map(post=>{
            return getPost(post)
          })
      }
    </ScrollView>
  )
}

function mapStateToProps(state, ownProps){
  let postsReducer = state.postsReducer;
  return {
    posts: postsReducer.posts,
    selectedPost: postsReducer.selectedPost,
    users: state.usersReducer.users
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setPosts, selectPost, setUsers, selectUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
