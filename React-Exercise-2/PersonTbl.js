import React from 'react';

function PersonTbl({people,editAction,removeAction}){

    let stuff;
    if(people.length > 0){
        stuff = people.map(function(person,i){
            return (
                <tr key={i}>
                    <td className='name-porstion'>{person.firstName}</td>
                    <td className='name-porstion'>{person.lastName}</td>
                    <td><button className='EditBtn' onClick={()=>{editAction(i)}}>Edit</button></td>
                    <td><button className='RemoveBtn' onClick={()=>{removeAction(i)}}>Remove</button></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table cellSpacing="15px">
                <thead>
                    
                </thead>
                <tbody>
                    {stuff}
                </tbody>
            </table>
        </div>
    )
}

export default PersonTbl;