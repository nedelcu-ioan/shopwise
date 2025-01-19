
# Shopwise: E-Commerce Platform

Shopwise is a cutting-edge, full-stack e-commerce application built using **Django** for the backend and **React** with **TailwindCSS** for the frontend. It features secure authentication, product management, order processing, and a modern, responsive UI, designed to provide an exceptional user experience for both customers and administrators.

---

## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
4. [Development Setup](#development-setup)
    - [Running with Docker](#running-with-docker)
    - [Running Tests](#running-tests)
5. [Contributing](#contributing)
6. [License](#license)

---

## Features

- **Dynamic Frontend:** Built with **React** and **TailwindCSS**, ensuring a fast, responsive, and modern user interface.
- **Secure Authentication:** JWT-based authentication and secure login for both users and admins.
- **Admin Dashboard:** Easily manage products, categories, inventory, and orders.
- **Order Management:** Customers can track and manage their orders with ease.
- **Payment Integration:** Secure integration with modern payment gateways for seamless transactions.
- **Fully Scalable:** Built with **Django** and optimized for scalability and performance.
- **Mobile-Friendly:** A responsive design for smooth experiences across all devices.

---

## Technologies

- **Frontend:** React, TailwindCSS
- **Backend:** Django, Django REST Framework
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** PostgreSQL (or another relational DB)
- **Containerization:** Docker

---

## Getting Started

Follow these steps to get the application running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following tools installed:
- **Docker** (for containerization)
- **Docker Compose** (to run multi-container applications)
- **Node.js** (for the frontend build tools)
- **Python 3.x** (for backend development)
- **PostgreSQL** (for the database)

---

## Development Setup

To run the Shopwise application in your local development environment, we recommend using **Docker** for ease of setup and isolation of dependencies.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shopwise.git
cd shopwise
```

### 2. Docker Setup

This application uses Docker and Docker Compose to containerize both the frontend and backend services.

#### Running the Application with Docker

1. **Build and Start Docker Containers:**

   From the root of the project, run the following command to build and start the services defined in `docker-compose.yml`:

   ```bash
   docker-compose up --build
   ```

   This will:
   - Build the Docker images for the frontend and backend.
   - Set up the PostgreSQL database container.
   - Start the containers in the background.

2. **Access the Application:**
   - The frontend will be accessible at [http://localhost:3000](http://localhost:3000).
   - The backend API will be accessible at [http://localhost:8000](http://localhost:8000).

#### Running Docker Containers in Detached Mode

If you prefer to run the containers in detached mode (in the background), use:

```bash
docker-compose up -d
```

### 3. Database Migrations

Once the containers are running, you'll need to run Django migrations to set up the database schema.

```bash
docker-compose exec backend python manage.py migrate
```

This will apply any necessary database migrations.

---

### Running Tests

You can run tests for both the frontend and backend services.

#### Backend Tests (Django)

To run backend tests using Django's test suite, execute the following command:

```bash
docker-compose exec backend python manage.py test
```

#### Frontend Tests (React)

To run the React app's tests, execute:

```bash
docker-compose exec frontend npm test
```

This will run all the tests for the React components and display the results in the terminal.

---

## Contributing

We welcome contributions! If you have any suggestions or improvements, feel free to fork this repository and create a pull request.

To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

