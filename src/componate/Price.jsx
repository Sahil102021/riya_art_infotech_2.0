import React from 'react';
import { svgIcon } from '../conts/svgIcon';

const pricingPlans = [
  {
    title: "Beginner",
    price: "Free",
    description: "Etiam ac convallis enim, eget euismod dolor.",
    features: ["Aenean quis", "Morbi semper", "Tristique enim nec"],
    buttonLabel: "Get Started",
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
    isFree: false,
  },
];

const Price = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-bold uppercase tracking-wider text-[var(--bg-color-xi)]">Pricing</span>
          <h2 className="font-size-3xl font-bold font-tertiary mt-2">Choose your best plan</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105
                ${plan.isFree
                  ? "bg-gray-200 dark:bg-gray-200 hover:bg-gray-300"
                  : "bg-[var(--bg-color-xi)] text-white hover:bg-[var(--bg-color-xii)]"}`
              }
            >
              <div className="mb-4 space-y-2">
                <h4 className="font-size-xl font-bold font-primary">{plan.title}</h4>
                <span className="font-size-4xl font-bold font-secondary">{plan.price}</span>
              </div>

              <p className={`mb-4 font-primary font-size-sm ${plan.isFree ? 'text-black' : 'text-white'}`}>
                {plan.description}
              </p>

              <ul className={`flex-1 space-y-1 xs:space-y-2 mb-4 xs:mb-6 ${plan.isFree ? 'text-black' : 'text-white'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="shrink-0">{svgIcon.trueIcon2}</div>
                    <span className="font-size-sm font-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                aria-label={`Choose ${plan.title} plan`}
                className={`px-5 py-3 rounded font-size-sm font-semibold font-primary transition-colors duration-300
                  ${plan.isFree
                    ? "bg-[var(--bg-color-xi)] text-white hover:bg-[var(--bg-color-iii)]"
                    : "bg-white text-[var(--bg-color-xi)] hover:bg-[var(--bg-color-iii)] hover:text-black"}`}
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
