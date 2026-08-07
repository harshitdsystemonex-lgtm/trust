"use client";

import { useToast } from "@/components/ui/Toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const internshipSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(10, "Enter a valid phone number."),
  institution: z.string().min(2, "Enter your college or institute."),
  course: z.string().min(2, "Enter your course or specialization."),
  year: z.string().min(1, "Enter your year of study."),
  availability: z.string().min(2, "Describe your availability."),
  message: z.string().max(1000).optional(),
});

export type InternshipFormValues = z.infer<typeof internshipSchema>;

export function InternshipForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InternshipFormValues>({
    resolver: zodResolver(internshipSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      institution: "",
      course: "",
      year: "",
      availability: "",
      message: "",
    },
  });

  const onSubmit = async (values: InternshipFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    reset();
    toast("Internship request received. We’ll contact you with the joining details.", "success");
    console.log("Internship application:", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/95 p-6 rounded-3xl border border-zinc-200 shadow-xl dark:bg-zinc-950/90 dark:border-zinc-800">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full Name" {...register("name")} error={errors.name?.message} />
        <Input label="Email Address" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Phone Number" type="tel" {...register("phone")} error={errors.phone?.message} />
        <Input label="Institute / College" {...register("institution")} error={errors.institution?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Course / Specialization" {...register("course")} error={errors.course?.message} />
        <Input label="Year of Study" {...register("year")} error={errors.year?.message} placeholder="e.g. 2nd year" />
      </div>
      <Input label="Availability" {...register("availability")} error={errors.availability?.message} placeholder="e.g. 3 months, part-time" />
      <Textarea label="Tell us why you want to intern with us" {...register("message")} error={errors.message?.message} placeholder="Share your interests, goals, and skills." />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">We review internship profiles for team fit and mentorship readiness.</p>
        <Button type="submit" isLoading={isSubmitting} variant="gradient">
          Apply for Internship
        </Button>
      </div>
    </form>
  );
}
