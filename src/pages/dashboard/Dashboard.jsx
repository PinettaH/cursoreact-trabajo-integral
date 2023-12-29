import React, { useEffect } from "react";
import {
    Grid,
    Paper,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField
} from '@mui/material';
import { useSelector } from "react-redux";

const Dashboard = () => {
    const contador = useSelector(state => state.curso.contador)
    const cantidadCursos = useSelector(state => state.curso.cantidadCursos)
    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper sx={{ p: 4 }}>
                    <Box sx={{ fontSize: '20px' }}>
                        Cursos Online
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={8}>
                <Card>
                    <CardHeader title="Cantidad Cursos Activos:" />
                    <CardContent>
                        <TextField disabled id="outlined-disabled" label={cantidadCursos} variant="outlined" />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
};

export default Dashboard;
