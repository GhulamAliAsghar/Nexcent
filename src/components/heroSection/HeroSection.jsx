import React from 'react'
import { AppBar, Box, Button, colors, IconButton, Link, Toolbar, Typography } from '@mui/material'
import heroimg from "../../assets/Illustration.png"


const HeroSection = () => {
    return (
        <>
            <div className='px-5 container-fluid pt-5' style={{ backgroundColor: "#f5f7fa", height: "100vh" }}>
                <div className='row pt-5'>
                    <div className='col-sm-12 col-md-6 col-lg-6 ps-lg-5'>
                        <div className='pt-5'>
                            <Typography variant='h3' className='fw-bold mt-lg-5' sx={{ color: "#4caf4f" }}>
                                <span className='text-black'> Lessons And Insights</span> <br />From 8 Years
                            </Typography>
                            <p>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                            <Button sx={{ backgroundColor: "#4caf4f", color: "white" }}>Register</Button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 text-center'>
                        <img className='img-fluid' src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection