import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const HeroPart = () => {

    const { user } = UseAuth();

    return (
        <div className="flex flex-row justify-around ">
          

            <div className="card w-[290px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-sm font-bold">Benefits of blood donation</h2>
                    <p className="text-xs">If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img className="w-52 mx-auto pb-5 rounded-xl " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                {
                    user ? <>
                        <div className="mx-auto mb-3">
                            <Link to='/payment'><button className="btn btn-accent btn-xs ">Donate Now</button></Link>
                        </div>
                    </>
                        :
                        <>
                            <div className="mx-auto mb-3">
                                <Link to='/signup'><button className="btn btn-accent btn-xs ">Become a Donor</button></Link>
                            </div>
                        </>
                }
            </div>
            <div className="card w-[290px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-sm font-bold">Benefits of blood donation</h2>
                    <p className="text-xs">If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img className="w-52 mx-auto pb-5 rounded-xl " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                <div className="mx-auto mb-3">
                    <Link to='/signup'><button className="btn btn-accent btn-xs ">Become a Donor</button></Link>
                </div>
            </div>
            <div className="card w-[290px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-sm font-bold">Benefits of blood donation</h2>
                    <p className="text-xs">If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img className="w-52 mx-auto pb-5 rounded-xl " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                <div className="mx-auto mb-3">
                    <Link to='/signup'><button className="btn btn-accent btn-xs ">Become a Donor</button></Link>
                </div>
            </div>

           
            
        </div>
    );
};

export default HeroPart;