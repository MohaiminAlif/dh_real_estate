"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  LeadFormData,
  leadSchema,
} from "@/lib/validation";

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),

    defaultValues: {
      service: "I'm Looking To Buy",
      budget: "Select Price Range",
    },
  });

  // const onSubmit = async (data: LeadFormData) => {
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",

  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.message);
  //     }

  //     alert("Thank you! We received your request.");

  //     reset();
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  // };

  const onSubmit = async (data: LeadFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Your request has been submitted successfully!");

      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong.";

      toast.error(message);
    }
  };
  return (
    <div className="w-full max-w-md rounded-3xl bg-[#071A2F] p-8 text-white shadow-2xl">
      <h3 className="text-3xl font-bold">
        Let's Find Your
        <br />
        Dream Home
      </h3>

      <p className="mt-3 text-gray-300">
        Tell us what you're looking for and our team will contact you shortly.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Name */}

        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className="input text-black"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="input text-black"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}

        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="input text-black"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service */}

        <select
          {...register("service")}
          className="input text-black"
        >
          <option>I'm Looking To Buy</option>
          <option>I'm Looking To Sell</option>
        </select>

        {/* Budget */}

        <select
          {...register("budget")}
          className="input text-black"
        >
          <option>Select Price Range</option>
          <option>$300K - $500K</option>
          <option>$500K - $800K</option>
          <option>$800K+</option>
        </select>

        {/* Message */}

        <textarea
          {...register("message")}
          className="input min-h-[120px] text-black"
          placeholder="Tell us more"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[#C89B4D] py-4 font-semibold transition hover:bg-[#b68639] disabled:opacity-50"
        >
          {isSubmitting
            ? "Submitting..."
            : "Get Started"}
        </button>

        <p className="text-center text-xs text-gray-400">
          We respect your privacy.
        </p>
      </form>
    </div>
  );
}