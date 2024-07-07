import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await prisma.order.findMany();
        res.status(200).json({ success: true, data: orders });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Get order by id

router.get('/view', async (req, res) => {
    const { fullName, email } = req.query;
  
    try {
      const orders = await prisma.order.findFirst({
        where: {
          fullName,
          email,
        },
        select: {
          categoryType: true,
          deliveryLocation: true,
        },
      });
  
      if (orders.length === 0) {
        res.status(404).json({ success: false, message: "No orders found for this user." });
      } else {
        res.status(200).json(orders);
      }
    } catch (e) {
      console.error("Error fetching order details:", e);
      res.status(500).json({ success: false, message: "Error fetching order details." });
    }
  });
// Create a new order
router.post("/", async (req, res) => {
    try {
        const { fullName, email, phoneNumber, deliveryLocation, categoryType } = req.body;
        const newOrder = await prisma.order.create({
            data: {
                fullName,
                email,
                phoneNumber: parseInt(phoneNumber),
                deliveryLocation,
                categoryType,
            },
        });
        res.status(201).json({ success: true, data: newOrder });
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ success: false, message: "Failed to create order" });
    }
});

// Update an existing order
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { fullName, email, phoneNumber, deliveryLocation, categoryType } = req.body;
    try {
        const updatedOrder = await prisma.order.update({
            where: { id: parseInt(id) },
            data: {
                fullName,
                email,
                phoneNumber,
                deliveryLocation,
                categoryType,
            },
        });
        res.status(200).json({ success: true, data: updatedOrder });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Delete an order
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.order.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

export default router;
