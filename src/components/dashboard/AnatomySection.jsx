export default function AnatomySection() {
  return (
    <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[350px] bg-[#f5f9ff] rounded-lg shadow-md p-2 relative flex flex-col items-center">
      
      {/* Anatomy Image */}
      <div className="w-full flex justify-center">
        <div className="bg-[#f5f9ff] p-2 flex items-center justify-center">
          <img src="/anatomy.png" alt="Human Anatomy" className="w-full h-auto rounded-md" />
        </div>
      </div>

      {/* Healthy Heart Tag */}
      <div
        className="absolute bg-indigo-700 text-white px-1 py-1 rounded-md shadow-md flex items-center gap-1 text-xs sm:text-sm"
        style={{ top: "20%", right: "-8%" }}
      >
        <img src="/scanner.png" alt="Scanner" className="absolute w-6 sm:w-7 h-6 sm:h-7 left-[-25px] sm:left-[-30px]" />
        <img src="/red-heart.png" alt="Heart" className="w-4 sm:w-5 h-5 sm:h-6" />
        <p className="font-medium">Healthy Heart</p>
      </div>

      {/* Healthy Leg Tag */}
      <div
        className="absolute bg-[#26ffe9] font-bold text-navy-500 px-2 py-1 rounded-md shadow-md flex items-center gap-1 text-xs sm:text-sm"
        style={{ bottom: "40%", left: "-6%" }}
      >
        <img src="/leg.png" alt="Leg" className="w-4 sm:w-5 h-5 sm:h-6" />
        <p className="font-bold">Healthy Leg</p>
        <img
          src="/scanner.png"
          alt="Scanner"
          className="absolute w-6 sm:w-7 h-6 sm:h-7 right-[-25px] sm:right-[-30px]"
        />
      </div>
      
    </div>
  );
}
