import {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({onSubmit}) => {
  const [{city, zone}, setData] = useState({city: '', zone: ''});

  const onCreateWatch = (e) => {
    e.preventDefault();
    onSubmit({city, zone: Number(zone)});
    console.log({city, zone: Number(zone)});
  };

  const onChangeValue = ({target}) => {
    const name = target.name;
    const value = target.value;
    
    setData(prevState => ({...prevState, [name]: value}));
  };

  return (
    <form className='Form' onSubmit={onCreateWatch}>
      <div className='InputWrapper'>
        <label htmlFor='city'>
          Название
        </label>
        <input id='city' name='city' value={city}  onChange={onChangeValue}/>
      </div>
      <div className='InputWrapper'>
        <label htmlFor='zone'>
          Временная зона
        </label>
        <input id='zone'  name='zone' value={zone}  onChange={onChangeValue}/>
      </div>
      <button> 
        Добавить
      </button>
    </form>
  )
};

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;