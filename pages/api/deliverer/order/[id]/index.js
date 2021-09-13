import nc from 'next-connect';
import { isDeliverer, isAuth } from '../../../../../utils/auth';
import Order from '../../../../../models/Order';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isDeliverer);
handler.get(async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
});

handler.put(async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    order.name = req.body.name;
    order.isPaid = Boolean(req.body.isPaid);
    order.isDelivered = Boolean(req.body.isDelivered);
    await order.save();
    await db.disconnect();
    res.send({ message: 'Order Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Order Not Found' });
  };
});



handler.delete(async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    await order.remove();
    await db.disconnect();
    res.send({ message: 'Order Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Order Not Found' });
  }
});

export default handler;