# Bean & Bloom

Bean & Bloom is a modern coffee shop web application built with Laravel (backend) and React (frontend). It provides a welcoming digital presence for a local coffee shop, featuring information about the business, menu, events, team, and more.

## Features

- **Landing Page:** Beautiful welcome page introducing Bean & Bloom.
- **About Page:** Story, team members, testimonials, and values.
- **Contact Page:** Contact form and business information.
- **Menu:** Categorized menu with dietary labels.
- **Events:** List of upcoming community events.
- **User Authentication:** Register, login, and dashboard for users.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Dark Mode:** Seamless light/dark theme switching.
- **Admin Dashboard:** (If enabled) Manage content and users.

## Tech Stack

- **Backend:** Laravel
- **Frontend:** React (with TypeScript)
- **Routing:** Inertia.js
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Context, Inertia shared props

## Getting Started

### Prerequisites

- Node.js & npm (Node.js LTS version recommended)
- PHP (version compatible with your Laravel project, e.g., PHP 8.1+) & Composer
- MySQL or a compatible database (e.g., PostgreSQL, SQLite)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/bean-bloom.git
    cd bean-bloom
    ```

2.  **Install PHP Dependencies:**
    Use Composer to install the backend dependencies.
    ```sh
    composer install
    ```

3.  **Install JavaScript Dependencies:**
    Use npm (or yarn) to install the frontend dependencies.
    ```sh
    npm install
    ```

4.  **Set Up Environment File:**
    *   Copy the example environment file:
        ```sh
        cp .env.example .env
        ```
    *   Open the `.env` file in your editor.
    *   Configure your database connection details (e.g., `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).
    *   Update other environment variables as needed (e.g., `APP_URL`).

5.  **Generate Application Key:**
    This key is used for encryption and needs to be set for your application.
    ```sh
    php artisan key:generate
    ```

6.  **Run Database Migrations:**
    This will create the necessary tables in your database.
    ```sh
    php artisan migrate
    ```
    *   (Optional) If seeders are available, you can populate the database with initial/sample data:
        ```sh
        php artisan db:seed
        ```

7.  **Compile Frontend Assets:**
    *   **For development (with Hot Module Replacement):**
        Run the Vite development server in a dedicated terminal. This will watch for changes in your frontend files and rebuild assets automatically, enabling fast updates in the browser.
        ```sh
        npm run dev
        ```
    *   **For production:**
        Build the optimized and minified assets for deployment:
        ```sh
        npm run build
        ```

8.  **Start the Application Servers:**
    *   **Laravel Development Server:**
        In another terminal, start the PHP development server:
        ```sh
        php artisan serve
        ```
    *   Open your browser and navigate to the URL provided by `php artisan serve` (typically `http://127.0.0.1:8000`).
    *   If you are in development mode (i.e., `npm run dev` is running for the frontend), Vite will handle asset serving with HMR. If you have built assets for production (`npm run build`), Laravel will serve the compiled static assets from the `public` directory.

## Project Structure

bean-bloom/ 
├── app/ # Laravel backend code (Controllers, Models, Providers, etc.) 
├── bootstrap/ # Laravel bootstrap scripts 
├── config/ # Laravel configuration files 
├── database/ # Migrations, seeders, and factories 
├── public/ # Publicly accessible assets, index.php entry point 
├── resources/ 
│ ├── css/ # CSS files (processed by Vite) 
│ ├── js/ # React frontend code (Pages, Components, Types, Constants, etc.) 
│ └── views/ # Laravel Blade templates (primarily app.blade.php for Inertia) 
├── routes/ # Laravel route definitions (web.php, api.php) 
├── storage/ # Compiled Blade templates, file-based sessions, file caches, logs 
├── tests/ # Backend (PHPUnit) and frontend (e.g., Jest, Vitest) tests 
├── vendor/ # Composer dependencies 
├── node_modules/ # NPM dependencies 
├── .env.example # Example environment file 
├── artisan # Laravel Artisan CLI tool 
├── composer.json # PHP dependencies definition 
├── package.json # Node.js dependencies and scripts 
├── tailwind.config.js # Tailwind CSS configuration 
├── vite.config.js # Vite configuration 
└── README.md # This file


## Customization

-   **Business Information:** Edit the `BUSINESS_INFO` constant in `resources/js/constants/index.ts`.
-   **Menu & Events:** Update the `MENU_CATEGORIES` and `EVENTS` constants in `resources/js/constants/index.ts`.
-   **Team & Testimonials:** Modify the `TEAM_MEMBERS` and `TESTIMONIALS` constants in `resources/js/constants/index.ts`.
-   **Styling:** Customize Tailwind CSS by editing `tailwind.config.js` and CSS files in `resources/css/`.
-   **Laravel Backend:** Modify controllers, models, routes, and other PHP files within the `app/`, `routes/`, and `config/` directories as needed.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

© [Current Year] Bean & Bloom. All rights reserved.

