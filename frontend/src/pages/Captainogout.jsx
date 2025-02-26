/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CaptainLogout = () => {
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
            }
    }).then((response) => {
        if (response.status === 200){
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })

    return (
        <div>hi</div>
    )
}

export default CaptainLogout