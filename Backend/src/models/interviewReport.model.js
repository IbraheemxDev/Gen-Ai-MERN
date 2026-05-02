import { Schema } from 'mongoose';

/**
 * Interview Report Schema
 * -job description schema :string 
 * -resume text:String
 * -self description:String
 * -match score:Number  
 * 
 * Technical questions:
 *          [{
 *             question: "",
 *            intention: "",
 *            answer: "",
 *             }]
 * behavioral questions:
 *          [{
 *             question: "",
 *            intention: "",
 *            answer: "",
 *             }]
 * Skills gaps:
 *          [{
 *           skill: "",
 *         severity: "",
 *         type: String,
 *         enum: ['low', 'medium', 'high'],
 *         }], 
 * preparation plan:[
 *          {
 *          day: Number,
 *         focus: string,
 *         tasks: [string],
 *         }]
*/
const technicalQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, 'Technical question is required'],
    },
    intention: {
        type: String,
        required: [true, 'Intention is required'],
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'], 
    },

},{_id: false});
const behavioralQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, 'Behavioral question is required'],
    },
    intention: {
        type: String,   
        required: [true, 'Intention is required'],
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'], 
    },
},{_id: false});    

const skillGapSchema = new Schema({
    skill: {
        type: String,
        required: [true, 'Skill is required'],
    },
    severity: { 
        type: String,
        enum: ['low', 'medium', 'high'],
        required: [true, 'Severity is required'],
    },
   
},{_id: false});

cons t preparationPlanSchema = new Schema({
    day: {
        type: Number,
        required: [true, 'Day is required'],
    },  
    focus: {    
        type: String,
        required: [true, 'Focus is required'],
    },
    tasks: [{      
        type: String,
        required: [true, 'At least one task is required'],
    }],
},{_id: false}); 
const interviewReportSchema = new Schema({
    jobDescription: {
        type: String,
        required: [true, 'Job description is required'],
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    
},{timestamps: true});

export const InterviewReportModel = mongoose.model('InterviewReport', interviewReportSchema);