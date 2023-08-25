import React from 'react'
import Image from 'next/image';
import Dropzone from 'react-dropzone'
import { Controller } from "react-hook-form";
import FormFields from '../../Models/FormFields.json'

const FileDrag = (
    {
        name,
        parent, 
        inputWrapper,
        required = null,
        setValue, 
        type,
        label = true,
        errors,
        clearErrors,
        isDragAccept,
        control,
        register,
        watch,
        styles,
        info=false,
        Asterisk=false
    }) => {

    const Field = parent ? (FormFields[parent])[name] : FormFields[name]
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    // const ErrorClass = errors[name] ? styles.Error : ''
    return (
        <>
            <div className={styles.FormWrapper}>
                {
                    label && <label className={styles.FormLabel}>
                        <span>
                            {Field.label}
                        
                        </span>
                        {
                            Asterisk &&
                            <span className={styles.asterisk}>*</span>
                        }
                        </label>
                
                }
                <Controller
                    isDragAccept={isDragAccept}
                    control={control}
                    rules={{required:true}}
                    name={name}
                    render={() => (
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
                                type === 'File' &&
                                    { 'application/pdf': ['.pdf'],
                                    'application/vnd.ms-excel':['.vnd.ms-excel'] } 
                                    
                            }
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div 
                                    className={`${styles.image_block}  `}
                                >
                                    <div {...getRootProps()} className={styles.dropzone}>
                                        <input {...getInputProps()}
                                        />
                                        {
                                            type === 'File' &&
                                            <>
                                                {watch(name)?.type ?
                                                <Image width={500} height={500} alt="file" src='/images/pdf.png' className={styles.image_select} /> :
                                                <p className={styles.text}>
                                                    <span className={styles.image}>
                                                        <Image src="/images/file.png"  width={200} height={200} alt="png"/>
                                                    </span>
                                                    <span className={styles.inner_text}>
                                                        <span className={styles.upload}> 
                                                            Upload.Pdf.Doc File
                                                        </span> Click or Drag & Drop the file
                                                    </span>
                                                </p>
                                            }
                                            </>
                                        }
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    )}
                />
                {/* {errors[name] && 
                    <p className={styles.error_msg}>
                        <span>{type === 'File' ? 'File' : ""} is required</span>
                    </p>
                } */}
            </div>
        </>
    )
}

export default FileDrag