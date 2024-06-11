import { TbHeartHandshake } from "react-icons/tb";
import { FaBriefcaseMedical, FaAward } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { FaRegSmile } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const DonorStatistics = () => {
    return (
        
        <div className="mt-20 border-t-4 border-yellow-500 rounded-xl pt-10">
            <h1 className="text-center text-4xl font-bold">Our Achievements</h1>
            <div className="bg-blue-600 text-white flex flex-row justify-around items-center mt-6 h-52">

                {/* // success msile  */}
                <div className="flex flex-col justify-center items-center">
                    <LiaUsersSolid className="text-yellow-500 text-7xl" />
                    <h1 className="text-3xl font-extrabold">1260</h1>
                    <p className="text-xs">Donors</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaAward className="text-yellow-500 text-7xl" />
                    <h1 className="text-3xl font-extrabold">60</h1>
                    <p className="text-xs">Awards</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    < FaRegSmile className="text-yellow-500 text-7xl" />
                    <h1 className="text-3xl font-extrabold">1564</h1>
                    <p className="text-xs">Success Smiles</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <TbHeartHandshake className="text-yellow-500 text-7xl" />

                    <h1 className="text-3xl font-extrabold">08</h1>
                    <p className="text-xs">Blood Groups</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <MdVolunteerActivism className="text-yellow-500 text-7xl" />

                    <h1 className="text-3xl font-extrabold">1832</h1>
                    <p className="text-xs">Volunteers</p>
                </div>

            </div>
       </div>
    );
};

export default DonorStatistics;