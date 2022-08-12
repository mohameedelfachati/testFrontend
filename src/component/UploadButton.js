import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadButtons({ value, uploadFile }) {
    const handleUploadFile = (e) => {
        console.log(e)

        uploadFile(e.target.files[0])
    }


    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label" >
                Upload
                <input hidden accept="image/*" multiple type="file" onChange={handleUploadFile} />
            </Button>
        </Stack>
    );
}