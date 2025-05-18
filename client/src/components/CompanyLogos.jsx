import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Trusted by creators worldwide to generate stunning model images
      </h5>
      <ul className="flex gap-6 justify-center flex-wrap">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-none w-[6.5rem] h-[6.5rem] rounded-full bg-n-8 shadow-md"
          >
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="max-w-[70%] max-h-[70%] object-contain rounded-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
