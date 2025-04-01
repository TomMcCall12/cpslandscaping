import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static website with no backend functionality needed
  // We'll just serve the static files from the client build

  const httpServer = createServer(app);
  return httpServer;
}
