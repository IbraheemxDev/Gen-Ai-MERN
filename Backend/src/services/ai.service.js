import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const interviewReportSchema = z.object({
    matchscore: z.number().describe("A score between 0 and 100 that indicates how well the candidate's profile matches the job description, based on the analysis of the resume, self-description, and job description."),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this question ,what points to cover ,what approach to take etc."),
    })).describe("Technical questions that can be asked in the interview along with their intentions and how to answer them."),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this question ,what points to cover ,what approach to take etc."),
    })).describe("Behavioral questions that can be asked in the interview along with their intentions and how to answer them."),

    skillsGaps: z.array(z.object({
        skill: z.string().describe("The skill that the candidate is lacking based on the job description and resume analysis"),
        severity: z.enum(['low', 'medium', 'high']).describe("The severity of the skill gap, indicating how critical it is for the candidate to address this gap before the interview."),

    })).describe("List of skill gaps in the candidate's profile based on the analysis of the job description and resume, along with the severity of each gap."),

    preparationPlan: z.array(z.object({ 
        day: z.number().describe("The day number in the preparation plan, indicating the sequence of the preparation steps."),
        focus: z.string().describe("The main focus or topic for the preparation on that particular day."),
        tasks: z.array(z.string()).describe("A list of specific tasks or activities that the candidate should undertake on that day to prepare for the interview."),
    })).describe("A day-wise preparation plan for the candidate to follow in order to effectively prepare for the interview."),
});



async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const promt = `Genrate an interview report for a candidate based on the following details:
    Resume: ${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}`;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        content: promt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema, "InterviewReport"),

        }

    });
    return JSON.parse(response.text);
}
export { generateInterviewReport };