import * as React from 'react';
import { Grid, Typography, IconButton } from "@mui/material";
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload, } from 'antd';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';
const baseURL = process.env.REACT_APP_BASEURL + "/foods";

const FoodAI = ({ searchFunction }) => {
    const [isProgress, SetProgress] = React.useState(false);
    const [uid, setUid] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [imageLabel, setImageLabel] = React.useState(null);

    const customUpload = (event) => {
        console.log(event);
        if (event.file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setUid(event.file.uid)
                setImageLabel(null)
                event.onSuccess("upload successfuly", event);
            };
            reader.onerror = () => {
                event.onError("Fail to upload")
            }
            reader.readAsDataURL(event.file)
        }
    };

    const handleDetection = async () => {
        if (image) {
            SetProgress(true)
            const id = uid; // Generate a unique ID for the request
            const imageData = image.split(',')[1]; // Extract Base64 data from the Data URL

            try {
                const response = await axios.post(baseURL + '/detect', {
                    id: id,
                    image: imageData
                });
                setImageLabel(response.data);
                SetProgress(false)
            } catch (error) {
                console.error('Error posting image data:', error);
            }
        } else {
            alert('No image uploaded!');
        }
    };
    return (
        <Grid container justifyContent="center" spacing={8} mb={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
            <Upload
                    customRequest={customUpload}
                    listType="picture"
                    maxCount={1}>
                    <IconButton sx={{
                            marginBottom: '3%', borderRadius: 1, borderColor: 'black',
                            bgcolor: 'background.paper',
                            m: 1,
                            border: 1,
                        }} color="info" children={<><SearchIcon /><Typography>Search</Typography></>}icon={<UploadOutlined />}>Upload</IconButton>
                </Upload>


            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={handleDetection} sx={{
                    marginBottom: '3%',
                    borderRadius: 1,
                    borderColor: 'black',
                    bgcolor: 'background.paper',
                    m: 1,
                    border: 1,
                    padding: '10px 24px',
                    fontSize: '1.3rem',
                }} color="info">
                    <Typography>Detection</Typography>
                </IconButton>
                {imageLabel == null && isProgress && < CircularProgress />}
                {imageLabel != null && <Typography>The detecting result is {imageLabel}</Typography>}
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={() => {
                    searchFunction(imageLabel);
                    SetProgress(false);
                }} sx={{
                    marginBottom: '3%',
                    borderRadius: 1,
                    borderColor: 'black',
                    bgcolor: 'background.paper',
                    m: 1,
                    border: 1,
                    padding: '10px 24px',
                    fontSize: '1.3rem',
                }} color="info">
                    <SearchIcon />
                    <Typography sx={{ ml: 1 }}>Generate</Typography>
                </IconButton>
            </Grid>
        </Grid>

    )

};
export default FoodAI;