import { Upload, ChevronDown } from "lucide-react";
import { ChangeEvent, DragEvent } from "react";
import Input from "@/app/components/ui/Input";
import Select from "../../ui/Select";

interface FieldConfig {
    label?: string;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
}

interface CustomFieldsConfig {
    [key: string]: FieldConfig;
}

type FormDataBase = {
    title: string;
    description: string;
    file: File | null;
    department: string;
    courseSubject: string;
    writingStyle: string;
    pageCount: string;
    deliveryUrgency: string;
    [key: string]: any;
};

interface FirstStepProps<T extends FormDataBase = FormDataBase> {
    formData: T;
    onInputChange: (field: keyof T, value: any) => void;
    onFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    onDrag: (e: DragEvent<HTMLDivElement>) => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
    dragActive: boolean;
    errors: Record<string, string>;
    title?: string;
    description?: string;
    showFileUpload?: boolean;
    customFields?: CustomFieldsConfig;
}

export default function FirstStep<T extends FormDataBase>({
    formData,
    onInputChange,
    onFileUpload,
    onDrag,
    onDrop,
    dragActive,
    errors,
    title = "Assignment Details",
    description = "Please fill in the details of your assignment",
    showFileUpload = true,
    customFields = {}
}: FirstStepProps<T>) {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onInputChange('file', e.target.files[0]);
        }
    };

    return (
        <div className="w-full mx-auto">
            <div className="bg-white">
                <div className="space-y-6">
                    {/* Assignment Title */}
                    <Input
                        label="Assignment Title"
                        id="title"
                        type="text"
                        placeholder="Enter your assignment title"
                        value={formData.title}
                        onChange={(e) => onInputChange('title', e.target.value as any)}
                    />

                    {/* Assignment Description */}
                    <Input
                        label="Assignment Description"
                        id="description"
                        textarea
                        rows={6}
                        placeholder="Enter your assignment description"
                        value={formData.description}
                        onChange={(e) => onInputChange('description', e.target.value as any)}
                    />

                    {/* File Upload */}
                    {showFileUpload && (
                        <div>
                            <label className="block text-xs font-semibold text-black mb-2">
                                File Upload
                            </label>
                            <div
                                className={`relative border-2 border-dashed rounded-md p-8 text-center transition-colors ${dragActive
                                    ? 'border-black bg-gray-50'
                                    : 'border-[#D9D9D9] hover:border-gray-400'
                                    }`}
                                onDragEnter={onDrag}
                                onDragOver={onDrag}
                                onDragLeave={onDrag}
                                onDrop={onDrop}
                            >
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <Upload className="h-8 w-8 text-gray-400" />
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium text-black">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        PDF, DOCX, or TXT (max. 10MB)
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={onFileUpload}
                                    accept=".pdf,.doc,.docx,.txt"
                                />
                            </div>
                        </div>
                    )}

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Department */}
                        <div>
                            <Select
                                id="department"
                                label={customFields.department?.label || 'Department'}
                                options={customFields.department?.options || [
                                    { value: 'computer-science', label: 'Computer Science' },
                                    { value: 'mathematics', label: 'Mathematics' },
                                    { value: 'physics', label: 'Physics' },
                                    { value: 'chemistry', label: 'Chemistry' },
                                    { value: 'biology', label: 'Biology' },
                                    { value: 'engineering', label: 'Engineering' },
                                ]}
                                value={formData.department}
                                onChange={(value) => onInputChange('department', value)}
                                error={errors.department}
                                placeholder={customFields.department?.placeholder || 'Select department'}
                            />
                        </div>

                        {/* Course Subject */}
                        <div>
                            <Input
                                label={customFields.courseSubject?.label || 'Course Subject'}
                                id="courseSubject"
                                type="text"
                                placeholder={customFields.courseSubject?.placeholder || 'e.g., Data Structures, Calculus'}
                                value={formData.courseSubject}
                                onChange={(e) => onInputChange('courseSubject', e.target.value)}
                                error={errors.courseSubject}
                            />
                        </div>

                        {/* Writing Style */}
                        <div>
                            <Select
                                id="writingStyle"
                                label={customFields.writingStyle?.label || 'Writing Style'}
                                options={customFields.writingStyle?.options || [
                                    { value: 'apa', label: 'APA' },
                                    { value: 'mla', label: 'MLA' },
                                    { value: 'chicago', label: 'Chicago' },
                                    { value: 'harvard', label: 'Harvard' },
                                    { value: 'ieee', label: 'IEEE' },
                                    { value: 'other', label: 'Other' },
                                ]}
                                value={formData.writingStyle}
                                onChange={(value) => onInputChange('writingStyle', value)}
                                error={errors.writingStyle}
                                placeholder={customFields.writingStyle?.placeholder || 'Select writing style'}
                            />
                        </div>

                        {/* Page Count */}
                        <div>
                            <Input
                                label={customFields.pageCount?.label || 'Page Count'}
                                id="pageCount"
                                type="number"
                                min="1"
                                placeholder={customFields.pageCount?.placeholder || 'Number of pages'}
                                value={formData.pageCount}
                                onChange={(e) => onInputChange('pageCount', e.target.value as T['pageCount'])}
                                error={errors.pageCount}
                            />
                        </div>

                        {/* Delivery Urgency */}
                        <div className="md:col-span-2">
                            <Select
                                id="deliveryUrgency"
                                label={customFields.deliveryUrgency?.label || 'Delivery Urgency'}
                                options={customFields.deliveryUrgency?.options || [
                                    { value: '24h', label: '24 Hours' },
                                    { value: '3d', label: '3 Days' },
                                    { value: '1w', label: '1 Week' },
                                    { value: '2w', label: '2 Weeks' },
                                    { value: '1m', label: '1 Month' },
                                ]}
                                value={formData.deliveryUrgency}
                                onChange={(value) => onInputChange('deliveryUrgency', value)}
                                error={errors.deliveryUrgency}
                                placeholder={customFields.deliveryUrgency?.placeholder || 'Select delivery urgency'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}