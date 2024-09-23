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
   git clone https://github.com/your-username/optiflo.git
   cd optiflo
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

## Learn More

To learn more about the T3 Stack, take a look at the following resources:

- [T3 Stack Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can also check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## Deployment

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify), and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Support

If you need help, please join our [Discord](https://t3.gg/discord) and ask for assistance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
