import React from 'react';
import style from './FormsControls.module.css'
import {Field} from "redux-form";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={style.form_control + " " + (hasError ? style.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <input {...input} {...restProps} type="text"/>
};

export const createField = (placeholder, name, validators, component, props={}, text='') => {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component}
               {...props}/>
        {text}
    </div>
}