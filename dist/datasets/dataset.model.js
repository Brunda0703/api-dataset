"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetSchema = void 0;
const mongoose = require("mongoose");
exports.DatasetSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    Author: { type: String, required: true },
    UserRating: { type: Number, required: true },
    Review: { type: Number, required: true },
    Price: { type: Number, required: true },
    Genre: { type: String, required: true }
});
//# sourceMappingURL=dataset.model.js.map