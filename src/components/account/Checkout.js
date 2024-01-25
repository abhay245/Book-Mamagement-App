import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MdDeleteOutline } from "react-icons/md";
const Checkout = () => {
  const { books, setBooks} = useContext(AuthContext);
  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {books.length > 0 ? (
        <CheckoutTable books={books} onDelete={deleteBook} />
      ) : (
        <p className="text-center py-4 text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

const CheckoutTable = ({ books, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            S.No.
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name of Book
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {books.map((book, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{index + 1}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{book}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2" onClick={() => onDelete(index)}>
                <MdDeleteOutline />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Checkout;