import { z } from "zod";

// Client-safe contact submission schema (without database dependencies)
export const insertContactSubmissionSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(1, "Le message est requis"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>; 