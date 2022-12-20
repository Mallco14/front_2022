import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
  } from "@mui/material";
  const CardProductos = ({ productos }) => {
    return (
        <>
            
            <Box>
                <Card
                    sx={{
                    display: "flex",
                    height: 400,
                    marginBottom: '10px',
                    backgroundColor: "white",
                    }}>
                    <CardMedia
                    component="img"
                    image={productos.img}
                    height={500}
                    sx={{
                        width: '45%',
                        height: '400px',
                    }}
                    />
                    <CardContent>
                    <Box>
                        <Typography >
                            <h4>Nombre del producto :</h4>{productos.nombre}</Typography>
                        <Typography ><h4>Cantidad del producto :</h4>{productos.cantidad}</Typography>
                        <Typography ><h4>Precio del producto :</h4>{productos.precio}</Typography>
                        <Typography ><h4>Distribuidora del producto :</h4>{productos.distribuidor}</Typography>
                    </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
      
    );
  };
  
  export default CardProductos;