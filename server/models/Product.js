const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        brand: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: { type: String, required: true },
        image: String,
        categories: { type: Array },
        price: { type: Number, required: true },
        size: { type: Array },
        color: { type: Array },
        inStock: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
);

module.exports = model("Product", schema);
