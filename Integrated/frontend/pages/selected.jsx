import '../assets/css/select.css';
import NavDropdown1 from '../components/Navbar';

const handlePay = () => {
  try {
    const amountx = 25000;
    var options = {
      key: "rzp_test_i1tLowNKXmrrLX",
      key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
      amount: amountx * 100,
      currency: "INR",
      name: "D-Portal",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Sumalini",
        email: "deepakprabu1234@gmail.com",
        contact: "8754988838",
      },
      notes: {
        address: "Sri krishna college of Engineering and Technology",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  } catch (error) {
    console.error(error);
  }
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
      <br></br>  <br></br>  <br></br>  <br></br><br></br>
      <center><h3>Selected College List</h3></center>
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
                <td><button onClick={handlePay}>Pay Now</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Select1;
