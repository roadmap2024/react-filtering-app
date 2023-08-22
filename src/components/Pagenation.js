import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagenation = ({ pageCount, currentPage, onChange }) => {
    

    return (
        <Stack spacing={2}>
            <Pagination 
                variant="outlined" 
                color="primary" 
                count={pageCount}
                page={currentPage}
                onChange={onChange}
            />
        </Stack>
    )
}

export default Pagenation;