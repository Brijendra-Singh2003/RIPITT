import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  TextField,
  // Textarea,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
  Box,
} from "@mui/material";
function Contact() {
  return (
    <div>
      <div
        className="w-full overflow-hidden flex item-center mx-auto my-auto"
        style={{
          maxHeight: "500px",
          minHeight: "500px",
          background:
            "url(https://www.tune.com/wp-content/uploads/2024/04/ContactHero.jpg)",
        }}
      >
        <div className="justify-center items-center mx-auto my-auto">
          <Box textAlign="center" className="text-white" py={6}>
            <h2 className="font-bold text-4xl sm:text-5xl">
              Transforming Ideas into Impact
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-sm sm:text-base md:text-lg text-balance">
              RIPITT Foundation is a pioneering research and innovation hub
              dedicated to nurturing breakthrough technologies and empowering
              the next generation of entrepreneurs.
            </p>
          </Box>
          <Typography
            variant="h3"
            className="text-gray-100 text-center justify-center"
          >
            Contact Us
          </Typography>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Typography
            variant="h3"
            component="h1"
            className="text-center mb-8 text-gray-800 p-4"
          >
            Contact <span className="font-bold text-blue-600 "> RIPITT</span>
          </Typography>
          <Paper elevation={3} className="p-8">
            <form className="space-y-6">
              <div className="gap-4 flex ">
                <label
                  htmlFor="Name"
                  className="font-bold w-24 items-center justify-center mx-auto  my-auto"
                >
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
              <div className="gap-4 flex ">
                <label
                  htmlFor="email"
                  className="font-bold w-24 items-center justify-center mx-auto  my-auto"
                >
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
              <div className="gap-4 flex ">
                <label
                  htmlFor="Name"
                  className="font-bold w-24 items-center justify-center mx-auto  my-auto"
                >
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
              <div className="gap-4 flex ">
                <label
                  htmlFor="Name"
                  className="font-bold w-24 items-center justify-center mx-auto  my-auto"
                >
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

          <Paper elevation={3} className="mt-8 p-8 bg-blue-50">
            <Typography
              variant="h5"
              component="h2"
              className="mb-4 text-gray-800"
            >
              Direct Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Mail className="mr-2 text-blue-600" />
                  <Typography>info@ripitt.com</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Phone className="mr-2 text-blue-600" />
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <MapPin className="mr-2 text-blue-600" />
                  <Typography>
                    123 Innovation Street, Tech City, TC 12345
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Contact;
