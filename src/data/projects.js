export const projects = [
  {
    title: "SecureBankCore",
    subtitle: "Secure Banking REST API",
    description:
      "A banking backend built with Java 21 and Spring Boot, featuring secure authentication, account management, financial transactions, and automated testing.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "JPA / Hibernate",
      "Flyway",
      "JUnit / Mockito",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "JWT Authentication and role-based authorization with Spring Security.",
      "Implemented deposits, withdrawals, and transfers with transactional integrity.",
      "Implemented layered architecture with Controller, Service, Repository, and DTOs.",
      "Implemented unit and integration tests using JUnit, Mockito, and MockMvc.",
      "Automated build and test verification using GitHub Actions CI.",
    ],
    github: "https://github.com/johnnytelles77/SecureBankCore",
    live: "https://securebankcore.onrender.com/swagger-ui/index.html",
  },
  {
  title: "LoyaltyOS",
  subtitle: "Full-Stack Customer Loyalty Platform",

  description:
    "A full-stack customer loyalty management platform built with Java, Spring Boot, and Next.js, designed to help businesses manage customers, loyalty points, rewards, and promotions through a secure REST API and an interactive web dashboard.",

  tech: [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "MySQL",
    "JPA / Hibernate",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Axios",
    "JUnit",
    "Mockito",
    "Swagger / OpenAPI",
    "Docker",
  ],

  highlights: [
    "Developed a full-stack application integrating a Spring Boot REST API with a Next.js frontend.",
    "Implemented JWT authentication and role-based authorization using Spring Security.",
    "Built customer management, loyalty points, and reward redemption functionality.",
    "Developed an interactive dashboard for managing business loyalty operations.",
    "Designed relational data models using MySQL and JPA / Hibernate.",
    "Containerized the backend and MySQL database using Docker Compose.",
  ],

  github: "https://github.com/johnnytelles77/Loyalty-OS",

  live: null,
},
  {
  title: "NodeCommerceAPI",
  subtitle: "Node.js REST API with Authentication",

  description:
    "A RESTful backend API built with Node.js, Express, and MongoDB, featuring user authentication, Google OAuth, session management, API documentation, and containerized deployment.",

  tech: [
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Passport.js",
    "Google OAuth 2.0",
    "Express Session",
    "Docker",
    "GitHub Actions",
    "Swagger / OpenAPI",
    "Railway",
  ],

  highlights: [
    "Implemented user registration and login with Passport.js authentication.",
    "Integrated Google OAuth 2.0 for third-party authentication.",
    "Managed persistent user sessions using MongoDB and cookies.",
    "Built RESTful endpoints with Express.js and Mongoose.",
    "Documented API endpoints using Swagger / OpenAPI.",
    "Configured Docker containers and GitHub Actions CI workflows.",
    "Deployed the backend API to Railway.",
  ],

  github: "https://github.com/johnnytelles77/NodeCommerceAPI",

  live: "https://integrador-53155-production-1059.up.railway.app/api/docs",
},
];
