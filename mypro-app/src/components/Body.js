import React from 'react'
// import { Link } from "react-router-dom";
import Stud1 from "../components/assets/Stud1.png";
import student2 from "../components/assets/student2.png";
import Stud3 from "../components/assets/Stud3.png";
import Stud4 from "../components/assets/Stud4.png";
import Stud5 from "../components/assets/Stud5.png";
export const Body = () => {
    return (
        <>
            <div className='body'>
                <p className='frame1'>
                    <div>
                        <center>
                            <img src="" alt="frame1"style={{ width: '30%' }} />
                        </center>
                    </div>With millions of students appearing for tests and
                    exams on a monthly and yearly basis, there is a constant influx of data in terms of
                    result. The data is constantly uploaded on the Google Sheets which can be retrieved and
                    accessed by the student during the academic year"</p>
                <p className='frame2'> <div>
                    <center>
                        <img src={Stud1} alt="frame2" style={{ width: '30%' }} />
                    </center>
                </div>The software is scalable and hence has the ability
                    to store tons of data. The Teachers can manage and maintain the exam data analysis,
                    score section analysis, pass rate</p>
                <p className='frame3'> <div>
                    <center>
                        <img src={student2} alt="frame3" style={{ width: '30%' }} />
                    </center>
                </div>
                    Even Parents can access the progress sheets of
                    their childerns
                </p>
                <h3 className='frame4'> <div>
                <center>
                          <img src={Stud3} alt="frame4" style={{ width: '30%' }} /> 
                    </center>
                </div>Login as a Student
                    Get the Weekly Performance Graph
                </h3>
                <p className='frame5'> <div>
                <center>
                          <img src={Stud4} alt="frame5" style={{ width: '30%' }} /> 
                    </center>
                </div>Get the Weekly Performance Graph</p>

                <p className='frame6'> <div>
                <center>
                          <img src={Stud5} alt="frame6" style={{ width: '30%' }} /> 
                    </center>
                </div>The software has in-built dashboards which offer
                    details regarding the number of students attending the test, number of online tests
                    conducted, the number of questions, etc. to guide the administrator to focus on
                    important areas. Teachers and students both can use the filter panel on the dashboard
                    which enables them to easily navigate the data with their own criteria, giving more
                    control and flexibility. The teacher can create graphical and engaging reports which
                    give them a 360° view of the student, which helps the teachers to understand the
                    learning gaps and accordingly improve the student learning outcome</p>
            </div>
        </>

    )
}

export default Body;
