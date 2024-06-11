

const PaymentHistoryTable = ({ data, index }) => {
    // Format the date to 'YYYY-MM-DD'
    const formattedDate = new Date(data.date).toLocaleDateString();

    return (
        <tr>
            <th>{index}</th>
            <td>{data.transactionId}</td>
            <td>{data.email}</td>
            <td>${parseFloat(data.price).toFixed(2)}</td>
            <td>{formattedDate}</td>
        </tr>
    );
};

export default PaymentHistoryTable;




