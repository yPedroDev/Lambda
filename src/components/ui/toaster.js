"use strict";
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
const react_1 = __importDefault(require("react"));
const toast_1 = require("@/components/ui/toast");
const use_toast_1 = require("@/components/ui/use-toast");
function Toaster() {
    const { toasts } = (0, use_toast_1.useToast)();
    return (react_1.default.createElement(toast_1.ToastProvider, null,
        toasts.map(function (_a) {
            var { id, title, description, action } = _a, props = __rest(_a, ["id", "title", "description", "action"]);
            return (react_1.default.createElement(toast_1.Toast, Object.assign({ key: id }, props),
                react_1.default.createElement("div", { className: "grid gap-1" },
                    title && react_1.default.createElement(toast_1.ToastTitle, null, title),
                    description && (react_1.default.createElement(toast_1.ToastDescription, null, description))),
                action,
                react_1.default.createElement(toast_1.ToastClose, null)));
        }),
        react_1.default.createElement(toast_1.ToastViewport, null)));
}
exports.Toaster = Toaster;
