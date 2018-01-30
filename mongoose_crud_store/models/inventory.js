const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aisle: {
        type: String,
        required: true,
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    description: [String]
})

module.exports = mongoose.model('Inventory', inventorySchema)