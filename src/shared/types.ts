import z from "zod";

export const NewsPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  summary: z.string().optional(),
  is_published: z.number().int(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const ContactMessageSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
  is_read: z.number().int(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const DonationSchema = z.object({
  id: z.number(),
  donor_name: z.string(),
  donor_email: z.string().email(),
  donor_phone: z.string().optional(),
  amount: z.number(),
  currency: z.string(),
  is_anonymous: z.number().int(),
  dedication_message: z.string().optional(),
  payment_status: z.string(),
  payment_reference: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const CreateContactMessageSchema = z.object({
  name: z.string().min(1, "שם הוא שדה חובה"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z.string().optional(),
  message: z.string().min(1, "הודעה היא שדה חובה"),
});

export const CreateDonationSchema = z.object({
  donor_name: z.string().min(1, "שם הוא שדה חובה"),
  donor_email: z.string().email("כתובת אימייל לא תקינה"),
  donor_phone: z.string().optional(),
  amount: z.number().min(1, "סכום התרומה חייב להיות גבוה מ-0"),
  is_anonymous: z.boolean().default(false),
  dedication_message: z.string().optional(),
});

export type NewsPost = z.infer<typeof NewsPostSchema>;
export type ContactMessage = z.infer<typeof ContactMessageSchema>;
export type Donation = z.infer<typeof DonationSchema>;
export type CreateContactMessage = z.infer<typeof CreateContactMessageSchema>;
export type CreateDonation = z.infer<typeof CreateDonationSchema>;
