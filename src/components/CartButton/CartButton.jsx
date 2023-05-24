

const CartButton = ({children}) => {
    return (
        <button className="btn btn-outline border-0 border-b-4 border-b-yellow-600 bg-gray-200 text-yellow-600 mt-4 hover:btn-warning">{children}</button>
    );
};

export default CartButton;