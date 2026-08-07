"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/Toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const careersSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(10, "Enter a valid phone number."),
  position: z.string().min(2, "Enter the role you are applying for."),
  experience: z.string().min(1, "Share your experience level."),
  resume: z.any().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  message: z.string().max(1000).optional(),
});

export type CareersFormValues = z.infer<typeof careersSchema>;

export function CareersForm() {
  const { toast } = useToast();
  const [resumeName, setResumeName] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormValues>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      linkedin: "",
      portfolio: "",
      message: "",
    },
  });

  const onSubmit = async (values: CareersFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    reset();
    setResumeName("");
    toast("Application submitted. We will reach out with next steps.", "success");
    console.log("Career application:", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/95 p-6 rounded-3xl border border-zinc-200 shadow-xl dark:bg-zinc-950/90 dark:border-zinc-800">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full Name" {...register("name")} error={errors.name?.message} />
        <Input label="Email Address" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Phone Number" type="tel" {...register("phone")} error={errors.phone?.message} />
        <Input label="Applied Position" {...register("position")} error={errors.position?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Experience" {...register("experience")} error={errors.experience?.message} placeholder="2 years in marketing, 5 years in development" />
        <Input label="LinkedIn Profile" type="url" {...register("linkedin")} error={errors.linkedin?.message} placeholder="Optional" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Portfolio / Website" type="url" {...register("portfolio")} error={errors.portfolio?.message} placeholder="Optional" />
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Resume Upload</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="flex h-11 w-full rounded-xl border border-zinc-200 bg-white/50 px-4 text-sm text-zinc-900 transition-all duration-200 file:mr-4 file:rounded-full file:border-0 file:bg-indigo-600 file:px-4 file:text-white file:font-semibold file:shadow-sm file:shadow-indigo-500/10 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-50"
            {...register("resume")}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) setResumeName(file.name);
            }}
          />
          {resumeName && <span className="text-xs text-zinc-500 dark:text-zinc-400">Selected file: {resumeName}</span>}
        </div>
      </div>
      <Textarea label="Tell us why you’re a good fit" {...register("message")} error={errors.message?.message} placeholder="Share your strengths, availability, and desired work style." />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">We review applications quickly and respond with next steps within 48 hours.</p>
        <Button type="submit" isLoading={isSubmitting} variant="gradient">
          Apply Now
        </Button>
      </div>
    </form>
  );
}
