import ErrorSVG from "../assets/images/error.jpg";

const PageNotFound = () => {
  return (
    <div className="w-full h-full">
      <img
        src={ErrorSVG}
        alt="error-svg"
        className="w-full h-[100%] object-contain md:object-cover absolute top-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-center pb-24 md:pb-12 text-white text-center gap-2">
        <h1 className="text-xl md:text-3xl font-bold">Page not found</h1>
        <p className="text-sm">Sorry, we can't find the page you're looking for.</p>
        <p className="text-sm">
          Click <span className="text-blue-300 cursor-pointer">here</span> to go
          back to the home page.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
