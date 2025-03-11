export interface IProject {
    name: string;
    link: {
        live: string;
        githubClient: string;
        githubServer: string;
    }
    keyFeatures: string[];
    techStack: string[];
    breaf: string;
    description: string;
    category: string;
    banner: string;
    screenShots: string[];
    status: "Not Started" | "In Progress" | "Completed" | "On Hold"
    progress: number;
    startDate: string;
    endDate: string;
    durationInDays?: number;
    challenges?: { title: string; description: string }[];
    DevelopmentWorkflow: string[];
    notes?: string;
}
