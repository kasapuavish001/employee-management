"use client";
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import CustomInput from '@/app/components/customInput';
import DragAndDrop from '@/app/components/DragAndDrop';
import styles from './update.module.scss'
import FormFields from '../../Models/FormFields.json'

const Update = () => {

    const { setValue, reset, watch, control, handleSubmit, isDragAccept, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = data => {
        reset()
        console.log(data)
    }
    console.log(errors)

    const FormBuilder = [
        {
            name: 'image',
            parent: 'update',
            styles,
            control,
            type: 'image',
            label: false,
            airstrike: false,
            watch,
            setValue,
            isDragAccept: false,
        },
        {
            name: 'first_name',
            parent: 'update',
            styles,
            control,
            type: 'text',
            label: true,
            airstrike: false,
        },
        {
            name: 'last_name',
            parent: 'update',
            styles,
            control,
            type: 'text',
            label: true,
            airstrike: false,
        },
        {
            name: 'email',
            parent: 'update',
            styles,
            control,
            type: 'email',
            label: true,
            airstrike: false,
        },
        {
            name: 'phone_number',
            parent: 'update',
            styles,
            control,
            type: 'number',
            label: true,
            airstrike: false,
        },
        {
            name: 'department',
            parent: 'update',
            styles,
            control,
            type: 'text',
            label: true,
            airstrike: false,
        },
        {
            name: 'role',
            parent: 'update',
            styles,
            control,
            type: 'text',
            label: true,
            airstrike: false,
        },
        {
            name: 'date_of_join',
            parent: 'update',
            styles,
            control,
            type: 'date',
            label: true,
            airstrike: false,
        },
        {
            name: 'salary',
            parent: 'update',
            styles,
            control,
            type: 'number',
            label: true,
            airstrike: false,
        },

    ]
    const [Img, SetImg] = useState("");

    useEffect(() => {
        SetImg("/images/emlogo.png");
    })

    return (
        <>
            <div className={styles.em_update}>
                <div className={styles.em_update_wrap}>
                    <p className={styles.title}>Update Details</p>
                    <div className={styles.mainsection}>
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            {FormBuilder.map(item => {
                                return (
                                    <div className={`${styles.form_col} ${item?.full ? styles.full : ''}`} key={item.name}>
                                        {item.type == "image" ?
                                            <>
                                                <div className={styles.imageholder}>
                                                    <DragAndDrop Img={Img} SetImg={(SetImg)} {...item} />
                                                </div>
                                            </> :
                                            <CustomInput
                                                {...item}
                                            />
                                        }
                                    </div>
                                )
                            })}
                            <div className={styles.button}>
                                <button type="submit" className={styles.btn} >Update</button>
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
            .email(FormFields.update.email.errors.valid)
            .required(FormFields.update.email.errors.required),
    first_name:
        yup.string()
            .required(FormFields.update.first_name.errors.required),
    last_name:
        yup.string()
            .required(FormFields.update.last_name.errors.required),
    phone_number:
        yup.string()
            .required(FormFields.update.phone_number.errors.required),
    department:
        yup.string()
            .required(FormFields.update.department.errors.required),
    role:
        yup.string()
            .required(FormFields.update.role.errors.required),
    date_of_join:
        yup.string()
            .required(FormFields.update.date_of_join.errors.required),
    salary:
        yup.string()
            .required(FormFields.update.salary.errors.required),
})