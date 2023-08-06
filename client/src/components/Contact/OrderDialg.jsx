import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderDialog = ({ open, onClose, onSubmit }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState("");
  const [shippingDetails, setShippingDetails] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleSubmit = () => {
    const orderData = {
      items: items.split(",").map((item) => item.trim()),

      shippingDetails,
      totalAmount: Number(totalAmount),
    };
    onSubmit(orderData);
    navigate("/");
    onClose();
    toast.success("Order successfully");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Order Details</DialogTitle>
      <DialogContent>
        <TextField
          label="Items"
          fullWidth
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Shipping Details"
          fullWidth
          value={shippingDetails}
          onChange={(e) => setShippingDetails(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Total Amount"
          fullWidth
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        <br />
        <br />
      </DialogContent>
      <br />
      <br />
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
