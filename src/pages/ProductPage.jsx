import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast"; // Optional: Use toast notifications
import Button from "../componate/ul/Button/Button";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://riya-art-infotech-backend-2-0.onrender.com/product/read`
      );
      const foundProduct = res.data.data.find((item) => item._id === id);
      console.log("Fetched product:", foundProduct);
      if (!foundProduct) {
        throw new Error("Product not found");
      }
      setProduct(foundProduct);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/create-order`,
        {
          amount: product.price,
        }
      );
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
          const verifyRes = await axios.post(
            `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );
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

  if (loading)
    return <div className="mt-24 text-center text-lg">Loading...</div>;
  if (!product)
    return (
      <div className="mt-24 text-center text-red-500">Product not found</div>
    );

  return (
    <div className="w-full mt-0 sm:mt-8 py-8 antialiased">
      <div className="container mx-auto px-4 py-8">
        <div className="py-4">
          <p className="font-size-sm font-primary"> <NavLink to={'/product'}>product </NavLink> / product page</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Left Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product.images[0]}
              alt="Product"
              className="w-full h-auto rounded-lg border border-gray-200 mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {product.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 px-4 md:sticky md:top-24 self-start ">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>

            <div className="flex items-center mb-4">
              {Array(parseInt(product.rating))
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.review})
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              {/* <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div> */}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">
              <Button
                normal
                variant={"simple-blue"}
                name={"This Theme Customize Contact"}
                handleClick={() => handlePayment()}
              />{" "}
              {/*link={'/contact'} */}
              <Button
                normal
                variant={"simple-border"}
                name={"More Watch list"}
                link={"/product"}
              />
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Full-Stack Web Application Development</li>
                <li>SEO-Friendly Website Development</li>
                <li>Bug Fixing & Maintenance Services</li>
                <li>Domain & Hosting Setup Support</li>
                <li>Technical Consultation & Support</li>
                <li>Admin Dashboards & Panels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
