# GitPro

GitPro provides a convenient and user-friendly interface for GitHub users to manage their profiles and repositories effectively. With seamless authentication through GitHub OAuth app, users can trust the security of their data while using GitPro.

- View and update your GitHub profile.
- Access both public and private repositories.
- Find other GitHub users and explore their repositories.
- Authentication via GitHub OAuth app for secure access.

## External Dependencies

- Express
- Cors
- Cookie-parser
- Nodemon
- Axios
- React
- React-dom
- Vite
- React-redux
- @reduxjs/toolkit
- React-router-dom
- React-cookie

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Git (version: >= 2.39.3)
- Node.js (version: >= 20.9.0)
- npm or yarn (version: >= 10.1.0)

### Installation

1. Clone the repository:

```bash
    git clone https://github.com/AlmazXX/gitpro.git
```

2. Navigate to the project directory:

```bash
    cd gitpro
```

3. Install dependencies:

```bash
    npm install
```

4. Navigate to the api directory and client directory one by one, then clone the .env.example files into .env files:

```bash
    cd api
    cp .env.example .env
```

```bash
    cd ../client
    cp .env.example .env
```

Replace the placeholder values in the .env files with the values provided in the attached file of my letter to Marina Avtaeva (Attractor Software HR).

5. Navigate back to the root directory:

```bash
    cd ..
```

### Usage

To start the project, run the following command:

```bash
    npm run dev
```
