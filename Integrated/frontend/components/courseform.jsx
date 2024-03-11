import  { useState } from 'react';

function CourseForm() {
  const [course, setCourse] = useState({
    courseId: '',
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    fees: 0,
    noOfSeats: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(course);
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course ID:
        <input style={inputStyle} type="text" name="courseId" value={course.courseId} onChange={handleChange} />
      </label>
      <label>
        Course Name:
        <input style={inputStyle} type="text" name="courseName" value={course.courseName} onChange={handleChange} />
      </label>
      <label>
        Course Description:
        <input style={inputStyle} type="text" name="courseDescription" value={course.courseDescription} onChange={handleChange} />
      </label>
      <label>
        Course Duration:
        <input style={inputStyle} type="text" name="courseDuration" value={course.courseDuration} onChange={handleChange} />
      </label>
      <label>
        Fees:
        <input style={inputStyle} type="number" name="fees" value={course.fees} onChange={handleChange} />
      </label>
      <label>
        No. of Seats:
        <input style={inputStyle} type="number" name="noOfSeats" value={course.noOfSeats} onChange={handleChange} />
      </label>
      <button style={buttonStyle} type="submit">Submit</button>
    </form>
  );
}

export default CourseForm;
