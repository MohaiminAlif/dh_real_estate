"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "../app/globals.css";

type BuyFormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string[];
  bedrooms: number;
  washrooms: number;
  parking: number;
};

export default function BuyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<BuyFormData>();

  const onSubmit = async (data: BuyFormData) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("city", data.city);

    data.propertyType.forEach((type) =>
      formData.append("propertyType", type)
    );

    formData.append("bedrooms", String(data.bedrooms));
    formData.append("washrooms", String(data.washrooms));
    formData.append("parking", String(data.parking));

    try {
      const response = await fetch("/api/buy", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Your request has been submitted!");

      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
       className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/30 bg-white-900/35 backdrop-magnify shadow-[0_8px_40px_rgba(300,300,300,0.35)] p-10 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

      <div className="relative space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Buy Your Dream Home
          </h2>

          <p className="mt-3 text-white/70">
            Tell us what you're looking for and we'll find it.
          </p>
        </div>

        {/* Name */}
        <input
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="w-full border-b border-white/30 bg-transparent py-4 text-white placeholder:text-white/60 outline-none focus:border-[#C89B4D]"
        />

        {/* Phone */}
        <input
          {...register("phone", { required: true })}
          placeholder="Phone Number"
          className="w-full border-b border-white/30 bg-transparent py-4 text-white placeholder:text-white/60 outline-none focus:border-[#C89B4D]"
        />

        {/* Email */}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email Address"
          className="w-full border-b border-white/30 bg-transparent py-4 text-white placeholder:text-white/60 outline-none focus:border-[#C89B4D]"
        />

        {/* City */}
        <div>
          <label className="mb-2 block text-white font-medium">
            Preferred City
          </label>

          <select
            {...register("city")}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
          >
            <option value="" className="text-black">
              Select a City
            </option>

            <option className="text-black">Thunder Bay</option>
            <option className="text-black">Timmins</option>
            <option className="text-black">Toronto</option>
            <option className="text-black">Vaughan</option>
            <option className="text-black">Waterloo</option>
            <option className="text-black">Welland</option>
            <option className="text-black">Windsor</option>
            <option className="text-black">Woodstock</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="mb-3 block text-white font-medium">
            Property Type
          </label>

          <div className="grid grid-cols-2 gap-3 text-white">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Condo"
                {...register("propertyType")}
              />
              Condo
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Duplex"
                {...register("propertyType")}
              />
              Duplex
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Single"
                {...register("propertyType")}
              />
              Single
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Townhouse"
                {...register("propertyType")}
              />
              Townhouse
            </label>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="mb-2 block text-white font-medium">
            Bedrooms
          </label>

          <select
            {...register("bedrooms")}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
          >
            {[1,2,3,4,5,"more than 5"].map((n) => (
              <option key={n} value={n} className="text-black">
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Washrooms */}
        <div>
          <label className="mb-2 block text-white font-medium">
            Washrooms
          </label>

          <select
            {...register("washrooms")}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
          >
            {[1,2,3,4,5,"more than 5"].map((n) => (
              <option key={n} value={n} className="text-black">
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Parking */}
        <div>
          <label className="mb-2 block text-white font-medium">
            Parking Spaces
          </label>

          <select
            {...register("parking")}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
          >
            {[0,1,2,3,4,5].map((n) => (
              <option key={n} value={n} className="text-black">
                {n}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-xl bg-[#C89B4D] py-4 text-lg font-semibold text-white transition hover:bg-[#b68639]"
        >
          {isSubmitting ? "Submitting..." : "Find My Home"}
        </button>
      </div>
    </form>
  );
}