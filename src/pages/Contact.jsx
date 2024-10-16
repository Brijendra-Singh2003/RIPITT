import React from "react";
import { Mail, Phone, PinDrop as MapPin } from "@mui/icons-material";
import image from "../assets/Contact.jpg";
import {
  TextField,
  // Textarea,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
  Stack,
  Box,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedCameraOutlined,
  LinkedIn,
  LinkOutlined,
  Twitter,
} from "@mui/icons-material";
function Contact() {
  return (
    <div>
      <div
        className="bg-blue-500 py-16 text-center text-white bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container mx-auto py-12">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl font-semibold max-w-2xl mx-auto text-balance">
            Incubation, mentorship, collaborations, and other opportunities
            with RIPITT.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen  py-12 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
            {/* contact details */}
            <div
              elevation={3}
              className="p-8 space-y-4 h-full w-full bg-transparent"
            >
              <Typography
                variant="h5"
                component="h2"
                className="mb-4 text-gray-800"
              >
                Direct Contact Information
              </Typography>
              <Stack container spacing={2}>
                <Stack item xs={12} sm={4}>
                  <Box display="flex" alignItems="center">
                    <Mail className="mr-2 text-blue-600" />
                    <Typography>info@ripitt.com</Typography>
                  </Box>
                </Stack>
                <Stack item xs={12} sm={4}>
                  <Box display="flex" alignItems="center">
                    <Phone className="mr-2 text-blue-600" />
                    <Typography>+1 (555) 123-4567</Typography>
                  </Box>
                </Stack>
                <Stack item xs={12} sm={4}>
                  <Box display="flex" alignItems="center">
                    <MapPin className="mr-2 text-blue-600" />
                    <Typography className="flex-col">
                      IIIT Bhubaneswar, Near STPI
                      <br />
                      <span>Gothapatna - Bhubaneswar</span>
                      <br />
                      <span>Odisha</span>
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <div className="flex sm:space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600"
                >
                  <LinkedIn className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* contact-form */}
            <Paper
              elevation={3}
              className="p-4 sm:p-8 col-span-2 h-full w-full"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="Name" className="font-bold ml-2">
                    Name :
                  </label>
                  {/* <br /> */}

                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold ml-2" htmlFor="email">
                    Email :
                  </label>
                  {/* <br /> */}

                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold ml-2" htmlFor="Name">
                    Inquiry :
                  </label>
                  {/* <br /> */}

                  <TextField
                    select
                    fullWidth
                    label="Select Inquiry"
                    variant="outlined"
                    required
                    className="bg-white"
                  >
                    <MenuItem value="">Select an option</MenuItem>
                    <MenuItem value="incubation">Incubation</MenuItem>
                    <MenuItem value="mentorship">Mentorship</MenuItem>
                    <MenuItem value="collaboration">Collaboration</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </div>
                <div className="space-y-2">
                  <label className="font-bold ml-2" htmlFor="Name">
                    Message :
                  </label>
                  {/* <br /> */}

                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    className="bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full py-3"
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
