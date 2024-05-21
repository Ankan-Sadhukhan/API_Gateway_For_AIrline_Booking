This is a microservice-based backend project. I've built five different services and established communication between them.

Here are the links to the other microservices repositories:

- Flights and filter flight repo - https://github.com/Ankan-Sadhukhan/FlightsAndSearchService
- Booking service repo - https://github.com/Ankan-Sadhukhan/AirTicketBookingService
- Auth service repo - https://github.com/Ankan-Sadhukhan/Auth_Service
- Reminder service  repo- https://github.com/Ankan-Sadhukhan/ReminderService
- API gateway repo - https://github.com/Ankan-Sadhukhan/API_Gateway_For_AIrline_Booking


I've segregated all the logic across different microservices so that the code can be modular. Some of the interesting features I've built are:

- Users have to log in themselves; after that, they can book flights and seats for others who are traveling with them.
- Filter and search functionality for flights.
- Sign-up and sign-in for users using JWT tokens.
- Sends emails to registered users who have flights in the next 48 hours (using Nodemailer).
- Added a cron job that automates the email-sending process.
- Set up message queues using RabbitMQ.
- Added an API gateway where any incoming request comes in, and based on that, it sends a request to the corresponding service. If authentication is required, it also handles authentication before sending the request to the other service.
- Added rate-limiting logic where, within a particular time, any user (IP address) can send a limited number of requests only.


Tech stack used:

- Node.js
- Express.js
- MySQL
