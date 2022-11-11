import { Box } from "@mui/material";
import Posts from "./posts";

const Feed = () => {

    return (
        <Box flex={4} p={2} gap="100px">
            <Posts/>
            <Posts/>
            <Posts/>
        </Box>
    )
}
export default Feed;