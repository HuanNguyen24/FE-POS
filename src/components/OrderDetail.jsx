import { Component } from "react";
import "../styles/OrderDetail.css"
import PopUpAccept from "./PopUpAccept.jsx";

const itemsList = [
    {
        item: "Double Cheeseburger",
        price: 50000,
        quantity: 1,
    },
    {
        item: "Chicken Nuggets",
        price: 30000,
        quantity: 2,
    },
    {
        item: "French Fries",
        price: 20000,
        quantity: 3,
    },
    {
        item: "Coca Cola 500ml",
        price: 10000,
        quantity: 4,
    },
    {
        item: "Vanilla Ice Cream",
        price: 15000,
        quantity: 5,
    },
    {
        item: "Tropical Fruit Pie",
        price: 25000,
        quantity: 6,
    },
    {
        item: "Strawberries Sundae",
        price: 20000,
        quantity: 7,
    },
    {
        item: "Caramel Sundae",
        price: 20000,
        quantity: 8,
    },
    {
        item: "Mozzarella Sticks",
        price: 18000,
        quantity: 2,
    },
    {
        item: "Onion Rings",
        price: 15000,
        quantity: 3,
    },
    {
        item: "Chocolate Milkshake",
        price: 25000,
        quantity: 1,
    },
]

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }
    toggleModal = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    }
    render() {
        console.log(this.props.item)
        return (
            <div>
                <button onClick={this.toggleModal} className="flex items-center justify-center border-2 border-yellow-400 text-yellow-600 bg-none hover:bg-yellow-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    View
                </button>

                {this.state.isModalOpen && (
                    <div className="absolute top-0 left-0 flex w-screen h-screen justify-center items-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                        <div className="relative overflow-y-scroll w-fit max-h-[85%] items-center rounded-md shadow-sm card-wrap bg-white justify-between align-middle">
                            <div className="w-full text-center">
                                <h1 className="text-2xl font-bold pt-6">Order items</h1>
                            </div>

                            <div className="mx-auto py-8 px-5 space-y-4">
                                <hr className="border-1 border-gray-200" />

                                <div className="grid grid-cols-9 gap-4 w-full justify-between text-center text-md font-semibold ">
                                    <div className="col-span-3">Item</div>
                                    <div className="col-span-2">Price</div>
                                    <div className="col-span-2">Quantity</div>
                                    <div className="col-span-2">Sum</div>
                                </div>

                                <hr className="border-1 border-gray-200" />


                                {this.props.item.orderFood.map((item, index) => (
                                    <div
                                        key={index}
                                        id="food-list"
                                        className="h-3/4 grid grid-cols-9 gap-4 w-full justify-between text-sm"
                                    >
                                        <div className="col-span-3 pl-3">{item.name}</div>
                                        <div className="col-span-2 text-center">{item.price}</div>
                                        <div className="col-span-2 text-center">{item.quantity}</div>
                                        <div className="col-span-2 text-center">{item.price * item.quantity}</div>
                                    </div>
                                ))}

                                toggleSidebar
                                <hr className="border-1 border-gray-200" />

                            </div>


                            <div className="flex w-full pb-8 justify-center text-sm">
                                <PopUpAccept item={this.props.item} getChangeStatus={this.props.getChangeStatus} />
                                <button type="button"
                                    onClick={this.toggleModal}
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                    Close view
                                </button>
                            </div>

                            <hr className="border-1 border-gray-200" />

                        </div>

                    </div>
                )}
            </div>

        )
    }
}