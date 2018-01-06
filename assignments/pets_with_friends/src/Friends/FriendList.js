import React, { Component } from 'react'
import Friends from './Friends';
import './Friend.css';

function FriendList(props) {
    let friends = [  
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "Ppot",
              breed: "Tabby"
            },{
              name: "John Johnson",
              breed: "Husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "Persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "Fluffy",
              breed: "Spyynx cat"
            },{
              name: "Patches",
              breed: "Romanian Dragon"
            },{
              name: "Tiger",
              breed: "Lion"
            },{
              name: "Oscar",
              breed: "Frog"
            }
          ]
        }
      ];
    return(
        <section className="container">
            {friends.map((friend) => {
                return(
                    <div className="cards">
                        <Friends
                            name = {friend.name}
                            age = {friend.age}
                            pets = {friend.pets}
                            />
                    </div>
                )
            })}
        </section>
    )

}

export default FriendList;