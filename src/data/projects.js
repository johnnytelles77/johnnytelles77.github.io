export const projects = [
  {
    title: "LoyaltyOS",
    subtitle: "Customer Loyalty System for Restaurants",
    description:
      "Full Stack loyalty platform with secure authentication, reward management, and transactional consistency.",
    tech: [
      "Java 21",
      "Spring Boot",
      "JWT",
      "MySQL",
      "JUnit",
      "Mockito",
      "Next.js",
      "Swagger"
    ],
    highlights: [
      "Designed normalized relational schema with indexing",
      "Implemented Spring Security + JWT",
      "REST API consumed by Next.js frontend",
      "Swagger/OpenAPI documentation",
      "Unit & service-layer testing"
    ],
    github: "https://github.com/johnnytelles77/Loyalty-OS.git",
    live: null
  },
  {
    title: "Coder Server",
    subtitle: "Scalable Node.js Backend",
    description:
      "Modular backend architecture with authentication, logging, testing, and CI/CD.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport",
      "Docker",
      "GitHub Actions"
    ],
    highlights: [
      "Layered backend architecture",
      "JWT + Passport authentication strategies",
      "Indexed MongoDB schemas with pagination",
      "Winston logging for observability",
      "CI/CD deployment to Railway"
    ],
    github: "https://github.com/johnnytelles77/integrador-53155.git",
    live: null
  },
    {
    title: "SCANEX",
    subtitle: "Blockchain Transaction Analysis Backend",
    description:
      "Backend service that ingests blockchain transactions, normalizes data, and generates rule-based risk scores for addresses.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "External APIs",
      "Docker"
    ],
    highlights: [
      "Transaction ingestion + normalization from external APIs",
      "Rule-based risk scoring engine (LOW/MED/HIGH)",
      "Layered architecture (Controller/Service/Repository/DTOs)",
      "Designed for scalable backend data processing"
    ],
    github: "https://github.com/johnnytelles77/scanex-api",
    live: null
  }
];