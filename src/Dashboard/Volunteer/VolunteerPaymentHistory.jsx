import UseAuth from '../../Hooks/UseAuth';
import useAllPayments from '../../Hooks/useAllPayments';
import PaymentHistoryTable from '../Payment/PaymentHistoryTable';

const VolunteerPaymentHistory = () => {
    const [payments, loading, refetch] = useAllPayments();
    const { user } = UseAuth();

    const AllPayments = payments?.filter(payment => payment?.email === user?.email);

    const totalDonation = AllPayments?.reduce((total, payment) => total + parseFloat(payment.price), 0);

    return (
        <div className='border-t-4 border-blue-600 rounded-xl'>
           
            <h1 className='text-3xl text-center p-4'>You have made total {AllPayments.length} {AllPayments.length>1?"payments": "payment"}. </h1>
            <h1>Total amount paid: ${totalDonation.toFixed(2)}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllPayments.map((singlePayment, index) => (
                                <PaymentHistoryTable
                                    key={singlePayment._id}
                                    data={singlePayment}
                                    index={index + 1}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerPaymentHistory;
