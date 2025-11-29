import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (existing)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  phone: z.string().optional(),
  service: z.string().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Service types for frontend
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

// Project types for frontend
export type Project = {
  id: string;
  title: string;
  category: "fit-out" | "renovation" | "mep" | "civil" | "painting";
  description: string;
  scope: string;
  challenges: string;
  imageUrl: string;
};

// Testimonial types for frontend
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
};

// Timeline step types for frontend
export type TimelineStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
};
