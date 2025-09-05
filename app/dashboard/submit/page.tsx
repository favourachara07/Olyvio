"use client";

import React, { useState, ChangeEvent, DragEvent, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Upload, ChevronDown, Check, FileText, List, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import FirstStep from '@/app/components/dashboard/submit-assignment/FirstStep';
import SecondStep from '@/app/components/dashboard/submit-assignment/SecondStep';
import FourthStep from '@/app/components/dashboard/submit-assignment/FourthStep';
import ThirdStep from '@/app/components/dashboard/submit-assignment/ThirdStep';

type ActionType = 'assignment' | 'research' | 'project' | 'review';

type FormData = {
    // Common fields
    title: string;
    description: string;
    file: File | null;
    
    // Assignment specific fields
    department: string;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;
    additionalInstructions: string;

    // Research specific fields
    researchType?: string;
    methodology?: string;
    sourcesRequired?: number;
    
    // Project specific fields
    projectType?: string;
    technologies?: string[];
    timelineWeeks?: number;
    
    // Document review specific fields
    documentType?: string;
    aiCheckResults?: {
      plagiarism: number;
      grammar: number;
      readability: number;
      suggestions: string[];
    } | null;
    
    // Payment
    paymentMethod: 'credit_card' | 'paypal';
    cardNumber: string;
    expiryDate: string;
    cvv: string;
};

type Step = {
    number: number;
    title: string;
    icon: React.ReactNode;
};

export default function SubmissionForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const actionType = (searchParams.get('type') || 'assignment') as ActionType;
    
    // Form state with validation
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        file: null,
        department: '',
        courseSubject: '',
        writingStyle: '',
        pageCount: '',
        deliveryUrgency: '',
        additionalInstructions: '',
        researchType: '',
        methodology: '',
        sourcesRequired: 5,
        projectType: '',
        technologies: [],
        timelineWeeks: 2,
        documentType: '',
        aiCheckResults: null,
        paymentMethod: 'credit_card',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [aiCheckComplete, setAiCheckComplete] = useState(false);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [currentStep, setCurrentStep] = useState(1);
    const [dragActive, setDragActive] = useState(false);
    const [price, setPrice] = useState<string>('0');

    const getSteps = (): Step[] => {
        const baseSteps: Step[] = [];
        
        // Step 1: Document/Assignment Details
        baseSteps.push({
            number: 1,
            title: actionType === 'review' ? 'Document Upload' : `${actionType.charAt(0).toUpperCase() + actionType.slice(1)} Details`,
            icon: <FileText className="h-5 w-5" />
        });
        
        // Step 2: Requirements/Review
        if (actionType === 'review') {
            baseSteps.push({
                number: 2,
                title: 'AI Analysis',
                icon: <AlertCircle className="h-5 w-5" />
            });
        } else {
            baseSteps.push({
                number: 2,
                title: 'Requirements',
                icon: <List className="h-5 w-5" />
            });
        }
        
        // Step 3: Payment
        baseSteps.push({
            number: actionType === 'review' ? 3 : 3,
            title: 'Payment',
            icon: <CreditCard className="h-5 w-5" />
        });
        
        // Step 4: Review/Submit
        baseSteps.push({
            number: actionType === 'review' ? 4 : 4,
            title: actionType === 'review' ? 'Submit' : 'Review',
            icon: <CheckCircle className="h-5 w-5" />
        });
        
        return baseSteps;
    };
    
    const steps = getSteps();

    // Input change handler that handles different field types
    const onInputChange = (
        field: keyof FormData,
        value: string | File | File[] | number | null
    ) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        } as FormData));
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onInputChange('file', e.target.files[0]);
        }
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onInputChange('file', e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onInputChange('file', e.target.files[0]);
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (formData.title.trim()) newErrors.title = 'Title is required';
            if (formData.description.trim()) newErrors.description = 'Description is required';
            if (formData.department) newErrors.department = 'Department is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const runAiDocumentCheck = async (file: File) => {
        setIsLoading(true);
        try {
            // Simulate API call for AI document check
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock AI check results
            const mockResults = {
                plagiarism: Math.floor(Math.random() * 20), // 0-20% plagiarism
                grammar: 80 + Math.floor(Math.random() * 20), // 80-100% grammar score
                readability: 70 + Math.floor(Math.random() * 30), // 70-100% readability
                suggestions: [
                    'Consider adding more specific examples',
                    'Check for consistent formatting',
                    'Review the conclusion for clarity'
                ]
            };
            
            setFormData(prev => ({
                ...prev,
                aiCheckResults: mockResults
            }));
            setAiCheckComplete(true);
        } catch (error) {
            console.error('AI check failed:', error);
            // Handle error
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = async () => {
        if (validateStep(currentStep)) {
            // For document review, run AI check when moving from step 1 to 2
            if (actionType === 'review' && currentStep === 1 && formData.file) {
                await runAiDocumentCheck(formData.file);
            }
            
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            } else {
                console.log('Form submitted:', { actionType, ...formData });
                // Submit form logic here
                // After successful submission, navigate to the appropriate hub
                const redirectPath = actionType === 'review' 
                    ? '/dashboard/review' 
                    : `/dashboard/${actionType}-hub`;
                router.push(redirectPath);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStepContent = () => {
        // Common props for all steps
        const commonProps = {
            formData,
            onInputChange,
            onFileUpload: handleFileUpload,
            onDrag: handleDrag,
            onDrop: handleDrop,
            dragActive,
            errors
        };

        // Research Flow
        if (actionType === 'research') {
            switch (currentStep) {
                case 1:
                    return (
                        <FirstStep 
                            {...commonProps}
                            title="Research Proposal"
                            description="Provide details about your research project"
                            showFileUpload={true}
                            customFields={{
                                courseSubject: {
                                    label: 'Research Topic',
                                    placeholder: 'Enter your research topic or title'
                                },
                                department: {
                                    label: 'Research Field',
                                    placeholder: 'Select your research field',
                                    options: [
                                        { value: 'computer-science', label: 'Computer Science' },
                                        { value: 'social-sciences', label: 'Social Sciences' },
                                        { value: 'life-sciences', label: 'Life Sciences' },
                                        { value: 'physical-sciences', label: 'Physical Sciences' },
                                        { value: 'humanities', label: 'Humanities' },
                                        { value: 'business', label: 'Business' },
                                    ]
                                },
                                writingStyle: {
                                    label: 'Citation Style',
                                    options: [
                                        { value: 'apa', label: 'APA' },
                                        { value: 'mla', label: 'MLA' },
                                        { value: 'chicago', label: 'Chicago' },
                                        { value: 'ieee', label: 'IEEE' },
                                        { value: 'ama', label: 'AMA' },
                                        { value: 'vancouver', label: 'Vancouver' }
                                    ]
                                },
                                pageCount: {
                                    label: 'Expected Page Count',
                                    placeholder: 'Estimated number of pages'
                                },
                                deliveryUrgency: {
                                    label: 'Deadline',
                                    options: [
                                        { value: '1w', label: '1 Week' },
                                        { value: '2w', label: '2 Weeks' },
                                        { value: '1m', label: '1 Month' },
                                        { value: '3m', label: '3 Months' },
                                        { value: '6m', label: '6 Months' }
                                    ]
                                }
                            }}
                        />
                    );
                case 2:
                    return (
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium">Research Requirements</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Research Methodology
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        value={formData.researchType || ''}
                                        onChange={(e) => onInputChange('researchType', e.target.value)}
                                    >
                                        <option value="">Select methodology</option>
                                        <option value="qualitative">Qualitative</option>
                                        <option value="quantitative">Quantitative</option>
                                        <option value="mixed-methods">Mixed Methods</option>
                                        <option value="literature-review">Literature Review</option>
                                        <option value="case-study">Case Study</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Required Sources
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        placeholder="Number of required sources"
                                        value={formData.sourcesRequired || ''}
                                        onChange={(e) => onInputChange('sourcesRequired', parseInt(e.target.value) || 0)}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Additional Requirements
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        placeholder="Any specific requirements or instructions for your research..."
                                        value={formData.additionalInstructions || ''}
                                        onChange={(e) => onInputChange('additionalInstructions', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                default:
                    return <FirstStep {...commonProps} />;
            }
        }
        
        // Document Review Flow
        if (actionType === 'review') {
            switch (currentStep) {
                case 1:
                    return (
                        <FirstStep 
                            {...commonProps}
                            title="Upload Your Document"
                            description="Upload your document for AI-powered review and analysis."
                            showFileUpload={true}
                        />
                    );
                case 2:
                    return (
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium">AI Document Analysis</h3>
                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                                    <p>Analyzing your document...</p>
                                </div>
                            ) : aiCheckComplete && formData.aiCheckResults ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-blue-800">Plagiarism</p>
                                            <p className="text-2xl font-bold">{formData.aiCheckResults.plagiarism}%</p>
                                            <p className="text-xs text-blue-600">Similarity score</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <p className="text-sm text-green-800">Grammar</p>
                                            <p className="text-2xl font-bold">{formData.aiCheckResults.grammar}%</p>
                                            <p className="text-xs text-green-600">Score</p>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <p className="text-sm text-purple-800">Readability</p>
                                            <p className="text-2xl font-bold">{formData.aiCheckResults.readability}%</p>
                                            <p className="text-xs text-purple-600">Score</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">Suggestions for Improvement</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                            {formData.aiCheckResults.suggestions.map((suggestion, index) => (
                                                <li key={index}>{suggestion}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Please upload a document to begin analysis.</p>
                                </div>
                            )}
                        </div>
                    );
                default:
                    return <FirstStep {...commonProps} />;
            }
        }
        
        // Map of step components for cleaner rendering
        const stepComponents = [
            null, // 0-indexed, so we start from index 1
            FirstStep,
            SecondStep,
            ThirdStep,
            FourthStep
        ];

        const StepComponent = stepComponents[currentStep];
        return StepComponent ? <StepComponent {...commonProps} /> : null;
    };

    return (
        <div className="w-full mx-auto rounded-lg shadow-sm md:border md:border-gray-200 md:p-8 lg:p-4 xl:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-md md:text-lg lg:text-sm xl:text-lg font-medium text-gray-900 mb-1">
                        Step {currentStep} of {steps.length}
                    </h1>
                    <p className="text-sm lg:text-xs xl:text-sm text-gray-500">
                        {steps[currentStep - 1]?.title}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">₦{price}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-black rounded-full h-2 transition-all duration-300"
                        style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white mb-24">
                <div className="space-y-6">
                    {renderStepContent()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className={`px-10 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-10 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                        {currentStep === steps.length ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}