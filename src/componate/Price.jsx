import React from 'react';
import { svgIcon } from '../conts/svgIcon';

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
            <span className="font-bold tracking-wider uppercase text-[var(--bg-color-xi)]">Pricing</span>
            <h2 className="font-size-3xl font-tertiary ">Choose your best plan</h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div
                  className={`flex flex-grow flex-col p-2 sm:p-6 space-y-6 rounded-xl shadow  
                  ${plan.isFree ? "dark:bg-gray-200 hover:bg-gray-200" : "bg-[var(--bg-color-xi)] dark:text-gray-50 hover:bg-[var(--bg-color-xii)] hover:text-white"} 
                  transition-transform transform hover:scale-105`}
                >
                  <div className="space-y-2">
                    <h4 className="font-size-2xl font-bold font-primary ">{plan.title}</h4>
                    <span className="font-size-4xl font-bold font-secondary ">{plan.price}</span>
                  </div>
                  <p className= {` ${plan.isFree ? 'text-black' : 'text-white'} font-primary leading-relaxed font-size-sm`}>{plan.description}</p>
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex sm:mb-2 space-x-2">
                        <div className={`${plan.isFree ? 'text-black' : 'text-white'}`}>
                        {svgIcon.trueIcon2}
                        </div>
                        <span className={`font-primary ${plan.isFree ? 'text-black' : 'text-white'} font-size-sm`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`inline-block px-5 py-3 font-semibold tracking-wider text-center rounded font-primary
                    ${plan.isFree ? "bg-[var(--bg-color-xi)] text-white hover:bg-[var(--bg-color-iii)]" : "bg-white text-[var(--bg-color-xi)] hover:bg-[var(--bg-color-iii)] hover:text-black"}`}
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
