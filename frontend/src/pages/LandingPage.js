import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const LandingPage = ({ theme }) => {
  const isDarkMode = theme === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5",
        padding: "2rem 0",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Main Content Container */}
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "3rem",
            padding: "2rem",
            backgroundColor: isDarkMode ? "#333" : "#f57c00",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
            transition: "background-color 0.3s ease",
            animation: `${slideUp} 0.5s ease-out`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: "1rem",
              font: "inherit",
              fontSize: "34px",
              fontWeight: 600,
            }}
          >
            Welcome to DocuThinker
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "2rem", font: "inherit", color: "white" }}
          >
            Your AI-powered solution for document summarization and analysis.
            <br />
            Upload your documents and get insights in seconds!
          </Typography>
          <Button
            component={Link}
            to="/how-to-use"
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "white",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              font: "inherit",
              "&:hover": {
                backgroundColor: "#ee8d00",
              },
            }}
          >
            How to Use
          </Button>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
          {[
            {
              title: "Upload Documents",
              description:
                "Easily upload your documents to get a summary and key insights generated by our AI.",
              buttonText: "Upload Document",
              link: "/home",
            },
            {
              title: "Generate Insights",
              description:
                "Get key ideas and discussion points extracted from your documents effortlessly.",
              buttonText: "Get Started",
              link: "/home",
            },
            {
              title: "Chat with AI",
              description:
                "Engage in conversation with our AI to get clarifications and insights about your documents.",
              buttonText: "Chat Now",
              link: "/home",
            },
            {
              title: "Voice Chat with AI",
              description:
                "Use voice commands to interact with our AI and get instant responses.",
              buttonText: "Try Voice Chat",
              link: "/home",
            },
            {
              title: "Document Summarization in Multiple Languages",
              description:
                "Support for multiple languages to generate summaries and insights from documents.",
              buttonText: "Try Now",
              link: "/home",
            },
            {
              title: "Rewrite Content with AI",
              description:
                "Simply choose a desired style and let our AI rewrite your content in seconds.",
              buttonText: "Learn More",
              link: "/home",
            },
            {
              title: "Get Actionable Recommendations",
              description:
                "Receive actionable recommendations based on the content of your documents.",
              buttonText: "Get Recommendations",
              link: "/home",
            },
            {
              title: "Sentiment Analysis",
              description:
                "Analyze the sentiment of your documents and get a detailed report.",
              buttonText: "Analyze Sentiment",
              link: "/home",
            },
            {
              title: "Document Storage and Management",
              description:
                "Securely store, manage, and easily access your documents with our cloud-based solution.",
              buttonText: "Sign Up",
              link: "/register",
            },
          ].map((feature, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={feature.title}
              sx={{
                animation: `${slideUp} 0.6s ease-out`,
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  borderRadius: 2,
                  height: "100%",
                  backgroundColor: isDarkMode ? "#333" : "#fff",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "1rem",
                      color: isDarkMode ? "#f57c00" : "#f57c00",
                      font: "inherit",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: "1rem",
                      font: "inherit",
                      color: isDarkMode ? "white" : "black",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "left", mt: "auto", mb: 2, ml: 1 }}
                >
                  <Button
                    component={Link}
                    to={feature.link}
                    variant="contained"
                    sx={{
                      backgroundColor: "#f57c00",
                      color: "white",
                      font: "inherit",
                      "&:hover": {
                        backgroundColor: "#e68900",
                      },
                    }}
                  >
                    {feature.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information Section */}
        <Box
          sx={{
            marginTop: "4rem",
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "#f57c00",
            borderRadius: 2,
            boxShadow: 3,
            transition: "background-color 0.3s ease",
            animation: `${slideUp} 0.8s ease-out`,
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "1rem",
              font: "inherit",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            Why Choose DocuThinker?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              font: "inherit",
              color: "white",
            }}
          >
            Our platform is designed to simplify document analysis, provide
            valuable insights, and enhance productivity. Experience the future
            of document management with AI-powered features.
          </Typography>
          <Button
            component={Link}
            to="/home"
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "white",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              marginTop: "1rem",
              font: "inherit",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#ee8d00",
              },
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Learn More Section */}
        <Box
          sx={{
            marginTop: "4rem",
            padding: "2rem",
            textAlign: "center",
            backgroundColor: isDarkMode ? "#333" : "#fff",
            borderRadius: 2,
            boxShadow: 3,
            transition: "background-color 0.3s ease",
            animation: `${slideUp} 1s ease-out`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "1rem",
              color: "#f57c00",
              font: "inherit",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            Learn More
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              font: "inherit",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Visit our documentation to explore the features, functionalities,
            and how to get started with DocuThinker.
          </Typography>
          <Button
            href="https://github.com/hoangsonww/DocuThinker-AI-App"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "white",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              marginTop: "1rem",
              font: "inherit",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#e68900",
              },
            }}
          >
            Documentation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
