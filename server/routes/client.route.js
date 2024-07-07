// client.route.js

import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
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

export default router;
