
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentAdmin = () => {
    return (
        <div className='bg-slate-300 m-28 pt-1 pb-10'>
            <h1 className="text-center text-3xl font-bold p-4">Welcome to our payment service.</h1>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentAdmin;
