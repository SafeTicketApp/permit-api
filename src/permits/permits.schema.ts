import { PermitCode } from './permit.service';
import * as mongoose from 'mongoose';

export const PERMIT_MODEL_NAME = 'Permit';

export interface PermitModel extends PermitCode, mongoose.Document {}

export const permitSchema = new mongoose.Schema(
    { 
        code: { type: String, unique: true }, 
        reasonAbbrevation: String 
    },
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    },
);
