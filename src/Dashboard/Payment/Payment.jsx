
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div className='bg-slate-300 m-28 p-16 pb-10 border-4 border-blue-800'>
            {/* <SectionTitle heading="Payment" subHeading="Please Now"></SectionTitle> */}
            <h1 className="text-center text-2xl">Welcome To Our Payment Service</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
