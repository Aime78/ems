# Employee Management System (EMS)

The Employee Management System (EMS) is a comprehensive application designed to streamline and manage various aspects of employee administration within an organization. The system includes features for employee information management, attendance and leave tracking, payroll management, task assignment, and progress tracking.

## Demo
Check out the live demo of the EMS with these credentials email: `guest@gmail.com` password: `Password@1` [here](https://ems-five-pi.vercel.app/)

Check out the youtube video of the EMS

[![EMS](https://img.youtube.com/vi/9VvWIUv3diw/0.jpg)](https://youtu.be/9VvWIUv3diw)

## Key Features
- Employee Information Management: Create, update, and view employee profiles with personal and job-related details.
- Attendance and Leave Tracking: Track daily attendance and work hours, manage leave requests, including approval and tracking of various leave types.
- Payroll Management: Calculate and manage employee salaries, bonuses, and deductions.
- Task Assignment: Create and assign tasks to employees.
- Progress Tracking: View and track employee performance, including task completion, attendance, and skill development.
- User Authentication and Roles: Default admin account creation, Role-based access control for admins and employees, Ability for admins to manage user accounts.

## Technologies used
- Next.js
- MongoDB
- JSON Web Tokens (JWT)
- Vercel

## Installation
Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v18.x or later)
- Next.js (v14.x)
- Yarn (v1.22.x or later)

### Clone the Repository
```
git clone https://github.com/Aime78/ems.git
cd ems
```
### Install Dependencies
```
yarn install
```
### Run the Application
```
yarn run dev
```
## Configuration
### Environment Variables
To configure the application, you may need to set up the following environment variables:
- `MONGODB_URI`: The URL to mongoDB connection
- `SMTP_PASSWORD`: The password used for SMTP
- `SMTP_EMAIL`: The email used for SMTP
- `TOKEN_SECRET`: The token used to generate JWT
- `HOST`: The port of the server

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

> [!NOTE]
> - Useful information that users should know, even when skimming content.
> - Next.js authentication can be improved with a third party library.

> [!TIP]
> - Helpful advice for doing things better or more easily.
> - Keep using shadcn to speed up the development process.
