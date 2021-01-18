import {useState} from 'react';
import {nanoid} from 'nanoid';
import Form from './components/Form';
import Watch from './components/Watch';
import './App.css';

function App() {
  const [watches, setWatches] = useState([
    {city: 'NewYork', zone: -5, id: nanoid()},
    {city: 'Moscow', zone: +3, id: nanoid()}
  ]);

  const addWatch = ({city, zone}) => {
    setWatches(watches => [...watches, {city,  zone, id: nanoid()}]);
  };

  const deleteWatch = (id) => {
    const newWatchsArray = watches.filter(watch => watch.id !== id);
    setWatches(newWatchsArray);
  };

  return (
    <div className="App">
      <Form onSubmit={addWatch}/>
      <div className='Watches'>
        {watches.map((watch) => (
          <Watch key={watch.id} id={watch.id} city={watch.city} zone={watch.zone} onDelete={deleteWatch} />
        ))}
      </div>   
    </div>
  );
}

export default App;
