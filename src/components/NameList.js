import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = persons.map(person => (<Person key='id' person={person}></Person>))

    return (
        <div>
            {
                personList
            }

        </div>
    )
}

export default NameList