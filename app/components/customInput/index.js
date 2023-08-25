"use client";
import React, { useState } from 'react'
import { Controller, set } from "react-hook-form"
import FormFields from '../../Models/FormFields.json'

const CustomInput = ({
    name,
    parent,
    control,
    type,
    styles,
    wrapper = false,
    label = true,
    inputWrapper = true,
    disabled = false,
    Icon,
    Eye,
    airstrike,
    value = true,
    arrow,
    setFocus
}) => {

    const FieldName = parent ? (FormFields[parent])[name] : FormFields[name]
    const Wrapper = wrapper ? 'div' : React.Fragment
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    const InputType = type === 'textarea' ? 'textarea' : 'input'
    const[hide,setHide] = useState(true);
    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            render={({ field, fieldState: { error } }) => {
                return (
                    <>
                        <Wrapper {...(wrapper && {className: `${styles.tp_input_wrap}  ${error ? styles.error : ''}`})}>
                            {
                                label &&
                                <label
                                    className={styles.FormLabel}
                                    htmlFor={name}
                                > {FieldName.label} {airstrike ? <span style={{ color: "red" }}>*</span> : ""}</label>
                            }
                            <InputWrapper {...(inputWrapper && {className: `${styles.InputWrapper}`})}>
                               { Icon ? <div className={styles.iconbox}>
                                    <div className={styles.icon}>
                                        {Icon}
                                    </div>
                                </div> :""}
                                <InputType 
                                    type={hide ?type : "text"}
                                    className={styles.tp_input}
                                    placeholder={FieldName.placeholder}
                                    disabled={disabled}
                                    {...field}
                                    value={field?.value || ''}
                                />
                             { Eye ? <div className={styles.eyeicon}  onClick={()=>{setHide(!hide)}}>
                                    <div className={styles.icon}>
                                        {Eye}
                                    </div>
                                </div> :""}
                            </InputWrapper>
                            {error && <p className={styles.error_msg}>{error.message}</p>}
                        </Wrapper>
                    </>
                )
            }}
        />
    )
}
export default CustomInput
