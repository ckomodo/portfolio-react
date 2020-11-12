import React from 'react';
import "./style.css";

export default function Background(props) {
    return (
        <div className="portfolioBg">
            {props.children}
        </div>
    )
}
