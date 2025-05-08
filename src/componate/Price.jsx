import React from 'react';

const pricingPlans = [
  {
    title: "Beginner",
    price: "Free",
    description: "Etiam ac convallis enim, eget euismod dolor.",
    features: ["Aenean quis", "Morbi semper", "Tristique enim nec"],
    buttonLabel: "Get Started",
    buttonClass: "dark:bg-violet-600 dark:text-gray-50",
    isFree: true,
  },
  {
    title: "Pro",
    price: "$24/month",
    description: "Morbi cursus ut sapien sit amet consectetur.",
    features: [
      "Everything in Free",
      "Phasellus tellus",
      "Praesent faucibus",
      "Aenean et lectus blandit",
    ],
    buttonLabel: "Get Started",
    buttonClass: "dark:bg-gray-100 dark:text-violet-600",
    isFree: false,
  },
  {
    title: "Team",
    price: "$72/month",
    description: "Phasellus ultrices bibendum nibh in vehicula.",
    features: [
      "Everything in Pro",
      "Fusce sem ligula",
      "Curabitur dictum",
      "Duis odio eros",
      "Vivamus ut lectus ex",
    ],
    buttonLabel: "Get Started",
    buttonClass: "dark:bg-violet-600 dark:text-gray-50",
    isFree: false,
  },
];

const Price = () => {
  return (
    <div>
      <section className="w-ful ">
        <div className="w-full">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase dark:text-violet-600">Pricing</span>
            <h2 className="text-4xl font-bold lg:text-5xl font-secondary ">Choose your best plan</h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div
                  className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 
                  ${plan.isFree ? "dark:bg-gray-50 hover:bg-gray-200" : "dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700 hover:text-white"} 
                  transition-transform transform hover:scale-105`}
                >
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold font-primary ">{plan.title}</h4>
                    <span className="text-6xl font-bold font-secondary ">{plan.price}</span>
                  </div>
                  <p className= {` ${plan.isFree ? 'text-black' : 'text-white'} font-primary leading-relaxed`}>{plan.description}</p>
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex mb-2 space-x-2">
                        <div className={`${plan.isFree ? 'text-black' : 'text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 currentcolor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        </div>
                        <span className={`font-primary ${plan.isFree ? 'text-black' : 'text-white'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`inline-block px-5 py-3 font-semibold tracking-wider text-center rounded font-primary
                    ${plan.isFree ? "bg-violet-700 text-white hover:bg-gray-600" : "bg-white text-violet-700 hover:bg-black hover:text-white"}`}
                  >
                    {plan.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Price;
