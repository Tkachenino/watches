import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Watch = ({id, city, zone, onDelete}) => {
  const [time, setTime] = useState({hour: null, minute: null, second: null});

  const getZoneTime = (zone) => {
    const today = new Date();  
    const localoffset = -(today.getTimezoneOffset()/60);
    const offset = zone - localoffset;
    return new Date( new Date().getTime() + offset * 3600 * 1000);
  };
  
  useEffect(() => {
    const interval = setInterval(
      () => {
        const hour = getZoneTime(zone).getHours(); 
        const minute = getZoneTime(zone).getMinutes(); 
        const second = getZoneTime(zone).getSeconds(); 
        setTime({hour, minute, second});
      }
      , 1000
    );
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <h2>{city}</h2>
      <div className='Clock'>
        <div className='Hour' style={{transform: `rotate(${(time.hour % 12) * 30 }deg)`}}></div>
        <div className='Minute' style={{transform: `rotate(${time.minute * 6 }deg)`}}></div>
        <div className='Second' style={{transform: `rotate(${time.second * 6 }deg)`}}></div>
        <button className='Button' onClick={() => onDelete(id)}>X</button>
      </div>
    </div>
  )
};

Watch.propTypes = {
  id: PropTypes.string,
  city: PropTypes.string,
  zone: PropTypes.number,
  onDelete: PropTypes.func
};

export default Watch;