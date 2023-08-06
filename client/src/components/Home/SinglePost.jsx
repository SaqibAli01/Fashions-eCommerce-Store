import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPosts } from "../../ReduxToolKit/postSlice";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import avatarBg from "../../images/bgAvatar.png";
import { toast } from "react-toastify";
import Loading from "../Loader/Loading";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useParams } from "react-router-dom";

const SinglePost = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedComment, setLikedComment] = useState([]);
  const [loadings, setLoading] = useState(false);
  // const [shareText, setShareText] = useState("");
  const [text, setTextValue] = useState("");

  // const [myPostId, setMyPostId] = useState();
  const { postId } = useParams();
  console.log("postId--- ", postId);

  // const SharePostData = useSelector((state) => state);

  const data = useSelector((state) => state?.user?.user?.user);
  const { posts, error } = useSelector((state) => state?.post);

  const findPostId = posts.filter((post) => post._id === postId);
  console.log("findPostId", findPostId);

  useEffect(() => {
    dispatch(getAllPosts());

    // setMyPostId(findPostId);
  }, [dispatch, data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const imageUrl = "http://localhost:8000/";

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <>
      <Loading isLoading={loadings} />
      <Container>
        {/* <Button onClick={getSinglePostHandler}>get Signle post</Button> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              boxShadow: theme.palette.background.boxShadow,
              width: { md: "70%", sm: "80%", xs: "100%" },
              py: { md: 8, sm: 6, xs: 4 },
              px: { md: 6, sm: 4, xs: 2 },
            }}
          >
            {/* <Button onClick={getAllPost}>All Post</Button> */}

            <Grid container spacing={2}>
              {[...findPostId].reverse().map((post) => (
                <Grid item xs={12} sm={6} md={8}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      {posts ? (
                        <Avatar
                          src={`${imageUrl}${post?.author?.avatar}`}
                          sx={{ width: 50, height: 50, my: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          src={avatarBg}
                          sx={{ width: 50, height: 50, my: 0.5 }}
                        />
                      )}
                      <Typography variant="h5">
                        {post?.author?.firstName} {post?.author?.lastName}
                      </Typography>
                    </Box>
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
                              display: "flex",
                              justifyContent: "space-between",
                              border: "2px solid red",
                              alignItems: "center",
                              my: 1,
                            }}
                          >
                            <Button
                              variant="gradient"
                              // onClick={(e) => getSinglePostHandler(post._id)}
                            >
                              Order
                            </Button>
                            <Box display="flex" alignItems="center">
                              <Button
                                onClick={handleDecrement}
                                variant="outlined"
                                startIcon={<RemoveIcon />}
                              />

                              <Box mx={2}>{quantity}</Box>
                              <Button
                                onClick={handleIncrement}
                                variant="outlined"
                                startIcon={<AddIcon />}
                              />
                            </Box>
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
        </Box>
      </Container>
    </>
  );
};

export default SinglePost;
