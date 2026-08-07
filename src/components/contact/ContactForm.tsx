"use client";

import { useToast } from "@/components/ui/Toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(3, "Enter a subject."),
  message: z.string().min(10, "Enter a message."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset();
    toast("Message sent. We will respond within one business day.", "success");
    console.log("Contact inquiry:", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/95 p-6 rounded-3xl border border-zinc-200 shadow-xl dark:bg-zinc-950/90 dark:border-zinc-800">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Your Name" {...register("name")} error={errors.name?.message} />
        <Input label="Email Address" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <Input label="Subject" {...register("subject")} error={errors.subject?.message} />
      <Textarea label="Message" {...register("message")} error={errors.message?.message} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Ask about projects, partnerships, demos or quotes.</p>
        <Button type="submit" isLoading={isSubmitting} variant="gradient">
          Send Message
        </Button>
      </div>
    </form>
  );
}
