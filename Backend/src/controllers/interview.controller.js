import * as pdfParse from 'pdf-parse';
import { generateInterviewReport } from '../services/ai.service.js';
import {InterviewReportModel} from '../models/interviewReport.model.js';

async   function genrateInterviewReportController(req,res) {
    const resumeContent=  pdfParse(req.file.buffer);
    const {selfDescription,jobDescription }= req.body;
    const interviewReportByAi=await generateInterviewReport({
        resume: resumeContent,
        selfDescription,
        jobDescription
    });

    const interviewReport= await InterviewReportModel.create({
        user: req.user.id,  
        resume:resumeContent,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })
    res.status(201).json({
        message:"Interview report generated successfully",
        interviewReport
    })
}

export { genrateInterviewReportController };