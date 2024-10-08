import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import mongoose from "mongoose";

const get = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});

const create = validateRequest({
  body: z.object({
    name: z.string({ required_error: "O nome é obrigatório" }),
    status: z.string().optional(),
    vote: z.number().optional(),
    type: z.boolean().optional(),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    name: z.string().optional(),
    status: z.string().optional(),
    vote: z.number().optional(),
    type: z.boolean().optional(),
  }),

  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});

export default {
  destroy,
  create,
  update,
  get,
};
