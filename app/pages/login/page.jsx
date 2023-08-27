"use client";
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import CustomInput from '@/app/components/customInput';
import EyeIcon from '../../../public/icons/eye.svg'
import styles from './login.module.scss'
import FormFields from '../../Models/FormFields.json'
import Image from 'next/image';

const Update = () => {

    const { setValue, reset, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = data => {
        // reset();
        console.log(data);
    }
    console.log(errors)

    const FormBuilder = [
        {
            name: 'email',
            parent: 'login',
            styles,
            control,
            type: 'email',
            label: true,
            airstrike: false,
        },
        {
            name: 'password',
            parent: 'login',
            styles,
            control,
            type: 'password',
            label: true,
            Eye: <EyeIcon />,
            airstrike: false,
        },

    ]

    return (
        <>
            <div className={styles.em_login}>
                <div className={styles.em_login_wrap}>
                    <div className={styles.em_login_header}>
                        <div className={styles.imageholder}>
                            <Image
                                src="/images/emlogo.png"
                                fill
                                sizes='200'
                                alt='logo'
                            />
                        </div>
                        <p className={styles.header_title}>Employee Management</p>
                    </div>
                    <div className={styles.em_login_mainsection}>
                        <p className={styles.title}>Login</p>
                        <p className={styles.subtitle}>Hi,Welcome back!</p>
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            {FormBuilder.map(item => {
                                return (
                                    <div className={`${styles.form_col} ${item?.full ? styles.full : ''}`} key={item.name}>
                                        <CustomInput
                                            {...item}
                                        />
                                    </div>
                                )
                            })}
                            <p className={styles.forgot}>Forgot Password?</p>
                            <div className={styles.button}>
                                <button type="submit" className={styles.btn} >Login</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Update


const schema = yup.object().shape({
    email:
        yup.string()
            .email(FormFields.login.email.errors.valid)
            .required(FormFields.login.email.errors.required),
    password:
        yup.string()
            .required(FormFields.login.password.errors.required)
            .max(40, FormFields.login.password.errors.maxLength)
            .min(3, FormFields.login.password.errors.minLength),
})