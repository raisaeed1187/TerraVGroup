import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed",
          message: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission(result.data);
      
      res.status(201).json({ 
        success: true,
        message: "Thank you for contacting us. We will get back to you shortly.",
        id: submission.id
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to process your request. Please try again later."
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch submissions."
      });
    }
  });

  return httpServer;
}
