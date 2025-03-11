import { model, Schema } from "mongoose";
import { IProject } from "./projects.inteface";

const ProjectSchema = new Schema<IProject>({
    name:
    {
        type: String,
        required: true
    },
    link: {
        live: {
            type: String,
            required: true
        },
        githubClient: {
            type: String,
            required: true
        },
        githubServer: {
            type: String,
            required: true
        }
    },
    keyFeatures: {
        type: [String],
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    breaf: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    screenShots: {
        type: [String],
        required: true,
        default: []

    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed", "On Hold"],
        default: "Completed",
        required: true
    },
    progress: {
        type: Number,
    },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    durationInDays: { type: Number },
    challenges: [{ title: String, description: String }],
    DevelopmentWorkflow: {
        type: [String],
        required: true,
    },
    notes: { type: String }
}, { timestamps: true });

export const Project = model<IProject>("Project", ProjectSchema);