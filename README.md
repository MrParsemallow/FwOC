# Clone an Existing Project

## Install Git

Download and install Git from the official website: https://git-scm.com/

Run the installer and follow the default setup instructions.

After installation, verify it works:

    git --version

If you already have a React project in a repository, you can clone it:

    git clone <repository-url>

Example:

    git clone https://github.com/your-username/my-react-app.git

Then move into the project folder:

    cd my-react-app

Install dependencies:

    npm install

Start the development server:

    npm run dev

# React Website Setup (with Vite)

## Requirements

Make sure you have the following installed:

- Node.js  
- npm  

You can check if they are installed by running:

    node -v
    npm -v

---

## Create a New React Project

Create a new project with Vite:

    npm create vite@latest

Follow the setup steps in the terminal:

- Enter your project name  
- Select **React**  
- Choose **JavaScript** or **TypeScript**

Example:

    npm create vite@latest my-react-app

---

## Open the Project Folder

Move into your project directory:

    cd my-react-app

---

## Install Dependencies

Install all required packages:

    npm install

---

## Start the Development Server

Run the development server:

    npm run dev

After starting, a local URL will be shown (for example: http://localhost:5173).  
Open it in your browser.

---

## Project Structure

    my-react-app/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── assets/
    ├── index.html
    ├── package.json
    └── vite.config.js

---

## Build for Production

To create a production build:

    npm run build

---

## Preview Production Build

To preview the production version:

    npm run preview

---

## Useful Commands

    npm run dev      Start development server
    npm run build    Build project for production
    npm run preview  Preview production build

---

## Learn More

- https://react.dev/  
- https://vite.dev/  
