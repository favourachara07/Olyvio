"use client";

import { LucideBell } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotificationLink() {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Set the active tab to 'Notifications' and navigate to settings
        if (typeof window !== 'undefined') {
            localStorage.setItem('settingsActiveTab', 'Notifications');
            router.push('/dashboard/settings');
        }
    };

    return (
        <button 
            onClick={handleClick}
            className="border border-[#E6E6E6] rounded-md p-2 hover:bg-gray-50 transition-colors"
        >
            <LucideBell className="size-4 2xl:size-5 text-[#7E7E7E]" />
            <span className="sr-only">Notifications</span>
        </button>
    );
}
