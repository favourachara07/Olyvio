"use client";

import React, { useState, ChangeEvent, DragEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, ChevronDown, Check, FileText, List, CreditCard, CheckCircle } from 'lucide-react';
import FirstStep from '@/app/components/dashboard/submit-assignment/FirstStep';
import SecondStep from '@/app/components/dashboard/submit-assignment/SecondStep';
import FourthStep from '@/app/components/dashboard/submit-assignment/FourthStep';
import ThirdStep from '@/app/components/dashboard/submit-assignment/ThirdStep';

type FormData = {
    // Step 1: Assignment Details
    title: string;
    description: string;
    file: File | null;
    department: string;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;

    // Step 2: Additional Requirements
    additionalInstructions: string;

    // Step 3: Payment
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

export default function AssignmentSubmissionForm() {
    const router = useRouter();
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
        paymentMethod: 'credit_card',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [currentStep, setCurrentStep] = useState(1);
    const [dragActive, setDragActive] = useState(false);
    const [price, setPrice] = useState<string>('0');

    const steps: Step[] = [
        { number: 1, title: 'Assignment Details', icon: <FileText className="h-5 w-5" /> },
        { number: 2, title: 'Requirements', icon: <List className="h-5 w-5" /> },
        { number: 3, title: 'Payment', icon: <CreditCard className="h-5 w-5" /> },
        { number: 4, title: 'Review', icon: <CheckCircle className="h-5 w-5" /> },
    ];

    const handleInputChange = (field: keyof FormData, value: string | File | File[] | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleInputChange('file', e.target.files[0]);
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
            handleInputChange('file', e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleInputChange('file', e.target.files[0]);
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

    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            } else {
                console.log('Form submitted:', formData);
                // Submit form logic here
                // After successful submission, navigate to the assignment hub
                router.push('/dashboard/assignment-hub');
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <FirstStep />
                );
            case 2:
                return (
                    <SecondStep />
                );
            case 3:
                return (
                    <ThirdStep />
                );
            case 4:
                return (
                    <FourthStep />
                );
            default:
                return null;
        }
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