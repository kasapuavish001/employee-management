import Image from "next/image";
import { useState, useEffect } from "react"
import Dropzone from 'react-dropzone'
import { Controller } from "react-hook-form";
import FormFields from '../../Models/FormFields.json'
const DragAndDrop = ({
    name,
    parent,
    control,
    type,
    styles,
    wrapper = false,
    label,
    inputWrapper = true,
    Icon = false,
    Img,
    setImg,
    airstrike,
    isDragAccept,
    setValue,
    watch,
    clearErrors
}) => {
    const Field = parent ? (FormFields[parent])[name] : FormFields[name]
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    return (
        <>
            <Controller
                isDragAccept={isDragAccept}
                control={control}
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <>
                        {
                            label &&
                            <label
                                className={styles.FormLabel}
                                htmlFor={name}
                            >{Field.label} {airstrike ? <span style={{ color: "red" }}>*</span> : ""}
                            </label>
                        }
                        <Dropzone
                            onDrop={(acceptedFiles,) => {
                                setValue(name, {
                                    type: 'local',
                                    dataType: name,
                                    data: acceptedFiles[0],
                                    url: URL.createObjectURL(acceptedFiles[0])
                                })
                                clearErrors(name)
                            }}

                            accept={
                                type === 'file' ?
                                    { 'application/pdf': ['.pdf'] } :
                                    { 'image/png': ['.png', '.jpg', '.jpeg', '.webp'] }
                            }
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section className={styles.dragbox}>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <>
                                            {
                                                watch(name)?.type ?
                                                    <>
                                                        <div className={styles.imageblock}>
                                                            <Image

                                                                fill
                                                                sizes="100"
                                                                style={{
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center',
                                                                }}
                                                                alt="png"
                                                                src=
                                                                {
                                                                    watch(name) &&
                                                                    watch(name).image ||
                                                                    watch(name)?.url
                                                                }
                                                                className={styles.image_select}
                                                            />
                                                        </div>
                                                        <button type="button" className={styles.updatebtn}>Update</button>
                                                    </>
                                                    :
                                                    <>
                                                        <>
                                                            <div className={styles.imageblock}>
                                                                <Image
                                                                    fill
                                                                    sizes="100"
                                                                    style={{
                                                                        objectFit: 'cover',
                                                                        objectPosition: 'center',
                                                                    }}
                                                                    alt="png"
                                                                    src=
                                                                    {
                                                                        Img
                                                                    }
                                                                    className={styles.image_select}
                                                                />
                                                            </div>
                                                            <button type="button" className={styles.updatebtn}>Update</button>
                                                        </>
                                                        {/* {Field.url != "" ? <Image
                                                            fill
                                                            sizes="100"
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                            }}
                                                            alt="png"
                                                            src=
                                                            {
                                                                Field.url
                                                            }
                                                            className={styles.image_select}
                                                        /> : <> <p>Drag N Drop A Img</p> {error && <p className={styles.error_msg}>{error.message}</p>}</>} */}
                                                    </>

                                            }
                                        </>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </>
                )}
            />
        </>
    )
}

export default DragAndDrop
