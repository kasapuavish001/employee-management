import React, { useState } from "react";
import Dropzone from 'react-dropzone';
import { Controller } from "react-hook-form";
import FormFields from '../../Models/FormFields.json';
const DragAndDrop = ({
    name,
    control,
    type,
    setValue,
    clearErrors,
}) => {
    const Field = FormFields[name];
    const handleImageDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result.split(',')[1]; // Extract base64 part
                setValue(name, base64String);
                clearErrors(name);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Dropzone
                    onDrop={handleImageDrop}
                    accept={
                        type === 'file'
                            ? { 'application/pdf': ['.pdf'] }
                            : { 'image/png': ['.png', '.jpg', '.jpeg', '.webp'] }
                    }
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {field.value && field.value.url ? (
                                    <div>
                                        <img
                                            src={field.value.url}
                                            alt="Uploaded"
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <button type="button">Update</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Drag and drop an image here</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </Dropzone>
            )}
        />
    );
};
export default DragAndDrop;