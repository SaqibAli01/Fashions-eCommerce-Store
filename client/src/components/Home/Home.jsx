import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputBase,
  useTheme,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loading";
import { useDispatch, useSelector } from "react-redux";
import avatarBg from "../../images/bgAvatar.png";
import { createPost, getAllPosts } from "../../ReduxToolKit/postSlice";
import { toast } from "react-toastify";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const categories = ["clothing", "shoes", "accessories", "other"];
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // _______________Loading State________________
  const [loading, setLoading] = useState(false);

  // _______________
  const [F_Name, setFName] = useState("");
  const [L_Name, setLName] = useState("");
  const [imgAvatar, setImgAvatar] = useState();
  //loadings, error,
  // const { user, successMessage } = useSelector((state) => state.user);
  const data = useSelector((state) => state?.user?.user?.user);
  useEffect(() => {
    setFName(data?.firstName);
    setLName(data?.lastName);
    setImgAvatar(data?.avatar);
  }, [data]);

  const imageUrl = "http://localhost:8000/";

  const [image, setImage] = useState(null);
  // const [file, selectedFile] = useState(null);
  const [text, setTextValue] = useState("");

  const [file, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(""); // Added to keep track of the file type
  // console.log("file: " + file);

  const [filePreview, setFilePreview] = useState(""); // Added to keep track of the file preview

  // const handleFileChange = (event) => {
  //   const myFile = event.target.files[0];

  //   if (myFile) {
  //     console.log("File name:", myFile.name);
  //     console.log("File type:", myFile.type);
  //     console.log("File size:", myFile.size, "bytes");
  //   }
  //   setSelectedFile(myFile);
  //   if (myFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setFilePreview(reader.result);
  //     };
  //     reader.readAsDataURL(myFile);

  //     // Determine the file type
  //     if (myFile.type.startsWith("image")) {
  //       setFileType("image");
  //     } else if (myFile.type.startsWith("video")) {
  //       setFileType("video");
  //     } else if (myFile.type === "application/pdf") {
  //       setFileType("pdf");
  //     } else {
  //       // Handle other file types if needed
  //       setFileType("unknown");
  //     }
  //   }
  // };

  //create product
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [imgFile, setImgFile] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
    // //img show
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => setShowImage(reader.result);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", imgFile);

    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log("Form data:", data);
    await dispatch(createPost(formData));

    navigate("/about");

    setTimeout(() => {
      setTextValue("");
      dispatch(getAllPosts());
      setLoading(false);
    }, 3000);
  };

  // const handleFileChange = (event) => {
  //   const myFile = event.target.files[0];
  //   selectedFile(myFile);
  //   if (myFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(myFile);
  //   }
  // };

  //agr serf image ko upload krna ho
  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   selectedFile(selectedFile);

  //   if (!selectedFile.type.includes("image")) {
  //     toast.error("Please select a image");
  //   }

  //   if (selectedFile && selectedFile.type.includes("image")) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //     setImage(null);
  //   }
  // };

  const handleClearImage = () => {
    setImage(null);
  };

  // const handleSubmit = () => {
  //   setLoading(true);
  //   if (!text || !file) {
  //     toast.success("Kindly Selected  Text or File");
  //     setLoading(false);
  //     return;
  //   }
  //   // const formData = new FormData();
  //   // formData.append("text",text);
  //   // formData.append("file",selectedFile)

  //   dispatch(createPost({ text, file }));

  //   setTimeout(() => {
  //     setTextValue("");
  //     setImage(null);
  //     setLoading(false);
  //     dispatch(getAllPosts());
  //   }, 3000);
  // };

  return (
    <>
      <Loading isLoading={loading} />
      <Container>
        {/* <Container maxWidth="md"> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: 2,
            // border: "5px solid red",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                maxWidth: "sm",
                boxShadow: theme.palette.background.boxShadow,
                p: 3,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  py: 2,
                  fontWeight: "bold",
                }}
              >
                Create Product
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Product name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Product Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Category</InputLabel>
                    <Controller
                      name="category"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Category is required" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Category"
                          error={!!errors.category}
                        >
                          {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Price is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="number"
                        label="Price"
                        variant="outlined"
                        fullWidth
                        error={!!errors.price}
                        helperText={errors.price?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="color"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Color is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Color"
                        variant="outlined"
                        fullWidth
                        error={!!errors.color}
                        helperText={errors.color?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="size"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Size is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Size"
                        variant="outlined"
                        fullWidth
                        error={!!errors.size}
                        helperText={errors.size?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="stock"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Stock is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="number"
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        error={!!errors.stock}
                        helperText={errors.stock?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <input type="file" {...register("file")} /> */}

                  <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Home;

// {
//   /* <Box
//             sx={{
//               boxShadow: theme.palette.background.boxShadow,
//               // width: { md: "70%", sm: "80%", xs: "100%" },
//               py: { md: 8, sm: 6, xs: 4 },
//               px: { md: 6, sm: 4, xs: 2 },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 // alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 gap: 3,
//                 // border: "1px solid red",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 3,
//                   px: 2,
//                   // flexDirection: "column",
//                 }}
//               >
//                 {imgAvatar ? (
//                   <Avatar
//                     src={`${imageUrl}${imgAvatar}`}
//                     sx={{ width: 50, height: 50, my: 2 }}
//                   />
//                 ) : (
//                   <Avatar
//                     src={avatarBg}
//                     sx={{ width: 60, height: 60, my: 2 }}
//                   />
//                 )}

//                 <InputBase
//                   placeholder={`What on your Mind, ${
//                     data ? ` ${F_Name} ${L_Name} ` : "?"
//                   }`}
//                   value={text}
//                   onChange={(e) => setTextValue(e.target.value)}
//                   sx={{
//                     background: theme.palette.background.grayBg,
//                     border: `1px solid ${theme.palette.background.borderLight}`,
//                     px: 5,
//                     borderRadius: "20px",
//                     width: "100%",
//                     py: 0.7,
//                   }}
//                 />
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 5,
//                 }}
//               >

//                 {image ? (
//                   <Box>

//                     {fileType === "image" && (
//                       <img
//                         src={filePreview}
//                         alt="Selected"
//                         style={{ width: "200px" }}
//                       />
//                     )}
//                     {fileType === "video" && (
//                       <video
//                         src={filePreview}
//                         controls
//                         style={{ width: "200px" }}
//                       />
//                     )}
//                     {fileType === "pdf" && (
//                       <embed src={filePreview} width="200px" height="200px" />
//                     )}
//                     <br />
//                     <Button onClick={handleClearImage}>Clear Image</Button>
//                   </Box>
//                 ) : (

//                   <div>
//                     <FormControl>
//                       <Input
//                         id="file-input"
//                         type="file"
//                         accept=".jpg, .jpeg, .png, .pdf, .mp4"
//                         onChange={handleFileChange}
//                         style={{ display: "none" }}
//                       />
//                       <Button
//                         component="label"
//                         htmlFor="file-input"
//                         sx={{
//                           color: theme.palette.text.navBtnText,
//                           background: theme.palette.background.navBtn,
//                           px: 4,
//                         }}
//                       >
//                         Select File
//                       </Button>
//                     </FormControl>

//                     {file && (
//                       <div>
//                         <h4>Selected File:</h4>
//                         <p>Name: {file.name}</p>
//                         <p>Type: {file.type}</p>
//                         <p>Size: {file.size} bytes</p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </Box>

//               <Button
//                 variant="gradient"
//                 color="primary"
//                 onClick={handleSubmit}
//                 sx={{
//                   // width: { md: "50%", sm: "60%" },
//                   mx: { md: 20, sm: 15, xs: 10 },
//                 }}
//               >
//                 Post
//               </Button>
//             </Box>

//           </Box> */
// }
