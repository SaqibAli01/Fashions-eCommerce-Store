import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../ReduxToolKit/postSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Loading from "../Loader/Loading";
// import { addToCart } from "../../ReduxToolKit/cartSlice";
import { toast } from "react-toastify";
import { addToCart } from "../../ReduxToolKit/carts";
// import { addToCart } from "../../ReduxToolKit/cartSlice";
// import { addToCarts } from "../../ReduxToolKit/carts";

const PostList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //______________________________like__________________________________

  // _______________Loading State________________
  const [loadings, setLoading] = useState(false);
  // const [shareText, setShareText] = useState("");

  // const data = useSelector((state) => state?.user?.user?.user);

  const { posts, error, loading } = useSelector((state) => state?.post);
  console.log("posts---", posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  //----------------get Single Post ----------------
  const getSinglePostHandler = (post) => {
    // navigate("/singlePost");
    // alert(postId);
    // navigate(`/singlePost/${postId}`);
    toast.success("Successfully Add To Card");
    dispatch(addToCart(post));
  };
  //-------------------------------Share Post -------------------------------

  return (
    <>
      <Loading isLoading={loadings} />

      <Box sx={{ p: 2, width: "100%" }}>
        <Grid container spacing={2}>
          {[...posts].reverse().map((post) => (
            <Grid item xs={12} sm={4} md={4}>
              <Box>
                <Box
                  sx={{
                    // border: "1px solid red",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                >
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      image={post.images}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Name : {post?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        category : {post?.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description :{post?.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price :{post?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color :{post?.color}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size :{post?.size}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Stock :{post?.stock}
                      </Typography>
                      <Box
                        sx={{
                          my: 2,
                        }}
                      >
                        <Button
                          variant="gradient"
                          onClick={(e) => getSinglePostHandler(post)}
                        >
                          Add To Card
                        </Button>
                      </Box>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button> */}
                    </CardActions>
                  </Card>
                </Box>

                {/* card */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PostList;
