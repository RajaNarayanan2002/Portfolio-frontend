const About = () => {
  const stats = [
    { number: 'B.Tech', label: '2019-2023' },
    { number: 'Software Developer', label: '2025 - Present' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              {/* <p>
                I'm a passionate Software Developer and a recent graduate with a
                BCA and MCA. While I’m a fresher, I’ve gained over four months
                of hands-on experience working with React, Java Spring Boot, and
                MySQL, and completed a 1-month Java Backend internship
                at Features Software in Marthandam, Now, I am currently working in Althi Solution IT  Company.
              </p> */}
            <p>
  I love solving problems through code and constantly strive to improve my skills.
  With two years of experience as a Java Full Stack Developer, I’ve worked on end-to-end solutions using technologies like Spring Boot, React.js, and MySQL.
  Outside of programming, I’m a chess enthusiast, Rubik’s Cube solver, Photoshop designer, and video editor — always exploring new ways to think creatively and logically.
</p>
<p>
  I'm eager to contribute to impactful projects and grow in a challenging, collaborative environment.
  Let’s connect if you're looking for someone who's experienced, curious, and ready to build scalable, efficient applications.
</p>

            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Frontend Development</h4>
                <p>Creating responsive, interactive user interfaces with modern frameworks</p>
              </div>
              
              <div className="highlight-item">
                <h4>Backend Development</h4>
                <p>Building scalable server-side applications and RESTful APIs</p>
              </div>
              
              <div className="highlight-item">
                <h4>Photoshop Design</h4>
                <p>Designing intuitive, user-friendly interfaces that inspire and engage</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;