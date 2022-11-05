import React from 'react'
import styles from '../css/efectos.module.css'

export default function Slider({min, max, value, handleChange}){
    return(
        <div className={styles.sliderContenedor}>
            <input 
            type="range"
            className={styles.escala} 
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            />
        </div>
    )
}

