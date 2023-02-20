import { Box, Button, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { selectUser } from "redux/selectors"

export const UserMenu = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <Box sx={{display: 'flex', gap: '1rem', alignItems:'baseline'}}>
            <Typography color='secondary' variant="body1">Hello, {user.name}</Typography>
            <Button variant="contained" color="secondary" onClick={() => dispatch(logOut())}>LogOut</Button>
        </Box>
    )
}