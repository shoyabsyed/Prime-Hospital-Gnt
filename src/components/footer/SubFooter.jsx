const SubFooter = () => {
  return (
    <div className="bg-slate-800 flex flex-col md:flex-row justify-between items-center text-white p-6">
      <div className="mb-4 md:mb-0">
        <p className="text-xs font-semibold text-center md:text-left">
          &copy; 2024 Prime Hospital Guntur - Powered by Rishi
        </p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-xs font-semibold hover:text-blue-500">
          Privacy
        </a>
        <a href="#" className="text-xs font-semibold hover:text-blue-500">
          Terms and Conditions
        </a>
      </div>
    </div>
  );
};

export default SubFooter;
