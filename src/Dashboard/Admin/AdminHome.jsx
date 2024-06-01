
import UseAuth from '../../Hooks/UseAuth';

const AdminHome = () => {
    const { user } = UseAuth();

    return (
        <div>
            <h1 className='text-3xl text-center'> Hello, {user?.displayName}</h1>


            <div className='grid grid-cols-2 gap-4 m-6'>
                <div className='border-2 border-blue-500 '>
                    <h1>Total User </h1>
                    <h1>100</h1>
                </div>
                <div className='border-2 border-blue-500 '>
                    <h1>Total User </h1>
                    <h1>100</h1>
                </div>
                <div className='border-2 border-blue-500 '>
                    <h1>Total User </h1>
                    <h1>100</h1>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;