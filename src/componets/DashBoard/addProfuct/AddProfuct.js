import React from "react";
import {
    Alert,
    Button,
    Container,
    Grid,
    Snackbar,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import "./AddNewProduct.css";
const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = React.useState(false);

    const onSubmit = (data) => {
        fetch("https://tranquil-ridge-16978.herokuapp.com/product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
        });
        setOpen(true);
        reset();
    };

    //

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={8} sm={10} sx={{ mx: "auto" }}>
                    <Box sx={{ p: 4, my: 3 }} className="add-new-product">
                        <Typography variant="h2" sx={{ my: 2 }}>
                            Add a new Product
                        </Typography>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <input
                                {...register("name")}
                                type="text"
                                required
                                placeholder="name"
                            />
                            <input
                                {...register("details")}
                                type="text"
                                required
                                placeholder="details"
                            />
                           
                            <input
                                {...register("price")}
                                type="number"
                                required
                                placeholder="Price"
                            />
                            
                           
                           
                            <input
                                {...register("img")}
                                type="text"
                                required
                                placeholder="Image URL"
                            />
                            <Button type="submit" variant="contained">
                                Add Product
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%", fontSize: "1.2rem" }}
                >
                    Product Added successfully!
                </Alert>
            </Snackbar>
            ;
        </Container>
    );
};
export default AddNewProduct;
