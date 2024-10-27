"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = void 0;
const logoutController = (req, res, next) => {
    try {
        return res
            .clearCookie("token")
            .json({ status: true, message: "Logout success", user: null });
    }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
exports.logoutController = logoutController;
