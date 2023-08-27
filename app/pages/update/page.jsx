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
    // const onSubmit = data => {

    //     // reset()
    //     console.log(data)   
    // }

    const onSubmit = async data => {

        console.log(data, 'data');
        try {
            const response = await fetch('http://192.168.1.12:9999/employee/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Make sure the structure of "data" matches the server's expectations
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                reset(); // Reset the form on successful submission
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    console.log(errors)

    const FormBuilder = [
        {
            name: 'imageBase64',
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
            name: 'firstName',
            parent: 'update',
            styles,
            control,
            type: 'text',
            label: true,
            airstrike: false,
        },
        {
            name: 'lastName',
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
            name: 'phoneNumber',
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
            name: 'doj',
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
    firstName:
        yup.string()
            .required(FormFields.update.firstName.errors.required),
    lastName:
        yup.string()
            .required(FormFields.update.lastName.errors.required),
    phoneNumber:
        yup.string()
            .required(FormFields.update.phoneNumber.errors.required),
    department:
        yup.string()
            .required(FormFields.update.department.errors.required),
    role:
        yup.string()
            .required(FormFields.update.role.errors.required),
    doj:
        yup.string()
            .required(FormFields.update.doj.errors.required),
    salary:
        yup.string()
            .required(FormFields.update.salary.errors.required),
})