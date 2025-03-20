import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import EmptyCart from "../Pages/EmptyCart";

const CartProduct = ({ cartItems }) => {
  const dispatch = useDispatch();
  if (!cartItems || cartItems.length === 0) {
    return (
      <EmptyCart/>
    );
  }

  function handleCartItemDelete(item) {
    dispatch(removeFromCart(item.id));
    toast.success(`${item.title} added Successfully`);
  }
  function handleQtyIncrement(id) {
    dispatch(incrementQty(id));
  }
  function handleQtyDecrement(id) {
    dispatch(decrementQty(id));
  }
  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border border-collapse border-gray-300">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center md:pl-16">Quantity</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, i) => (
              <tr className="border-b" key={i}>
                <td className="flex items-center gap-4 p-3">
                  <Image
                    width={80}
                    height={80}
                    src={item?.imageUrl}
                    alt={item?.title}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">
                      {item?.title}
                    </h2>
                  </div>
                </td>
                <td className="p-3 text-center md:pl-16">
                  <div className="inline-flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQtyDecrement(item?.id)}
                      className="px-3 py-2 border-r hover:bg-gray-200 md:px-2 hover:rounded-l-lg dark:hover:text-slate-800"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <p className="px-4 ">{item?.qty}</p>
                    <button
                      onClick={() => handleQtyIncrement(item?.id)}
                      className="px-3 py-2 border-l hover:bg-gray-200 md:px-2 hover:rounded-r-lg dark:hover:text-slate-800"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <TbCurrencyTaka className="w-5 h-5" />{" "}
                    {item?.salePrice}
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <TbCurrencyTaka className="w-5 h-5" />{" "}
                    {item?.qty * item?.salePrice}
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleCartItemDelete(item)}
                  >
                    <Trash2 className="w-5 h-5 text-red-600 hover:text-red-800" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile View (Cards) */}
      <div className="space-y-4 md:hidden">
        {cartItems.map((item, i) => (
          <div
            className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm"
            key={i}
          >
            {/* Product Info */}
            <div className="flex gap-4">
              <Image
                width={80}
                height={80}
                src={item?.imageUrl}
                alt={item?.title}
                className="object-cover rounded-lg"
              />
              <div>
                <span className="block text-xs text-gray-500">
                  Product Name:
                </span>
                <h2 className="text-sm font-semibold">
                  {item?.title}
                </h2>
              </div>
            </div>

            {/* Quantity & Price */}
            <div className="flex items-center justify-between">
              <div className="inline-flex flex-col items-center px-2 py-1">
                <span className="block mb-1 text-xs text-gray-500">
                  Quantity:
                </span>
                <div className="flex items-center border rounded-lg">
                  <button className="px-3 py-2 border-r hover:bg-gray-200 hover:rounded-l-lg dark:hover:text-slate-800">
                    <Minus className="w-5 h-5" />
                  </button>
                  <p className="px-4">2</p>
                  <button className="px-3 py-2 border-l hover:bg-gray-200 hover:rounded-r-lg dark:hover:text-slate-800">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="text-center ">
                <span className="block text-xs text-gray-500">
                  Price:
                </span>
                <p className="flex items-center font-medium">
                  <TbCurrencyTaka className="w-5 h-5" />{" "}
                  {item?.salePrice}
                </p>
              </div>
            </div>

            {/* Total Price & Remove */}
            <div className="flex items-center justify-between">
              <div className="text-center">
                <span className="block text-xs text-gray-500">
                  Total Price:
                </span>
                <p className="flex items-center text-lg font-semibold">
                  <TbCurrencyTaka className="w-5 h-5" />{" "}
                  {item?.salePrice}
                </p>
              </div>
              <button onClick={() => handleCartItemDelete(item)}>
                <Trash2 className="w-5 h-5 text-red-600 hover:text-red-800" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
