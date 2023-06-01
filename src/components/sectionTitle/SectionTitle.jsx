

const SectionTitle = ({subHeading, heading, isCart}) => {
    return (
        <div className={`text-center mx-auto my-12  ${isCart ? "md:w-1/2" : "md:w-1/3"}`}>
           <p className="text-yellow-500 mb-2">---{subHeading}---</p> 
           <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;