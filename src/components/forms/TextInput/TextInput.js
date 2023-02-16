import React from "react";


import cls from "../../../assets/styles/forms/Forms.module.scss";


export const TextInput = React.forwardRef(({
    type="",
    placeholder="",
    err="",
    ...rest
}, ref) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            {...rest}
            ref={ref}
            className={cls.textInput} 
        />
    )
});