import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Toolbar, List, ListItem } from "@mui/material"
import { selectIsLoggedIn } from "redux/selectors";

const StyledNavLink = styled(NavLink)`
    position: relative;
    color: #f5f5f5;
    text-decoration: none;
    @media (min-width: 768px){
        font-size: 1.07rem;
    }
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.1em;
        border-radius: 4px;
        background-color: #f5f5f5;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }
    &:hover::before, &.active::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <Toolbar component='nav' >
            <List sx={{display:'flex', flexDirection:'row', gap:'2rem'}}>
                {!isLoggedIn && 
                <>
                    <ListItem>
                        <StyledNavLink to='register'>Register</StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to='login'>Login</StyledNavLink>
                    </ListItem>
                </>
                }
                {isLoggedIn &&
                    <ListItem>
                        <StyledNavLink to='contacts'>Contacts</StyledNavLink>
                    </ListItem>
                }
            </List>
        </Toolbar>
    )
}

Navigation.propTypes = {
    isLoggedIn: PropTypes.bool
}