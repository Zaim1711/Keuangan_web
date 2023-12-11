"use client"
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import CreditCardOffRoundedIcon from '@mui/icons-material/CreditCardOffRounded';
import PaidIcon from '@mui/icons-material/Paid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import '../Dash.css';
import AccordionDash from '../component/AccordionDash';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

export default function Home(){
    return (
    <>
    <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid Grid container spacing={2}>
                            <Grid xs={8}>
                                <Stack spacing={2} direction={"row"}>
                                    <Card sx={{ minWidth: 49 + "%", height: 210 }} className="gradient">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <AddCardRoundedIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                Rp.5.000.000.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Pendapatan
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 210 }} className="gradientlight">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <CreditCardOffRoundedIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                Rp.2.375.500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Pengeluaran
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ minWidth: 220 }} className="gradientlight">
                                        <CardContent>
                                            <Stack spacing={2} direction="row" alignItems="center" >
                                                <div className="iconstyle">
                                                    <PaidIcon />
                                                </div>
                                                <div className="paddingall">
                                                    <span className="pendapatantitle">Rp.5.000.000.00</span>
                                                    <br />
                                                    <span className="pendapatansubtitle">Total Pendapatan</span>
                                                </div>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 220 }} >
                                        <CardContent>
                                            <Stack spacing={2} direction="row" alignItems="center" >
                                                <div className="">
                                                    <PaidIcon />
                                                </div>
                                                <div className="paddingall">
                                                    <span className="pendapatantitle">Rp.2.375.500.00</span>
                                                    <br />
                                                    <span className="pendapatansubtitle">Total Pengeluaran</span>
                                                </div>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid Grid container spacing={2}>
                            <Grid xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                       
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="paddingall">
                                            <span className="pendapatantitle">Data Keuangan</span>
                                        </div>
                                        Data Keuangan
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>  
    </div>     
    </>
    )
}