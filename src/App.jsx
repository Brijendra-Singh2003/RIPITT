import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Science,
  Business,
  Group,
  ArrowRight,
  CalendarToday,
  Devices,
  EmojiObjects,
  School,
} from "@mui/icons-material";
import bg01 from "./assets/bg01.jpeg";
import AnimatedNumber from "./components/AnimatedNum";

const achievements = [
  { title: "Startups Incubated", count: 50, icon: Business },
  { title: "Research Projects", count: 100, icon: Science },
  { title: "Industry Partners", count: 30, icon: Group },
];

export const upcomingEvents = [
  {
    title: "RIPITT Inauguration",
    date: "8th November 2024",
  },
  {
    title: "Innovation Summit 2024",
    date: "15-16 July, 2024",
    description: "Annual gathering of innovators and industry leaders",
  },
  {
    title: "AI Workshop Series",
    date: "1-5 August, 2024",
    description: "Hands-on workshops on latest AI technologies",
  },
];

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div className="bg-blue-500 w-full relative h-96 object-cover sm:bg-fixed text-center text-white bg-cover">
        <video
          className="h-full w-full object-cover"
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vd3bj2jPe/videoblocks-aerial-view-schoolchild-walking-on-sport-ground-in-school-yard_hxqqjosdh__0f8ab5251357f63a3eeac109216bde76__P360.mp4"
          autoPlay
          muted
          loop
          style={{background: `url(${bg01})`}}
        ></video>
        <div className="h-full w-full z-10 flex flex-col justify-center absolute top-0 bg-black/30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Advancing Ideas, Innovating Reality
          </h1>
          <p className="mt-4 max-w-5xl mx-auto text-sm sm:text-base md:text-lg text-balance">
            RIPITT Foundation is a pioneering research and innovation hub
            dedicated to nurturing breakthrough technologies and empowering the
            next generation of entrepreneurs.
          </p>
        </div>
      </div>

      {/* Achievement Stats */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card raised sx={{ height: "100%", textAlign: "center", p: 2 }}>
                <CardContent>
                  <achievement.icon
                    sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    <AnimatedNumber value={achievement.count} />+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {achievement.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Objectives */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Our Mission
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" gutterBottom color="primary">
                  <EmojiObjects sx={{ mr: 1, verticalAlign: "middle" }} />
                  Innovation & Research
                </Typography>
                <List>
                  {[
                    "Development of innovative solutions",
                    "Pioneering research in AI & IoT",
                    "Sustainable technologies",
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <ArrowRight color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" gutterBottom color="primary">
                  <School sx={{ mr: 1, verticalAlign: "middle" }} />
                  Entrepreneurship Support
                </Typography>
                <List>
                  {[
                    "Incubation ecosystem",
                    "Mentorship programs",
                    "Industry partnerships",
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <ArrowRight color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Upcoming Events */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          color="primary"
        >
          Upcoming Events
        </Typography>
        <Box sx={{ mt: 4 }}>
          {upcomingEvents.map((event, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: 3,
                mb: 2,
                "&:hover": {
                  elevation: 4,
                  transform: "translateY(-2px)",
                  transition: "all 0.3s",
                },
              }}
            >
              <Box display="flex" alignItems="center" mb={1}>
                <CalendarToday color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">{event.title}</Typography>
              </Box>
              <Typography color="text.secondary" gutterBottom>
                {event.date}
              </Typography>
              <Typography>{event.description}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
