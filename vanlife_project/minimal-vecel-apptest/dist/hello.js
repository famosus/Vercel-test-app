"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    res.status(200).json({ message: 'Hello from ESM API!' });
}
