import React from "react";

export default function Header({ title, message }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{message}</p>
        </header>
    );
}
