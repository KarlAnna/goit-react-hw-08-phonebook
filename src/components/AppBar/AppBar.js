import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { useSelector } from "react-redux";
import { Container, Box } from "@mui/material"
import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "components/Navigation/Navigation";
import { selectIsLoggedIn } from "redux/selectors";

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn)
    
    return (
        <>
            <Box sx={{display:'flex', alignItems:'baseline', justifyContent:'space-around' , padding:'0 2vw', backgroundColor:'#25a5be'}}>
                <Navigation isLoggedIn={isLoggedIn} />
                {isLoggedIn && <UserMenu />}
            </Box>
            <Container sx={{display:'flex', justifyContent:'center'}}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    )
}