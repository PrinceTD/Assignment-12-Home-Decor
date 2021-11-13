import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModel = ({ open, handleClose, service }) => {
    const { name, price } = service
    const { user } = useAuth();

    const handelBookingSubmit = e => {

        alert("thank u for buying");
        handleClose()
        e.preventDefault()
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="modal-modal-title" variant="body1" component="h2">
                        ${price}
                    </Typography>

                    <form onSubmit={handelBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            id='outline-size-small'
                            defaultValue={user.displayName}
                            size='small'
                        />

                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            id='outline-size-small'
                            defaultValue={user.email}
                            size='small'
                        />
                        <TextField

                            sx={{ width: "90%", m: 1 }}
                            id='outline-size-small'
                            defaultValue="Your Adress"
                            size='small'
                        />
                        <TextField

                            sx={{ width: "90%", m: 1 }}
                            id='outline-size-small'
                            defaultValue="Your Phone Number"
                            size='small'
                        />
                        <Button sx={{ m: 1 }} variant="outlined">Confirm</Button>

                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModel;