"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResolvers = void 0;
exports.postResolvers = {
    addpost: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null,
            };
        }
        if (!args.title || !args.content) {
            return {
                userError: "Title and content must be provided",
                post: null,
            };
        }
        const newPost = yield prisma.post.create({
            data: {
                title: args.title,
                content: args.content,
                authorId: userInfo.userId,
            },
        });
        return {
            userError: null,
            post: newPost,
        };
    }),
};
