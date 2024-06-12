



import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const { user } = UseAuth();
    // const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                if (paymentAmount > 0) {
                    const { data } = await axiosPublic.post('/create-payment-intent', { price: paymentAmount });
                    setClientSecret(data.clientSecret);
                }
            } catch (error) {
                console.error("Error fetching client secret:", error);
            }
        };

        fetchClientSecret();
    }, [axiosPublic, paymentAmount]);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return;
    //     }

    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //     });

    //     if (error) {
    //         setError(error.message);
    //     } else {
    //         setError('');
    //     }

    //     if (!clientSecret) {
    //         setError('Client secret not set.');
    //         return;
    //     }

    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: card,
    //             billing_details: {
    //                 email: user?.email || 'Anonymous',
    //                 name: user?.displayName || "Anonymous",
    //             },
    //         },
    //     });

    //     if (confirmError) {
    //         setError(confirmError.message);
    //     } else {
    //         if (paymentIntent.status === 'succeeded') {
    //             setTransactionId(paymentIntent.id);

    //             const payment = {
    //                 name: user?.displayName,
    //                 email: user?.email,
    //                 transactionId: paymentIntent.id,
    //                 price: paymentAmount,
    //                 date: new Date(),
    //             };

    //             const res = await axiosPublic.post('/payments', payment);
    //             console.log(res);
    //             // if (data.insertedId) {
    //             //     console.log('Payment saved', data);

    //             // }
    //             // navigate('/dashboard/paymentHistory');
    //         }
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        if (!clientSecret) {
            setError('Client secret not set.');
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || "Anonymous",
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const currentDate = new Date();
                const formattedDate = currentDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });

                const payment = {
                    name: user?.displayName,
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: paymentAmount,
                    date: formattedDate, // Use formatted date
                };

                const res = await axiosPublic.post('/payments', payment);
                console.log(res);
                if (res) {
                    Swal.fire({
                        title: 'You Payment is Successfully Done!!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
            }
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-[490px] mx-auto pt-16">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <p className="text-red-600 p-6 text-center">{error}</p>
            {transactionId && <p className="text-green-500">Your Transaction ID is: {transactionId}</p>}

            <div className="form-control">
                <label className="label">
                    <span className="label-text mx-auto font-bold">Please Insert Your Amount Below</span>
                </label>
                <input
                    type="number"
                    id="paymentAmount"
                    name="payment"
                    className="input text-center input-bordered w-52 mx-auto"
                    onChange={(e) => setPaymentAmount(e.target.value)}
                />
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-primary btn-sm mt-2" type="submit" disabled={!stripe || !user || !paymentAmount}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckOutForm;
