import React from 'react'
import category1 from '../images/pharmacy-WEB.avif'
import category2 from '../images/Pet-Care_WEB.avif'
import category3 from '../images/babycare-WEB.avif'

export default function ContentApp() {
  return (
    <>
  {/* content section */}
  <section className="py-5">
    {/* divide 3 section using flex and flex-wrap */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap -mx-2">
        {/* card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img
              src={category1}
              alt="Category 1"
              className="w-full h-40  rounded-md mb-4"
            />
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img
              src={category2}
              alt="Category 2"
              className="w-full h-40  rounded-md mb-4"
            />
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow">
            <img
              src={category3}
              alt="Category 3"
              className="w-full h-40  rounded-md mb-4"
            />
          </div>
        </div>
      </div>
      {/* product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2 mt-8">
        {/* product card */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-11.avif"
            alt="Product 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        {/* repeat product card for more products */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-12.avif"
            alt="Product 2"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-13.avif"
            alt="Product 3"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-14.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-15.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-17.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-19.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-20.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-2_10.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-7-1_0.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-4_9.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-4_9.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-5_4.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-5_4.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-8_4.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-20.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-2_10.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-7-1_0.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-4_9.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="images/Slice-8_4.avif"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </div>
      </div>
      {/* Rolling paper & tobacco */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">
          Rolling Paper &amp; Tobacco{" "}
          <button
            type="button"
            className="float-end bg-white border-0 text-green-500"
          >
            see all
          </button>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* product card */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll1.avif"
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          {/* repeat product card for more products */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll2.avif"
              alt="Product 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll3.avif"
              alt="Product 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll4.avif"
              alt="Product 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll5.avif"
              alt="Product 5"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll6.avif"
              alt="Product 6"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Rolling paper & tobacco */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">
          Rolling Paper &amp; Tobacco{" "}
          <button
            type="button"
            className="float-end bg-white border-0 text-green-500"
          >
            see all
          </button>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* product card */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll1.avif"
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          {/* repeat product card for more products */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll2.avif"
              alt="Product 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll3.avif"
              alt="Product 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll4.avif"
              alt="Product 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll5.avif"
              alt="Product 5"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll6.avif"
              alt="Product 6"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Rolling paper & tobacco */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">
          Rolling Paper &amp; Tobacco{" "}
          <button
            type="button"
            className="float-end bg-white border-0 text-green-500"
          >
            see all
          </button>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* product card */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll1.avif"
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          {/* repeat product card for more products */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll2.avif"
              alt="Product 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll3.avif"
              alt="Product 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll4.avif"
              alt="Product 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll5.avif"
              alt="Product 5"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll6.avif"
              alt="Product 6"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Rolling paper & tobacco */}
      <div className="mt-8">
        <p className="sm:text-sm md:text-xl lg:text-2xl font-semibold mb-4">
          Rolling Paper &amp; Tobacco{" "}
          <button
            type="button"
            className="float-end bg-white border-0 text-green-500"
          >
            see all
          </button>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {/* product card */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll1.avif"
              alt="Product 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          {/* repeat product card for more products */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll2.avif"
              alt="Product 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll3.avif"
              alt="Product 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll4.avif"
              alt="Product 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll5.avif"
              alt="Product 5"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="images/roll6.avif"
              alt="Product 6"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              Brown Rolling Paper 64 sheets{" "}
            </p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">Pack of 1</p>
            <p className="sm:text-sm md:text-sm lg:text-xl  mb-4">
              ₹ 120{" "}
              <button
                type="button"
                className="border-1 border-green-500 p-1 float-end rounded-xl"
              >
                ADD
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
