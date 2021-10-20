import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./styles";

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='./shoes.jpg' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default Product;
