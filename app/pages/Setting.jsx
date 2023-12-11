"use client"
import Box from '@mui/material/Box';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

export default function Setting() {
    return (
        <>
        <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Setting</h1>
                </Box>
            </Box>
        </>
    )
}