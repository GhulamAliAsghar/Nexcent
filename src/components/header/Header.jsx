import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from "../../assets/Logo.png";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#f5f7fa", boxShadow: "none"}}>
                <Toolbar className='d-flex justify-content-between mx-5 pt-4'>
                    <img src={logo} alt="" />
                    <Box>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>Home</Link>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>Services</Link>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>Feature</Link>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>Product</Link>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>Testemonial</Link>
                        <Link className='mx-3 fw-bold' href="#" underline='none' color='black'>FAQ</Link>
                    </Box>
                    <Box>
                        <button className='btn text-success'>Login</button>
                        <Button sx={{ backgroundColor: "#4caf4f" , color: "white" }}>Signup</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header