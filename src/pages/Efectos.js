import React, {useState} from 'react';
import styles from '../css/efectos.module.css'
import Slider from '../components/Slider';
import SidebarOpciones from '../components/SidebarOpciones';

const misOpciones = [
  {
    name: 'Iluminacion',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },

  {
    name: 'Contraste',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },

  {
    name: 'Blanco y negro',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Difuminacion',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function Efectos() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(misOpciones) ;
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({target}){
    setOptions(prevOptions => {
      return prevOptions.map((option,index) => {
        if (index !== selectedOptionIndex) return option
        return{...option, value: target.value}
      })
    })
  }

  function enviarEstilo(){
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit}) `
    })
    return {filter: filters.join('')}
  }

  console.log(enviarEstilo())

  return (
    <div className={styles.contenedor}>
      <div className={styles.img} style={enviarEstilo()}/>
       <div className={styles.opciones}>
        {options.map((option, index) => {
          return(
          <SidebarOpciones
            key={index}
            name={option.name}
            active = {index === selectedOptionIndex}
            handleClick = {() => setSelectedOptionIndex(index)}
          />
          )
        })}
       </div>
      <Slider
        min= {selectedOption.range.min}
        max = {selectedOption.range.max}
        value = {selectedOption.value}
        handleChange = {handleSliderChange}
      />     
    </div>
  );
}

export default Efectos;
