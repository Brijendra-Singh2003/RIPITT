import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Tabs,
  Tab,
  Box,
  Chip,
  Avatar,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ChipIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import RadioTowerIcon from "@mui/icons-material/Radio";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import bgRnd from "../assets/rnd.jpg";

const ResearchProject = ({ title, description, impact, icon: Icon }) => (
  <Card sx={{ mb: 3 }}>
    <CardHeader
      avatar={<Icon />}
      title={<Typography variant="h6">{title}</Typography>}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Box display="flex" alignItems="center">
        <TrendingUpIcon size={16} />
        <Typography variant="body2" color="primary" sx={{ ml: 1 }}>
          Impact: {impact}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const ResearchArea = ({ icon: Icon, title, description }) => (
  <Box display="flex" alignItems="flex-start" mb={3}>
    <Avatar sx={{ bgcolor: "primary.light", mr: 2 }}>
      <Icon />
    </Avatar>
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  </Box>
);

const ResearchAndDevelopmentPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 8,
          background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
          backgroundImage: `url(${bgRnd})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto">
          <Box textAlign="center" py={6}>
            <h2 className="font-bold text-4xl sm:text-5xl">
              Research & Development at IIIT Bhubaneswar
            </h2>
            <p className="mt-4 max-w-5xl mx-auto text-sm sm:text-base md:text-lg text-balance">
              At IIIT Bhubaneswar, we are committed to pushing the boundaries of
              technology and fostering innovation. Our research initiatives aim
              to address real-world challenges and contribute significantly to
              the global tech community.
            </p>
          </Box>
        </div>
      </Box>

      <Container sx={{ maxWidth: "lg", paddingY: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Key Research Areas" />
            <Tab label="Flagship Projects" />
          </Tabs>
          <Box sx={{ mt: 3 }}>
            {tabValue === 0 && (
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Key Research Areas
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Explore our main focus areas of research and innovation
                  </Typography>
                  <ResearchArea
                    icon={ChipIcon}
                    title="Artificial Intelligence and Machine Learning"
                    description="Developing cutting-edge algorithms and models to solve complex problems in various domains."
                  />
                  <ResearchArea
                    icon={CloudIcon}
                    title="Cloud Computing and Big Data"
                    description="Innovating scalable solutions for data storage, processing, and analysis in the cloud."
                  />
                  <ResearchArea
                    icon={RadioTowerIcon}
                    title="Internet of Things (IoT)"
                    description="Creating smart, interconnected systems for improved efficiency and automation."
                  />
                </CardContent>
              </Card>
            )}
            {tabValue === 1 && (
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Flagship Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Discover our groundbreaking research initiatives
                  </Typography>
                  <ResearchProject
                    icon={LightbulbIcon}
                    title="AI-Powered Healthcare Diagnostics"
                    description="Developing an AI system that can accurately diagnose various diseases from medical imaging data, improving early detection rates."
                    impact="Potential to revolutionize healthcare diagnostics and improve patient outcomes."
                  />
                  <ResearchProject
                    icon={RadioTowerIcon}
                    title="Smart City Infrastructure Management"
                    description="Creating an IoT-based system for real-time monitoring and management of urban infrastructure, including traffic, waste management, and energy consumption."
                    impact="Enhancing urban living experiences and promoting sustainable city management."
                  />
                  <ResearchProject
                    icon={ChipIcon}
                    title="Quantum-Resistant Cryptography"
                    description="Researching and developing new cryptographic algorithms that can withstand attacks from quantum computers."
                    impact="Ensuring data security in the post-quantum era and protecting sensitive information."
                  />
                </CardContent>
              </Card>
            )}
          </Box>
        </Box>

        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Our Impact
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Our research initiatives have led to numerous publications in
              prestigious journals, patents, and technology transfers to
              industry partners. We've collaborated with leading tech companies
              and government agencies, contributing to both economic growth and
              societal advancement.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Chip
                  label="20+"
                  variant="outlined"
                  avatar={<Avatar>P</Avatar>}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Patents filed in the last 3 years
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Chip
                  label="50+"
                  variant="outlined"
                  avatar={<Avatar>R</Avatar>}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Research papers published
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Chip
                  label="5"
                  variant="outlined"
                  avatar={<Avatar>T</Avatar>}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Successful technology transfers
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Chip
                  label="10+"
                  variant="outlined"
                  avatar={<Avatar>S</Avatar>}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Tech startups incubated
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Join Our Research Community
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              We're always looking for bright minds to join our research teams.
              Whether you're a student, academic, or industry professional,
              there are numerous ways to get involved with our cutting-edge
              research.
            </Typography>
            <Button variant="contained" color="primary">
              Explore Opportunities
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ResearchAndDevelopmentPage;
