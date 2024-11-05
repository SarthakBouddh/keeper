import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning ">
            <div className="container-md">
                <a className="navbar-brand head" to="#">Keeper</a>
            </div>
        </nav>
    )
}
