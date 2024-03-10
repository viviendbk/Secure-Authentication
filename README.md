# Angular/Python Project

This project is a combination of Angular frontend and Python backend. It provides functionalities for user signup, signin, and authentication.

## Prerequisites

- Node.js and npm installed on your machine.
- Python installed on your machine.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the backend folder and install the required Python packages:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. Navigate back to the project root folder:

    ```bash
    cd ..
    ```

4. Install the required npm packages for the Angular frontend:

    ```bash
    npm install
    ```

## Usage

### Backend

1. Start the Flask backend server:

    ```bash
    cd backend
    python server.py
    ```

2. The backend server will start running at `http://localhost:5000`.

### Frontend

1. Start the Angular development server:

    ```bash
    ng serve
    ```

2. Open your web browser and navigate to `http://localhost:4200`.

## Features

- Sign up: Allows users to create a new account by providing an email and password.
- Sign in: Allows users to sign in to their account with their email and password.
- Authentication: Validates user credentials and provides access to protected resources.
