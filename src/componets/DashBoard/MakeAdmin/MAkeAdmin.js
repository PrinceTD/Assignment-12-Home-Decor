import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MAkeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess]=useState(false)

    const handelOnBule = e => {
        setEmail(e.target.value);
       
    }
    const handelAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    console.log(data);
                  
                    setSuccess(true)
                }
            })

            e.preventDefault();
    }
    return (
        <div>

            <h2>Make Admin</h2>
            <form onSubmit={handelAdmin}>
                <TextField
                sx={{width: '50%'}}
                    id="standard-basic"
                    label="Email"
                   
                    variant="standard"
                    type='email'
                    onBlur={handelOnBule} />
                <Button type="submit" variant="contained"> Submit</Button>
            </form>
            {
                success && <Alert severity='success'>successfully added</Alert>
            }
        </div>
    );
};

export default MAkeAdmin;