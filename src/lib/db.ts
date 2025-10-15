import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL);

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'member',
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS applications (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      age INTEGER,
      location VARCHAR(255),
      instagram VARCHAR(255),
      experience TEXT,
      why TEXT,
      goals TEXT,
      availability VARCHAR(255),
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS course_enrollments (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      course_name VARCHAR(255) NOT NULL,
      progress INTEGER DEFAULT 0,
      completed BOOLEAN DEFAULT FALSE,
      enrolled_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

export async function getUser(email: string) {
  const result = await sql`SELECT * FROM users WHERE email = ${email}`;
  return result[0];
}

export async function createUser(email: string, password: string, name: string, role = 'member') {
  const result = await sql`
    INSERT INTO users (email, password, name, role, status)
    VALUES (${email}, ${password}, ${name}, ${role}, 'approved')
    RETURNING *
  `;
  return result[0];
}

export async function saveApplication(data: any) {
  const result = await sql`
    INSERT INTO applications (
      full_name, email, phone, age, location, instagram,
      experience, why, goals, availability
    ) VALUES (
      ${data.fullName}, ${data.email}, ${data.phone}, ${data.age},
      ${data.location}, ${data.instagram}, ${data.experience},
      ${data.why}, ${data.goals}, ${data.availability}
    ) RETURNING *
  `;
  return result[0];
}

export async function getPendingApplications() {
  const result = await sql`
    SELECT * FROM applications 
    WHERE status = 'pending' 
    ORDER BY created_at DESC
  `;
  return result;
}

export async function approveApplication(id: number) {
  await sql`UPDATE applications SET status = 'approved' WHERE id = ${id}`;
}

export async function enrollUserInCourse(userId: number, courseName: string) {
  const result = await sql`
    INSERT INTO course_enrollments (user_id, course_name)
    VALUES (${userId}, ${courseName})
    RETURNING *
  `;
  return result[0];
}

export async function getUserCourses(userId: number) {
  const result = await sql`
    SELECT * FROM course_enrollments WHERE user_id = ${userId}
  `;
  return result;
}
