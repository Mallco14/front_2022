import { get } from "../../services";
import { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { CardProductos} from "../../components";

const Productos = () => {
  const [productos, setProducto] = useState([]);

  const getProducto = async () => {
    const result = await get("/");
    setProducto(result.data);
  };
  console.log(productos);
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div>
      <div className='navbar'>
        <center><span className='navbar__title'>Productos</span></center>
      </div>
      <Container maxWidth="xl" sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {productos.length > 0 &&
            productos.map((producto, index) => (
              <Grid xs={12} item sm={4} sx={{ padding: 2 }}>
                <CardProductos productos={producto} key={index} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Productos;