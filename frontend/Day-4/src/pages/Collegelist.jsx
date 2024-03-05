
import '../assets/css/style.css'; // Import external CSS file

const colleges = [
  { name: 'Anna University', location: 'Chennai' },
  { name: 'Indian Institute of Technology Madras', location: 'Chennai' },
  { name: 'National Institute of Technology, Tiruchirappalli', location: 'Tiruchirappalli' },
  { name: 'Madras Institute of Technology', location: 'Chennai' },
  { name: 'Vellore Institute of Technology', location: 'Vellore' },
  { name: 'Government College of Technology, Coimbatore', location: 'Coimbatore' },
  { name: 'Sri Sivasubramaniya Nadar College of Engineering', location: 'Chennai' },
  { name: 'Coimbatore Institute of Technology', location: 'Coimbatore' },
  { name: 'PSG College of Technology', location: 'Coimbatore' },
  { name: 'SRM Institute of Science and Technology', location: 'Chennai' }
];

const CollegeList = () => {
  return (
    <div className="background-image-container"> {/* Apply the class here */}
      <h1 style={{marginTop:'-30px'}}>Colleges in India</h1>
      <div className="college-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {colleges.map((college, index) => (
          <div key={index} className="college-item" style={{ backgroundColor: 'rgba(240, 240, 239, 0.8)', padding: '20px', margin: '10px', borderRadius: '5px', width: '250px' }}>
            <h3 style={{ marginBottom: '10px' ,fontSize:'19px'}}>{college.name}</h3>
            <p style={{ marginBottom: '10px', fontSize: '17px' }}>Location: {college.location}</p>
            <a href="https://www.annauniv.edu/" style={{ color: 'blue', textDecoration: 'none' }}>Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeList;
