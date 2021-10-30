import { AppBar, Grid, Toolbar, Button} from '@material-ui/core';
import React from 'react'
import Product from './Product/Product';
import useStyles from "./styles";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
    {id: 2, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
    {id: 3, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
    {id: 4, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
    {id: 5, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
    {id: 6, name: 'Shoes', description: 'Running shoes', price: 'Rs 5'},
]

const Sell = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="sticky" style={{background:"whitesmoke"}}>
            <Toolbar>
                <div style={{marginLeft: "auto"}}>
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                </div>
            </Toolbar>
            </AppBar>
            <main className={classes.content} style={{marginTop: "auto"}}>
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
    )
}

export default Sell;
