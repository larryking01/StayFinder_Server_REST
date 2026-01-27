StayFinder Backend 🏨

StayFinder is a hotel discovery and booking platform. This repository contains the backend API responsible for authentication, hotel listings, bookings, reviews, and notifications, built with Node.js, Express, and Supabase.


Tech Stack

Node.js + Express – REST API

Supabase

PostgreSQL database

Authentication (Email/Password, OAuth)

Row Level Security (RLS)

Realtime subscriptions

PostgreSQL – relational data storage

dotenv – environment variable management

CORS – cross-origin requests 



🔐 Authentication & Security

StayFinder uses Supabase Auth with JWT-based authentication.

Auth Flow

Users authenticate via the frontend

Access tokens are sent as Authorization: Bearer <token>

Backend forwards headers to Supabase

Supabase handles JWT verification and RLS enforcement

Supabase Clients

Public client – anonymous access (e.g. public hotel listings)

User client – authenticated user operations

Admin client – privileged operations (used carefully)   



🛡️ Row Level Security (RLS)

RLS is enabled on all critical tables to ensure:

Users can only access their own data

Public endpoints remain safe

Admin actions are tightly controlled

Examples:

Only authenticated users can create bookings

Users can only update their own bookings

Reviews can only be posted by logged-in users 


🏨 Core Features
Hotels

Fetch all hotels (public)

View hotel details

Admin-only hotel creation

Bookings

Create bookings (authenticated users only)

Enforced ownership via RLS

Secure price and date handling

Reviews

Authenticated users can post reviews

Ratings and review content stored per hotel

Moderation-ready with visibility flags

Notifications (Planned)

In-app notifications via Supabase Realtime

Email notifications via Edge Functions

Push notifications via third-party services


▶️ Running the Project
npm install
npm start

http://localhost:8000



🧪 Testing

API testing is done using Postman

Authenticated routes require a valid Bearer token

RLS policies enforce security at the database level



📈 Future Improvements

Payment integration

Booking cancellation flow

Advanced review moderation

Admin dashboard

Push notifications

Analytics & reporting


👤 Author

Larry N. N. Williams
Junior Software Developer | Full-Stack Engineer
Building StayFinder as a scalable, real-world booking platform.