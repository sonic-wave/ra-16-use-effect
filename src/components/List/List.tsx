import React from 'react'
import './List.css'

export interface ListProps {
    id: number,
    name: string
}

export const List: React.FC<{persons: ListProps[], onClickHandler: (object: ListProps) => void }> = ({persons, onClickHandler}) => {
  return (
    <div className='list-container'>
        {persons.map((person => (
            <div className='list-component' key={person.id} onClick={() => onClickHandler(person)}>{person.name}</div>
        )))}
    </div>
  )
}
