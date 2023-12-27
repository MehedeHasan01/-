import CallAnyTime from "../../Components/CallAnyTime/CallAnyTime";
import AboutNinish from "../../Components/AboutNinish/AboutNinish";
import FutureWorks from "../../Components/FutureWorks/FutureWorks";
import Mission from "../../Components/Mission/Mission";
import PreviousWorks from "../../Components/PreviousWorks/PreviousWorks";



const About = () => {
    return (
       <>
         <div className="bg-[#F4F7FD]">
            <AboutNinish/>

            <div className="bg-white mb-8">
            <Mission/>
            </div>

            <PreviousWorks/>

            <FutureWorks/>
            <div className="max-w-[1200px] mx-auto py-5">
                <CallAnyTime/>
            </div>


         </div>

       </>
    );
};

export default About;