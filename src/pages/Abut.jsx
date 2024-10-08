// import { Avatar, Card, CardContent, CardHeader } from "@mui/material";

// export default function AboutUs() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">
//         About RIPITT Foundation
//       </h1>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//         <p className="text-lg">
//           The RIPITT Foundation is dedicated to empowering communities through
//           innovative technology solutions and education, fostering sustainable
//           development and bridging the digital divide.
//         </p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
//         <p className="text-lg">
//           We envision a world where technology is a catalyst for positive
//           change, enabling individuals and communities to thrive in the digital
//           age, regardless of their background or location.
//         </p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Our Objectives</h2>
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>
//             Provide access to cutting-edge technology and digital resources in
//             underserved areas
//           </li>
//           <li>
//             Develop and implement educational programs to enhance digital
//             literacy and skills
//           </li>
//           <li>
//             Foster innovation and entrepreneurship through technology-driven
//             initiatives
//           </li>
//           <li>
//             Collaborate with local and global partners to create sustainable
//             tech solutions
//           </li>
//           <li>
//             Advocate for policies that promote digital inclusion and equitable
//             access to technology
//           </li>
//         </ul>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">
//           Organizational Structure
//         </h2>
//         <p className="text-lg mb-4">
//           The RIPITT Foundation operates under a dynamic and efficient
//           organizational structure, led by our visionary CEO and supported by a
//           diverse and experienced Board of Directors.
//         </p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Message from the CEO</h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <img
//             src="/logo.png"
//             alt="CEO of RIPITT Foundation"
//             className="rounded-full size-72"
//           />
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
//             <p className="text-lg italic mb-4">
//               "At RIPITT Foundation, we believe in the transformative power of
//               technology. Our mission is to harness this power to create
//               opportunities, foster innovation, and build a more inclusive
//               digital future for all. Together, we can make a lasting impact on
//               communities around the world."
//             </p>
//           </div>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Board of Directors</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               name: "John Smith",
//               role: "Chairperson",
//               bio: "Tech industry veteran with 20+ years of experience",
//             },
//             {
//               name: "Emily Johnson",
//               role: "Vice Chairperson",
//               bio: "Social entrepreneur and community advocate",
//             },
//             {
//               name: "Michael Lee",
//               role: "Treasurer",
//               bio: "Financial expert specializing in non-profit management",
//             },
//             {
//               name: "Sarah Williams",
//               role: "Secretary",
//               bio: "Education policy specialist and former teacher",
//             },
//             {
//               name: "David Brown",
//               role: "Member",
//               bio: "Renowned AI researcher and university professor",
//             },
//             {
//               name: "Lisa Chen",
//               role: "Member",
//               bio: "Sustainability consultant and environmental activist",
//             },
//           ].map((director, index) => (
//             <Card key={index}>
//               <CardHeader>
//                 <Avatar>
//                     {director.name.substring(0,2)}
//                 </Avatar>
//                 <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
//                   {director.name}
//                 </h3>
//               </CardHeader>
//               <CardContent>
//                 <p className="font-semibold text-center">{director.role}</p>
//                 <p className="text-sm text-center mt-2">{director.bio}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { School, Work, Stars, Email, LinkedIn } from "@mui/icons-material";
import Footer from "../components/Footer";

const AboutPage = () => {
  const leadershipTeam = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      education: "Ph.D. in Technology Management",
      experience: "20+ years in Innovation & Technology",
      expertise: "Strategic Leadership, Innovation Management",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/771/918/large_2x/portrait-of-a-beautiful-businesswoman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-female-ceo-planning-and-managing-company-free-photo.jpeg",
    },
    {
      name: "Prof. Michael Chen",
      position: "Chief Technology Officer",
      education: "Ph.D. in Computer Science",
      experience: "15+ years in R&D Leadership",
      expertise: "AI, Machine Learning, IoT",
      image:
        "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
    },
    {
      name: "Dr. Priya Patel",
      position: "Director of Research",
      education: "Ph.D. in Engineering",
      experience: "12+ years in Research Management",
      expertise: "Robotics, Automation Systems",
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1ZM4cBvoE54/v1/-1x-1.webp",
    },
  ];

  const boardMembers = [
    {
      name: "Robert Williams",
      position: "Board Chairman",
      background: "Former CEO of Tech Innovations Inc.",
      image:
        "https://image.cnbcfm.com/api/v1/image/104243181-GettyImages-532150054.jpg?v=1698247308&w=1858&h=1045&vtcrop=y",
    },
    {
      name: "Dr. Lisa Zhang",
      position: "Board Member",
      background: "Professor of Innovation Studies",
      image:
        "https://assets.gqindia.com/photos/64ad547adda916fe08ba20dc/master/pass/Satya-Nadella's-investments.jpg",
    },
    {
      name: "James Anderson",
      position: "Board Member",
      background: "Venture Capital Partner",
      image:
        "https://www.livemint.com/lm-img/img/2023/04/07/1600x900/2-0-401545766-tim-cook-0_1680670188014_1680837945476_1680837945476.jpg",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          className="font-bold"
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            py: 18,
            background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
            backgroundImage: `url(https://media.licdn.com/dms/image/D5612AQEh3zvxCjdbDg/article-cover_image-shrink_720_1280/0/1698672882517?e=2147483647&v=beta&t=ddEPKt2UQDX_zPTTSqUKbvFOer7tvRS5IyMZna15HSo)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            fontWeight: "2rem",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              // className="font-bold"
              sx={{ maxWidth: 800, mx: "auto", fontWeight: 900 }}
            >
              Our Leadership
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ maxWidth: 800, mx: "auto", fontWeight: 400 }}
            >
              Meet the visionaries driving innovation and excellence at RIPITT
              Foundation
            </Typography>
          </Container>
        </Box>

        {/* Executive Leadership Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Executive Leadership
          </Typography>
          <Grid container spacing={4}>
            {leadershipTeam.map((leader, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={leader.image}
                    alt={leader.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      {leader.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      gutterBottom
                    >
                      {leader.position}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <School color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={leader.education}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Work color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={leader.experience}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Stars color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={leader.expertise}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Board of Directors Section */}
        <Box sx={{ bgcolor: "grey.50", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              align="center"
              color="primary"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Board of Directors
            </Typography>
            <Grid container spacing={4}>
              {boardMembers.map((member, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Avatar
                        src={member.image}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: "auto",
                          mb: 2,
                          boxShadow: 2,
                        }}
                      />
                      <Typography variant="h5" gutterBottom color="primary">
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {member.position}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {member.background}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <IconButton color="primary" aria-label="email">
                          <Email />
                        </IconButton>
                        <IconButton color="primary" aria-label="linkedin">
                          <LinkedIn />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
};

export default AboutPage;
