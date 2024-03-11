import  { useState, useEffect } from 'react';
import axios from 'axios';

function InstituteList() {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2020/api/institutes');
        setInstitutes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {institutes.map(institute => (
        <div key={institute.instituteId} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{institute.instituteName}</h5>
              <p className="card-text">{institute.instituteDescription}</p>
              <p className="card-text">Address: {institute.instituteAddress}</p>
              <p className="card-text">Mobile: {institute.mobile}</p>
              <p className="card-text">Email: {institute.email}</p>
              <p className="card-text">Number of Courses Available: {institute.noOfCoursesAvailable}</p>
              <ul className="list-group">
                {institute.courses.map(course => (
                  <li key={course.courseId} className="list-group-item">
                    {course.courseName} - {course.courseDescription}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InstituteList;
