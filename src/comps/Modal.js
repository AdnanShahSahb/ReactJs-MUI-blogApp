import { Avatar, Box, Button, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import CollectionsIcon from '@mui/icons-material/Collections';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Modaling = (props) => {

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

        // backgroundColor:"black", color:"white"
    };

    const handleClose = () => {
        props.modalStateHandler(false)
    }




    return (
        <Box borderRadius={10} >
            <Modal
                open={props.modalState}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} borderRadius={4} >
                    <Typography id="modal-modal-description" variant="h6" color="gray" textAlign="center" component="h2" sx={{ m: 3, marginTop: 0 }}>
                        Create Post
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                        <Avatar alt="Travis Howard" src="asseting/asdf.png" />
                        <Typography>Sir/Maam</Typography>
                    </Box>
                    <TextField
                        id="standard-multiline-static"
                        sx={{ width: "100%" }}
                        multiline
                        rows={4}
                        placeholder="Whats on your mind.."
                        variant="standard"
                    />

                    <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
                        <EmojiEmotionsIcon />
                        <PhotoCameraFrontIcon />
                        <CollectionsIcon />
                        <PersonAddIcon />
                    </Stack>

                    <Button variant="contained" component="label" sx={{ width: '100%', marginTop: "30px" }}>
                        Upload
                    </Button>
                </Box>



            </Modal>
        </Box>
    )
}
export default Modaling;