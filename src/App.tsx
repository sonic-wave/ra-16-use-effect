import { useState, useEffect } from 'react'
import './App.css'
import { List, ListProps } from './components/List/List'
import { Details, DetailsProps } from './components/Details/Details'

function App() {
  const [persons, setPersons] = useState<ListProps[]>([])
  const [info, setInfo] = useState<DetailsProps | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
      const result = await response.json();
      setPersons(result);
    }
    fetchData();

  }, []);

  const onClickHandler = (person: ListProps) => {
    setInfo(person);
  }

  return (
    <>
      <div className='container'>
        <List persons={persons} onClickHandler={onClickHandler} />
        <Details info={info} />
      </div>
    </>
  )
}

export default App
