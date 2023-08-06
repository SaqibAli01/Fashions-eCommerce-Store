import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../../ReduxToolKit/carts";
// import { removeFromCart } from "../../ReduxToolKit/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item._id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        // border: "1px solid red",
      }}
    >
      <Card
        sx={{
          display: "flex",
          mb: 2,
          justifyContent: "center",
          border: "1px solid #ccc",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          alt={item.name}
          height="200"
          sx={{ width: "350px" }}
          image={item.images[0]}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Size: {item.size}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {item.color}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={handleRemoveFromCart}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(
    cartItems.reduce((total, item) => total + item.price, 0)
  );

  const handleOrder = () => {
    // Handle the order process here
    console.log("Order placed!");
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        {cartItems.length === 0 ? (
          <Paper sx={{ p: 2 }}>Your cart is empty.</Paper>
        ) : (
          cartItems.map((item) => <CartItem key={item._id} item={item} />)
        )}
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Total Amount: ${totalAmount}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleOrder}
          >
            Place Order
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cart;
