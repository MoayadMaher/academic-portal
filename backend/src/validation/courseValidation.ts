import Joi from "joi";

export const courseSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  teacherId: Joi.string().required(),
});
