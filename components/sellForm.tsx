"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SellFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  photos: FileList;
};

export default function SellForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SellFormData>();

  const onSubmit = async (data: SellFormData) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);

    Array.from(data.photos).forEach((file) => {
      formData.append("photos", file);
    });

    const response = await fetch("/api/sell", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Property submitted successfully!");
      reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="
        relative
        mx-auto
        w-full
        max-w-lg
        rounded-3xl
        border border-white/10
        bg-slate-900/35
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        p-10
        overflow-hidden
    "
    >

<div
  className="
    absolute
    inset-0
    rounded-3xl
    bg-gradient-to-br
    from-white/10
    via-white/5
    to-transparent
    pointer-events-none
"
/>
<input
  {...register("name")}
  placeholder="Full Name"
  className="
    w-full
    border-b
    border-white/30
    bg-transparent
    py-4
    text-white
    placeholder:text-white/60
    outline-none
    transition-all
    focus:border-[#C89B4D]
"
/>

<input
  {...register("email")}
  placeholder="Email"
  className="
    w-full
    border-b
    border-white/30
    bg-transparent
    py-4
    text-white
    placeholder:text-white/60
    outline-none
    transition-all
    focus:border-[#C89B4D]
"
/>

<input
  {...register("phone")}
  placeholder="Contact Number"
  className="
    w-full
    border-b
    border-white/30
    bg-transparent
    py-4
    text-white
    placeholder:text-white/60
    outline-none
    transition-all
    focus:border-[#C89B4D]
"
/>

<input
  {...register("address")}
  placeholder="Property Address"
  className="
    w-full
    border-b
    border-white/30
    bg-transparent
    py-4
    text-white
    placeholder:text-white/60
    outline-none
    transition-all
    focus:border-[#C89B4D]
"
/>

<label className="block mt-8">

    <span className="mb-3 block text-white font-medium">
        Property Photos
    </span>

    <input
        type="file"
        multiple
        accept="image/*"
        {...register("photos")}
        className="
            block
            w-full
            text-white
            file:rounded-lg
            file:border-0
            file:bg-[#C89B4D]
            file:px-4
            file:py-2
            file:text-white
            hover:file:bg-[#b68639]
        "
    />

</label>

<button
    type="submit"
    className="
        mt-10
        w-full
        rounded-xl
        bg-[#C89B4D]
        py-4
        text-lg
        font-semibold
        text-white
        transition
        hover:bg-[#b68639]
        hover:shadow-lg
        hover:shadow-[#C89B4D]/30
    "
>
    Submit Property
</button>
    </form>
  );
}