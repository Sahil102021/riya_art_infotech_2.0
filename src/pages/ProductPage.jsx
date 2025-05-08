import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast"; // Optional: Use toast notifications

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/create-order`, {
        amount: product.price,
      });
      console.log("Razorpay order data:", res.data.data);
      handlePaymentVerify(res.data.data); // pass the Razorpay order data
    } catch (error) {
      console.error("Error in payment:", error);
    }
  };

  const handlePaymentVerify = async (orderData) => {
    console.log("Order data:", orderData);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Riya Art Infotech",
      description: "web development services",
      order_id: orderData.id,
      handler: async function (response) {
        console.log("Payment response:", response);
        try {
          const verifyRes = await axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
            console.log("Verification response:", verifyRes.data);
          if (verifyRes.data.message) {
            toast.success(verifyRes.data.message);
          }
        } catch (error) {
          console.error("Verification error:", error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <div className="mt-24 text-center text-lg">Loading...</div>;
  if (!product) return <div className="mt-24 text-center text-red-500">Product not found</div>;

  return (
    <div className="w-full mt-24 py-8  antialiased">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src={product.image} alt={product.title} />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              {product.title}
            </h1>
            <p className="mt-4 text-gray-500 ">{product.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900 ">₹{product.price}</p>

            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2.5 rounded-lg border text-sm font-medium bg-white hover:bg-gray-100  ">
                ❤️ Add to Favorites
              </button>
              <button
                className="px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                onClick={handlePayment}
              >
                Buy ₹{product.price}
              </button>
            </div>

            <hr className="my-6 border-gray-200 " />
            <p className="text-sm text-gray-500 ">Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
