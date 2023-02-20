import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations"
import { FormControl, TextField, OutlinedInput, InputLabel, Box, InputAdornment, IconButton, Button } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email': setEmail(value)
                break
            case 'password': setPassword(value)
                break
            default: return
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(logIn({ email, password }))
        setEmail('')
        setPassword('')
    }

    return (
        <Box onSubmit={formSubmitHandler} component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem 0' }}>
            <TextField
                onChange={handleChange}
                required
                type="email"
                name="email"
                value={email}
                label="Email"
                placeholder="Enter your email"
            />
            <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    onChange={handleChange}
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    label="Password"
                    id="outlined-adornment-password"
                    placeholder="Enter your password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword((prev) => !prev)}
                                edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button variant="contained" type="submit">Submit</Button>
        </Box>
    )
}