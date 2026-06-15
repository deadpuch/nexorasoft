import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-white h-full form">
      <div className="h-auto bg-slate-50 p-8 rounded-2xl">
        <div>
          <h1 className="text-[2rem] font-bold">Get in Touch</h1>
        </div>

        <form
          className="flex flex-col gap-6 mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name" className="flex flex-col text-gray-500">
            Name
            <input
              id="name"
              type="text"
              className="bg-transparent border-b-[1px] border-gray-200 text-black outline-none focus:border-black py-2 transition-colors"
              {...register("fullName", {
                required: "Full name required",
              })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.fullName.message as string}
              </span>
            )}
          </label>

          <label htmlFor="email" className="flex flex-col text-gray-500">
            Email
            <input
              id="email"
              type="text"
              className="bg-transparent border-b-[1px] border-gray-200 text-black outline-none focus:border-black py-2 transition-colors"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </span>
            )}
          </label>

          <label htmlFor="occupation" className="flex flex-col text-gray-500">
            Occupation
            <input
              id="occupation"
              type="text"
              className="bg-transparent border-b-[1px] border-gray-200 text-black outline-none focus:border-black py-2 transition-colors"
              {...register("occupation", {
                required: "Occupation required",
              })}
            />
            {errors.occupation && (
              <span className="text-red-500 text-sm mt-1">
                {errors.occupation.message as string}
              </span>
            )}
          </label>

          <div className="flex flex-col gap-5">
            <label
              htmlFor="mobile"
              className="flex flex-col text-gray-500"
            >
              Mobile Number
              <div className="flex mt-1 border-b-[1px] border-gray-200 focus-within:border-black transition-colors py-2">
                <input
                  id="countryCode"
                  type="text"
                  placeholder="+91"
                  className="bg-transparent text-black w-12 text-center outline-none"
                  {...register("countryCode", {
                    required: "Code required",
                    pattern: {
                      value: /^\+\d+$/,
                      message: "Must start with + followed by numbers",
                    },
                  })}
                />
                <div className="w-[1px] h-5 bg-gray-300 mx-3 self-center"></div>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  className="bg-transparent text-black flex-1 outline-none"
                  {...register("mobile", {
                    required: "Mobile number required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Must contain only digits",
                    },
                  })}
                />
              </div>
              {(errors.mobile || errors.countryCode) && (
                <span className="text-red-500 text-sm mt-1">
                  {(errors.mobile?.message as string) ||
                    (errors.countryCode?.message as string)}
                </span>
              )}
            </label>
          </div>

          <label htmlFor="sub" className="flex flex-col text-gray-500">
            Subject
            <input
              id="sub"
              type="text"
              className="bg-transparent border-b-[1px] border-gray-200 text-black outline-none focus:border-black py-2 transition-colors"
              {...register("subject")}
            />
          </label>

          <textarea
            placeholder="message"
            className="p-3 mt-2 h-[120px] bg-transparent border border-gray-200 rounded-lg outline-none focus:border-black transition-colors"
            {...register("message", { required: "Message required" })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message.message as string}
            </span>
          )}

          <div className="w-full justify-start mt-4">
            <button
              className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
              type="submit"
            >
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
