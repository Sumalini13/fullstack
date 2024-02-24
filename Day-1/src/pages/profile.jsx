import  { useState } from 'react';

function Profile() {
const handleCheckStatus = () => {
  setShowTable(true); // Set showTable state to true to display the table
};
  const [showTable, setShowTable] = useState(false);

  const selectedColleges = [
    { 
      collegeName: "ABC College", 
      course: "ECE", 
      status: "Selected", 
      YourCutoff: 95,
      requiredCutoff: 190,
      eligible: "Yes" // Initially set to the school name
    },
    { 
      collegeName: "XYZ University", 
      course: "CSE", 
      status: "Pending", 
      YourCutoff: 195,
      requiredCutoff: 198,
      eligible: "No" // Initially set to the school name
    },
    { 
      collegeName: "DEF Institute", 
      course: "CSE", 
      status: "Selected", 
      YourCutoff: 95,
      requiredCutoff: 92,
      eligible: "Yes" // Initially set to the school name
    },
    { 
      collegeName: "GHI Academy", 
      course: "ECE", 
      status: "Pending", 
      YourCutoff: 95,
      requiredCutoff: 98,
      eligible: "No" // Initially set to the school name
    },
    { 
      collegeName: "JKL School", 
      course: "IT", 
      status: "Selected", 
     YourCutoff: 190,
      requiredCutoff: 185,
      eligible: "YES" // Initially set to the school name
    }
  ];
  
  // Determine eligibility based on twelfthMarks and requiredCutoff
  selectedColleges.forEach(college => {
    college.eligible = college.twelfthMarks >= college.requiredCutoff ? "Eligible" : "Not Eligible";
  });
  

  return (
    <div style={{ 
      margin: 0, 
      paddingTop: '40px', 
      color: '#2e323c', 
      background: '#f5f6fa', 
      position: 'relative', 
      height: '100%', 
      marginLeft:'-230px'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
      }}>
        <div style={{ 
          width: '25%', 
          padding: '0 15px' 
        }}>
         
        </div>
<br></br><br></br>
<div style={{ 
  width: '35%', 
  padding: '0 15px', 
}}>
  <div style={{ 
    backgroundColor: '#fff', 
    borderRadius: '5px', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    padding: '20px' 
  }}>
    <div style={{ 
      textAlign: 'center', 
      marginBottom: '80px' 
    }}>
      <div style={{ 
        width: '90px', 
        height: '90px', 
        borderRadius: '100px', 
        overflow: 'hidden', 
        margin: '0 auto 10px' 
      }}>
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ margin: 0 }}>Name: Sumalini G V</h3>
      <br></br>
      <h4>Interests Branch</h4>
      <p>Computer Science</p>
      <p>BioTechnology</p>
      <p>Mathematics</p>
  
    </div>
    <div >
      <h3 style={{  color: '#007ae1' }}>Marks</h3>
      <p>School Name : Bharani Park , Karur</p>
      <p style={{  }}>12th Mark: 95%</p>
      <p style={{ }}>10th Mark: 97%</p>
      <p style={{  }}>12th Cutoff: 97.5%</p>
    </div>
  </div>
</div>

        <div style={{ 
          width: '75%', 
          padding: '0 15px' 
        }}>
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '5px', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
            padding: '20px' 
          }}>
            <div style={{ marginBottom: '20px' }}>
              <h6 style={{ marginBottom: '10px', color: '#007ae1' }}>Personal Details</h6>
              <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                <div style={{ width: '50%', paddingRight: '10px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Enter full name" className="form-control" />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="eMail">Email</label>
                    <input type="email" id="eMail" placeholder="Enter email ID" className="form-control" />
                  </div>
                </div>
                <div style={{ width: '50%', paddingLeft: '10px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Enter phone number" className="form-control" />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="website">Website URL</label>
                    <input type="url" id="website" placeholder="Website url" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h6 style={{ marginBottom: '10px', color: '#007ae1' }}>Address</h6>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', paddingRight: '10px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="Street">Street</label>
                    <input type="name" id="Street" placeholder="Enter Street" className="form-control" />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="ciTy">City</label>
                    <input type="name" id="ciTy" placeholder="Enter City" className="form-control" />
                  </div>
                </div>
                <div style={{ width: '50%', paddingLeft: '10px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="sTate">State</label>
                    <input type="text" id="sTate" placeholder="Enter State" className="form-control" />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="zIp">Zip Code</label>
                    <input type="text" id="zIp" placeholder="Zip Code" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button type="button" className="btn btn-secondary" style={{ marginRight: '10px',maxWidth:'10%' }}>Cancel</button>
              <br></br>
              <button type="button" className="btn btn-primary" style={{marginTop:'-47px',maxWidth:'10%',marginRight:'200px'}}>Update</button>
              {!showTable && (
        <button type="button" className="btn btn-primary" onClick={handleCheckStatus} 
          style={{marginTop:'-79px',maxWidth:'10%',marginRight:'550px'}}
        >
          Check Status
        </button>
      )}
          
            </div>

            <div style={{ 
      margin: 0, 
      paddingTop: '40px', 
      color: '#2e323c', 
      background: '#f5f6fa', 
      position: 'relative', 
      height: '100%' 
    }}>
     
    
  

    <div style={{ 
      margin: 0, 
      paddingTop: '40px', 
      color: '#2e323c', 
      background: '#f5f6fa', 
      position: 'relative', 
      height: '100%' 
    }}>
      {showTable &&(
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#007ae1', color: '#fff' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>College Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Course</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Your Cutoff</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Required Cutoff</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Eligible</th>
          </tr>
        </thead>
        <tbody>
          {selectedColleges.map((college, index) => (
          <tr key={index} style={{ 
            background: college.status === 'Selected' ? 'lightgreen' : college.status === 'Pending' ? 'lightcoral' : '', 
            color: college.eligible === 'Yes' ? 'blue' : college.eligible === 'No' ? 'pink' : '' 
          }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.collegeName}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.course}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.status}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.YourCutoff}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.requiredCutoff}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{college.eligible}</td>
            </tr>
          ))}
        </tbody>
      </table>
        )}
    </div>
</div>
</div>
</div>
</div>
    </div>
  );
}

export default Profile;
