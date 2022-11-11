import Button from "@mui/material/Button"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"
import { purple } from '@mui/material/colors'
import { styled } from '@mui/material/styles';
// import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress, Typography } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"


const IntroToMUI = () => {
    const [a, setA] = useState(true)

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));


    return (
        <>

            <Button variant="contained" component="label">
                Upload
                <PhotoCamera />

            </Button>

            <Button variant="contained" color="secondary">
                <AddShoppingCartIcon />
            </Button>

            <Button size="larger" variant="contained" color="error">
                <DeleteIcon color="success" size="larger" />
            </Button>

            <ColorButton variant="contained">Custom CSS</ColorButton>

            <Typography variant="h1" component="p">
                It uses h1 styles but its a p tag
            </Typography>


            <Button variant="contained" onClick={() => { setA(false) }}>
                {a ? <>SEND &nbsp; <SendIcon /> </> : <CircularProgress sx={{ color: 'white' }} />}
            </Button>
            <Button onClick={() => { setA(true) }} variant="contained" sx={{ backgroundColor: "skyblue", border: 1 }}>
                CANCEL
            </Button>
        </>


    )
}
export default IntroToMUI;