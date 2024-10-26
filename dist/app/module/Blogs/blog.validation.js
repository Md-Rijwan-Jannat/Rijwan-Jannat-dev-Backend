"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsValidation = void 0;
const zod_1 = require("zod");
const createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z.string().nonempty(),
        imageUrl: zod_1.z.string().optional(),
    }),
});
const updateBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().optional(),
    }),
});
exports.BlogsValidation = {
    createBlogSchema,
    updateBlogSchema,
};
