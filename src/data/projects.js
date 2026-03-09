export const projects = [
  {
    title: "LoyaltyOS",
    subtitle: "Customer Loyalty Platform",
    description:
      "Backend-driven loyalty platform for managing customers, rewards, redemptions, and promotions through secure REST APIs.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "JPA/Hibernate",
      "JUnit",
      "Mockito",
      "Swagger/OpenAPI",
      "Next.js"
    ],
    highlights: [
      "Designed secure REST APIs with Spring Boot",
      "Implemented authentication and role-based authorization with Spring Security + JWT",
      "Built relational data model for customers, rewards, and redemption transactions",
      "Applied layered architecture with Controller, Service, Repository, and DTOs",
      "Added unit testing with JUnit and Mockito"
    ],
    github: "https://github.com/johnnytelles77/Loyalty-OS.git",
    live: null
  },
  {
    title: "SCANEX",
    subtitle: "Blockchain Transaction Analysis Backend",
    description:
      "Backend service for ingesting blockchain transaction data, normalizing records, and preparing structured data for address analysis.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "External APIs",
      "Docker"
    ],
    highlights: [
      "Integrated external APIs to retrieve blockchain transaction data",
      "Normalized and stored transaction records in PostgreSQL",
      "Built backend services for structured blockchain data processing",
      "Designed scalable layered architecture for analysis workflows"
    ],
    github: "https://github.com/johnnytelles77/scanex-api.git",
    live: null
  },
  {
    title: "Aegis Tunnel",
    subtitle: "Secure Tunnel Backend",
    description:
      "Secure networking backend exploring authenticated tunnel communication between distributed services inspired by zero-trust architecture.",
    tech: [
      "Java",
      "Spring Boot",
      "Docker",
      "WireGuard",
      "Networking"
    ],
    highlights: [
      "Designed backend foundation for secure tunnel management",
      "Implemented service structure for authenticated communication flows",
      "Containerized the backend environment with Docker",
      "Explored zero-trust networking concepts for secure service connectivity"
    ],
    github: "https://github.com/johnnytelles77/aegis-tunnel.git",
    live: null
  }
];