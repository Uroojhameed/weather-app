import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBar({setLocation}) {
    const [value,setValue] = useState('')
    const handleSubmit = ()=>{
            setLocation(value)
    } 
    return (
        <div className="search">
            <TextField onChange ={(e)=> setValue(e.target.value)}  id="standard-basic" label="Location" value={value} style={{ width: '300px' }} />
            <Button onClick ={handleSubmit} variant="outlined" color="primary" className="search-btn">Search Tempo</Button>
        </div>
    )
}
