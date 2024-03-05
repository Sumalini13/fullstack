
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CollegeList from '../pages/selected';
import PaymentPage from '../components/Paymentpage'; // Assuming you have a PaymentPage component
import '../assets/css/select.css';
const colleges = [
  { name: 'Example College 1', course: 'Computer Science', cutoff: '90%', marks: '900', location: 'Location 1' },
  { name: 'Example College 2', course: 'Electrical Engineering', cutoff: '85%', marks: '850', location: 'Location 2' },
  { name: 'Example College 3', course: 'Medicine', cutoff: '95%', marks: '950', location: 'Location 3' },
  { name: 'Example College 4', course: 'Business Administration', cutoff: '80%', marks: '800', location: 'Location 4' },
  { name: 'Example College 5', course: 'English Literature', cutoff: '75%', marks: '750', location: 'Location 5' }
];

const Select1= () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
        <center><h1>Selected College List</h1></center>
            <CollegeList collegeData={colleges} />
          </Route>
          <Route path="/payment">
            <PaymentPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Select1;
