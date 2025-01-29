# Optiiflo

Optiiflo is a comprehensive CPA firm management application designed to streamline the management of incoming client emails, organize company and client profiles, and integrate workflows, task management, and other organizational features.

## Features

- **Email Management**: Efficiently manage incoming client emails.
- **Profile Management**: Organize company and client profiles.
- **Integrated Workflows**: Seamlessly integrate workflows for better productivity.
- **Task Management**: Manage tasks and deadlines effectively.
- **Organizational Tools**: Various tools to help keep your firm organized.

## Technologies Used

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jduncan017/optiiflo-mvp.git
   cd optiiflo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of your project and add the necessary environment variables. Refer to `.env.example` for the required variables.

4. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

### Running the Application

1. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing

Branch Name Format: {prefix}/{username}/{description}
