CREATE DATABASE college_scholarship_db;

USE college_scholarship_db;


-- =========================================
-- STUDENTS
-- =========================================

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    phone VARCHAR(20),

    college VARCHAR(150),

    course VARCHAR(150),

    year_of_study INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================
-- ADMINS
-- =========================================

CREATE TABLE admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================
-- SCHOLARSHIPS
-- =========================================

CREATE TABLE scholarships (
    scholarship_id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200) NOT NULL,

    description TEXT,

    amount DECIMAL(10,2) NOT NULL,

    eligibility TEXT,

    deadline DATE NOT NULL,

    category VARCHAR(100),

    status ENUM('active', 'closed', 'draft')
        DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================
-- APPLICATIONS
-- =========================================

CREATE TABLE applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,

    student_id INT NOT NULL,

    scholarship_id INT NOT NULL,

    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status ENUM(
        'submitted',
        'under_review',
        'documents_verified',
        'approved',
        'rejected'
    ) DEFAULT 'submitted',

    remarks TEXT,

    updated_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    FOREIGN KEY (scholarship_id)
        REFERENCES scholarships(scholarship_id)
        ON DELETE CASCADE
);


-- =========================================
-- DOCUMENTS
-- =========================================

CREATE TABLE documents (
    document_id INT AUTO_INCREMENT PRIMARY KEY,

    application_id INT NOT NULL,

    document_name VARCHAR(200) NOT NULL,

    file_path VARCHAR(500) NOT NULL,

    verification_status ENUM(
        'pending',
        'verified',
        'rejected'
    ) DEFAULT 'pending',

    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (application_id)
        REFERENCES applications(application_id)
        ON DELETE CASCADE
);


-- =========================================
-- SAMPLE SCHOLARSHIPS
-- =========================================

INSERT INTO scholarships
(
    title,
    description,
    amount,
    eligibility,
    deadline,
    category,
    status
)
VALUES

(
    'Academic Excellence Scholarship',

    'Financial support for students with excellent academic performance.',

    50000,

    'Students with strong academic performance.',

    '2026-10-30',

    'Academic',

    'active'
),


(
    'Future Technology Scholarship',

    'Support for students pursuing technology and innovation.',

    75000,

    'Students pursuing technology-related courses.',

    '2026-11-15',

    'Technology',

    'active'
),


(
    'Future Leaders Scholarship',

    'Financial assistance for students showing leadership potential.',

    40000,

    'Students demonstrating leadership activities.',

    '2026-10-12',

    'Leadership',

    'active'
);