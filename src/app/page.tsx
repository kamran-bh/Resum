

export default function Home() {
  return (
    <body>
       <div className="resume-container">
        <div className="header">
            
            <div className="header-info">
                <h1>Your Name</h1>
                <p>Professional Title</p>
                <p>Email: your.email@example.com | Phone: +123-456-7890</p>
                <p>Address: Your City, Country</p>
            </div>
        </div>
        <div className="content">
            <section>
                <h2>Objective</h2>
                <p>A brief statement about your career goals and what you bring to the table.</p>
            </section>
            <section>
                <h2>Education</h2>
                <p><strong>Degree</strong> - University Name (Year of Graduation)</p>
                <p>Relevant Courses: Course 1, Course 2, Course 3</p>
            </section>
            <section>
                <h2>Experience</h2>
                <p><strong>Job Title</strong> - Company Name (Start Date - End Date)</p>
                <ul>
                    <li>Responsibility or achievement 1</li>
                    <li>Responsibility or achievement 2</li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </section>
            <section>
                <h2>Projects</h2>
                <p><strong>Project Name</strong></p>
                <p>Description of the project and your role in it.</p>
            </section>
            <section>
                <h2>References</h2>
                <p>Available upon request.</p>
            </section>
        </div>
    
    </div>
    </body>
  );
}
