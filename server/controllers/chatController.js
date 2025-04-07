const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.sendMessage = async (req, res) => {
  const { message, senderId } = req.body;

  try {
    const newChat = await prisma.chat.create({
      data: { message, senderId }
    });
    res.json(newChat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const chats = await prisma.chat.findMany({
      orderBy: { createdAt: 'asc' },
      include: { sender: true }
    });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
