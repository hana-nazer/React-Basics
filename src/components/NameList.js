import React from 'react'
import Person from './Person'

function NameList() {
const names = ['bruce','clark','diana','bruce']
    const persons = [{
        id: 1,
        name: 'jack',
        age: 20
    },
    {
        id: 2,
        name: 'jeena',
        age: 20
    }, {
        id: 3,
        name: 'jose',
        age: 60
    }
    ]
    // const personList = persons.map(person => (<Person key='id' person={person}></Person>))
    const nameList = names.map((name,index) =><h2 key={index}>{index}{name}</h2>)


    return (
        <div>
            {
                nameList
            }

        </div>
    )
}

export default NameList