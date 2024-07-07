import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Subscribe to the newsletter
router.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    try {
        const newSubscription = await prisma.newsletter.create({
            data: {
                userEmail: email,
            },
        });
        res.status(201).json({ success: true, message: "Subscribed successfully", data: newSubscription });
    } catch (e) {
        console.log(e.message)
        if (e.code === 'P2002') { // Prisma unique constraint violation
            res.status(400).json({ success: false, message: "Email is already subscribed" });
        } else {
            res.status(500).json({ success: false, message: "Failed to subscribe" });
        }
    }
});

export default router;
