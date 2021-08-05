const Sectionheader = ({title, emoji}) => {
    return (
        <div className="flex flex-row pb-6 text-3xl">
            <h1 className="text-yellow-500 font-semibold">
                {title}
            </h1>
            <p className="hover:-translate-y-0.5 transform transition">{emoji}</p>
        </div>
    );
};

export default Sectionheader;
