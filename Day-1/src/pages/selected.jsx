import '../assets/css/select.css';
import NavDropdown1 from '../components/Navbar';
const handlepayment = () => {
    
    window.location.href = '/pay';
  
};


const colleges = [
  { name: 'Example College 1', course: 'Computer Science', cutoff: '90%', marks: '900', location: 'Location 1' },
  { name: 'Example College 2', course: 'Electrical Engineering', cutoff: '85%', marks: '850', location: 'Location 2' },
  { name: 'Example College 3', course: 'Medicine', cutoff: '95%', marks: '950', location: 'Location 3' },
  { name: 'Example College 4', course: 'Business Administration', cutoff: '80%', marks: '800', location: 'Location 4' },
  { name: 'Example College 5', course: 'English Literature', cutoff: '75%', marks: '750', location: 'Location 5' }
];

const Select1 = () => {
  return (
    <div className='whi'>
      <header>
        <NavDropdown1/>
      </header>
      <center><h2>Selected College List</h2></center>
      <div className="college-list">
        <table>
          <thead>
            <tr>
              <th>College Name</th>
              <th>Course Name</th>
              <th>Cutoff</th>
              <th>Marks</th>
              <th>Location</th>
              <th>Pay Now</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college, index) => (
              <tr key={index}>
                <td>{college.name}</td>
                <td>{college.course}</td>
                <td>{college.cutoff}</td>
                <td>{college.marks}</td>
                <td>{college.location}</td>
                <td><button onClick={handlepayment}>Pay Now</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Select1;
