import React from 'react'

interface ButtonProps {
    className: string;
    title?: string;
    children?: any;
    onClickHandler?: any;

}
export default function Button({ className, title, children, onClickHandler }: ButtonProps) {
    return (
        <div>
            <button className={`${className}`} onClick={onClickHandler}>
                {title ? title : ''}
                {children}
            </button>
        </div >
    )
}

