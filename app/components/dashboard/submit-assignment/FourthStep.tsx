import { useState, ChangeEvent } from 'react';

type PaymentMethod = 'card' | 'transfer';

export default function FourthStep() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');

    // Format card number with spaces every 4 digits
    const formatCardNumber = (value: string): string => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts: string[] = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    };

    // Format expiry date as MM/YY
    const formatExpiryDate = (value: string): string => {
        const v = value.replace(/\D/g, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };

    const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const formatted = formatCardNumber(e.target.value);
        setCardNumber(formatted);
    };

    const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const formatted = formatExpiryDate(e.target.value);
        setExpiryDate(formatted);
    };

    const handleCvvChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 4);
        setCvv(value);
    };

    return (
        <div className="max-h-fit">
            {/* Main Content */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Payment Form */}
                    <div className="bg-white">
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-6">
                                Choose your payment method
                            </h2>

                            {/* Payment Method Selector */}
                            <div className="flex space-x-0">
                                <button
                                    onClick={() => setPaymentMethod('card')}
                                    className={`px-8 py-3 text-sm font-medium rounded-l-md border transition-colors ${paymentMethod === 'card'
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    Card
                                </button>
                                <button
                                    onClick={() => setPaymentMethod('transfer')}
                                    className={`px-8 py-3 text-sm font-medium rounded-r-md border-t border-r border-b transition-colors ${paymentMethod === 'transfer'
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    Transfer
                                </button>
                            </div>

                            {/* Card Form */}
                            {paymentMethod === 'card' && (
                                <div className="space-y-4">
                                    {/* Card Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Card No.
                                        </label>
                                        <input
                                            type="text"
                                            value={cardNumber}
                                            onChange={handleCardNumberChange}
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm"
                                            maxLength={19}
                                        />
                                    </div>

                                    {/* CVV and Expiry */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                value={cvv}
                                                onChange={handleCvvChange}
                                                placeholder="123"
                                                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm"
                                                maxLength={4}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                value={expiryDate}
                                                onChange={handleExpiryChange}
                                                placeholder="MM/YY"
                                                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm mt-7"
                                                maxLength={5}
                                            />
                                        </div>
                                    </div>

                                    {/* Additional Fields */}
                                    <div className="space-y-4">
                                        <div className="bg-gray-100 h-12 rounded-md"></div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-100 h-12 rounded-md"></div>
                                            <div className="bg-gray-100 h-12 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Transfer Instructions */}
                            {paymentMethod === 'transfer' && (
                                <div className="p-4 bg-gray-50 rounded-md">
                                    <p className="text-sm text-gray-600">
                                        Bank transfer instructions will be displayed here.
                                    </p>
                                </div>
                            )}

                            {/* Pay Button */}
                            <button className="w-full bg-black text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                                Pay
                            </button>
                        </div>
                    </div>

                    {/* Right Panel - Receipt/Summary */}
                    <div className="bg-gray-200 rounded-md h-96 lg:h-auto">
                        {/* This would typically contain order summary, receipt, or additional info */}
                        <div className="p-6">
                            <div className="text-sm text-gray-500">Order Summary</div>
                            {/* Content would go here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}