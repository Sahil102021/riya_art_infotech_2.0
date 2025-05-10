import React from 'react';

const TimelineComponents = () => {
    let data = [
        {
          title: 'Requirement Analysis',
          time: '1 to 2 day',
          description:
            'Gathering client requirements, defining project scope, and creating a development roadmap.',
        },
        {
          title: 'UI/UX Design & Prototyping',
          time: '3 to 5 day',
          description:
            'Designing user-friendly interfaces and building interactive prototypes for validation.',
        },
        {
          title: 'Development & Testing',
          time: '10 to 15 day',
          description:
            'Writing clean code, integrating features, and performing iterative testing for quality assurance.',
        },
        {
          title: 'Deployment & Maintainance',
          time: 'monthy',
          description:
            'Launching the product, monitoring performance, and ensuring continuous improvements.',
        },
      ]
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="grid sm:gap-4 sm:mx-4 sm:grid-cols-12 gap-3">
          {/* Left Side */}
          <div className="col-span-12 sm:col-span-6">
            <div className="text-center sm:text-left mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[var(--bg-color-xi)]">
              <h3 className="font-size-2xl font-semibold font-secondary tracking-wider ">Developmate Step</h3>
              <span className="font-size-xs font-bold tracking-wider uppercase text-gray-600">
                All step height qualite
              </span>
            </div>
            <div className="w-full rounded-lg overflow-hidden h-96">
              <img
                src="https://media.licdn.com/dms/image/v2/C5612AQF7hO2dlP2VhA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1622950606484?e=2147483647&v=beta&t=p97DSrS320nhEz7t3xbhKX0N_RFBBcAOTNBGwzGCXE0"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side Timeline */}
          <div className="relative col-span-12 sm:px-4 sm:col-span-6 flex items-center">
            <div className="col-span-12 space-y-6 sm:space-y-12 relative sm:px-4 sm:col-span-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              {data.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[var(--bg-color-xi)]"
                >
                  <h3 className="font-size-xl font-semibold tracking-wide text-[var(--bg-color-xi)] underline sm:no-underline">
                    {step.title}
                  </h3>
                  <time className="font-size-xs tracking-wide uppercase text-gray-600">
                    {step.time}
                  </time>
                  <p className="font-size-sm mt-3">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponents;
