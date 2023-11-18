const config = require('../utils/config')
const Order = require('../models/order')

const Razorpay = require('razorpay');

const paymentController = {

    createOrder: async (req, res) => {
        try {
            const instance = new Razorpay({
                key_id: process.env.RAZORPAY_KEY_ID,
                key_secret: process.env.RAZORPAY_SECRET,
            });
            const options = {
                amount: req.body.amount,
                currency: 'INR',
            };
            const order = await instance.orders.create(options);
            if (!order) return res.status(500).send('Some error occured');
            res.send(order);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getKey: async (req, res) => {
        res.send({ key: process.env.RAZORPAY_KEY_ID });
    },

    payOrder: async (req, res) => {
        try {
            const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature, userId } =
                req.body;
            const newOrder = new Order({
                isPaid: true,
                amount: amount,
                razorpay: {
                    orderId: razorpayOrderId,
                    paymentId: razorpayPaymentId,
                    signature: razorpaySignature,
                },
                userId: userId,
            });
            await newOrder.save();
            res.send({
                msg: 'Payment was made successfully !!! ',
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },

    getListOrders: async (req, res) => {
        console.log(req.params.id)
        const orders = await Order.find({ userId: (req.params.id) }).exec();
        //console.log(orders)
        res.send(orders);

    },
}

module.exports = paymentController