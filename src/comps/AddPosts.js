
import { Fab, IconButton, Tooltip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modaling from './Modal';
import { useState } from 'react';

const AddPosts = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(80%)", md: 20 } }}>
                <Fab onClick={() => { setModalOpen(true) }}>
                    <AddCircleOutlineIcon />
                </Fab>
            </Tooltip>
            <Modaling modalState={modalOpen} modalStateHandler={setModalOpen} />
        </>
    )
}
export default AddPosts;