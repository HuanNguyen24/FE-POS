import { Component } from "react";

export default class EditOrder extends Component {
   loadFile = function(event) {

           var output = document.getElementById('preview_img');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src)
            }
        };
    render() {
        return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 shadow-2xl flex flex-col items-center justify-center border border-red-500 rounded-lg">
            <div className="inset-0 z-50 overflow-auto">
                <div className="rounded-lg bg-white p-8 shadow-2xl flex flex-col items-center justify-center border border-red-500">
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            Edit product
                        </h2>
                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div className="flex col-span-2 flex-col justify-center items-center ">
                                        <img
                                            id="preview_img"
                                            className="h-48 w-96 mx-auto object-cover"
                                            src=""
                                            alt="Product photo"
                                        />
                                    <label className="block mt-2">
                                        <span className="sr-only">
                                            Choose Product photo
                                        </span>
                                        <input
                                            type="file"
                                            onChange={(e) =>{ this.loadFile(e)}}
                                            className="block w-full text-sm text-slate-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-violet-50 file:text-violet-700
                                            hover:file:bg-violet-100
                                          "
                                        />
                                    </label>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        defaultValue="burgur"
                                        placeholder="Type product name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="Remain"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Remain
                                    </label>
                                    <input
                                        type="text"
                                        name="Remain"
                                        id="Remain"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        defaultValue="99"
                                        placeholder="Product brand"
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        defaultValue={2999}
                                        placeholder="$299"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option selected>Burgur</option>
                                        <option value="Drink">Drink</option>
                                        <option value="Chicken">Chicken</option>
                                        <option value="Salad">Salad</option>
                                        <option value="Coffee">Coffee</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option selected>Status</option>
                                        <option value="Drink">Active</option>
                                        <option value="Chicken">
                                            Inactive
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-600 dark:text-green-600 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-600"
                                >
                                   <i className="h-5 w-5 mr-1 -mb-2 -ml-1 self-center fa fa-arrow-circle-o-up" aria-hidden="true" />

                                    Update
                                </button>
                                <button
                                    type="button"
                                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                >
                                   <i className="h-5 w-5 mr-1 -mb-2 -ml-1 self-center  fa fa-trash-o" aria-hidden="true" />
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                </div>
            </div>
        </div>
    </div>
        );
    }
}