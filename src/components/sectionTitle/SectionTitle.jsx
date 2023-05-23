

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center md:w-1/3 mx-auto my-12">
           <p className="text-yellow-500 mb-2">---{subHeading}---</p> 
           <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;