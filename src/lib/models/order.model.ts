import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
    sessionId: string;
    paymentStatus: string;
    amountTotal: number;
    currency: string;
    customerEmail: string;
    createdAt: Date;
}

const OrderSchema: Schema = new Schema({
    sessionId: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    amountTotal: { type: Number, required: true },
    currency: { type: String, required: true },
    customerEmail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;