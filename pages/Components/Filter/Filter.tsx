import { FilterProps } from "./Filter.props";
import styles from './Filter.module.css';
import cn from 'classnames';
import { Container, Row, Col } from "react-grid-system";
import { SetStateAction, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import React from 'react';
import chroma from 'chroma-js';

import { GenreOption, genreOptions } from './data';
import Select, { MultiValue, StylesConfig } from 'react-select';

const colourStyles: StylesConfig<GenreOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

type Inputs = {
    example: string,
    exampleRequired: string,
  };


export const Filter = ({className, ...props}: FilterProps) => {




const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

const [selectedOptions, setSelectedOptions] = useState<MultiValue<GenreOption>>([]);

  const handleChange = (options:MultiValue<GenreOption>) => {
    setSelectedOptions(options);
  };

  const onSubmit = (formData: any, event: any) => {    
    console.log("Form Data: ", formData)
    console.log("Selected Options: ", selectedOptions) //array with selected options
 }

return(
    <div className= {cn(styles.navbar, className)} {...props}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.filter}>
          <h2 className = {styles.heading}>Genre:</h2>
            <Select
                closeMenuOnSelect={false}
                defaultValue={[]}
                isMulti
                options={genreOptions}
                styles={colourStyles}
                onChange = {handleChange}
            />
          </div>

            <input className = {cn(styles.button,styles.signup)} type={"submit"} value = {"Search"}></input>

        </form>

    </div>
)
}