import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface AccountNumberProps {
    accountNumber: string;
}

export default function AccountNumber({ accountNumber }: AccountNumberProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="font-mono text-sm">{accountNumber}</span>
            <button onClick={handleCopy} className="p-1 hover:bg-gray-100 rounded-full">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
        </div>
    );
}
