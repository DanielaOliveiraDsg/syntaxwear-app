# SyntaxWear - Modern E-commerce Application

SyntaxWear is a high-performance, responsive e-commerce application built with **React 19**, **TypeScript**, and **Vite**. It features a modern shopping experience with integrated cart management, dynamic product routing, and robust form validation.

## 🚀 Key Features

- **🛍️ Complete Shopping Flow**: Browse products by category, view detailed product information, and manage your shopping cart.
- **⚡ Fast Performance**: Powered by Vite for lightning-fast development and optimized production builds.
- **🛣️ Advanced Routing**: Utilizes TanStack Router for type-safe navigation and nested layouts.
- **🛒 Cart Management**: Global cart state management using React Context API.
- **🎨 Modern UI**: Styled with Tailwind CSS v4 for a clean, responsive, and maintainable design.
- **📝 Form Validation**: Secure and user-friendly forms implemented with React Hook Form and Zod validation.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **🔐 Auth Pages**: Includes pre-built layouts for user registration and login.

## 🛠️ Technologies Used

### Core
- **React 19**: Modern frontend library.
- **TypeScript**: Static typing for enhanced developer experience and code quality.
- **Vite**: Next-generation frontend tooling.

### State & Routing
- **TanStack Router**: Type-safe routing and state management for URLs.
- **Context API**: Global state for the shopping cart.

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework with native Vite support.
- **React Icons**: Extensive icon library.
- **Custom Fonts**: Integrated Ubuntu font family for brand consistency.

### Forms & Validation
- **React Hook Form**: Performant, flexible, and extensible forms.
- **Zod**: TypeScript-first schema declaration and validation.

## 📁 Project Structure

```text
src/
├── assets/          # Images, fonts, and static assets
├── components/      # Reusable UI components (Button, Header, ProductCard, etc.)
├── contexts/        # Global state management (CartContext)
├── interfaces/      # TypeScript type definitions and interfaces
├── mocks/           # Mock data for products and categories
├── pages/           # Application routes and page layouts (TanStack Router)
├── styles/          # Global CSS and Tailwind configurations
├── utils/           # Helper functions (currency formatting, CPF validation)
└── main.tsx         # Application entry point
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd syntaxwear-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `dist/` directory.

### Linting

To check for code quality issues:
```bash
npm run lint
```

## 📄 License

This project is for educational purposes. All rights reserved.
