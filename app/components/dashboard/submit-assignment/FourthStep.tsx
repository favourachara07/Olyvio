import { useState, ChangeEvent } from 'react';
import AccountNumber from '../../ui/AccountNumber';
import { Input } from '../../ui/Input';

type PaymentMethod = 'card' | 'transfer';

export default function FourthStep() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [cardName, setCardName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    // Format card number with spaces every 4 digits
    const formatCardNumber = (value: string): string => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const parts: string[] = [];
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substring(i, i + 4));
        }
        return parts.join(' ');
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
        setCardNumber(formatCardNumber(e.target.value));
    };

    const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setExpiryDate(formatExpiryDate(e.target.value));
    };

    const handleCvvChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setCvv(e.target.value.replace(/\D/g, '').substring(0, 4));
    };

    return (
        <div className="max-h-fit">
            {/* Main Content */}
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Payment Form */}
                    <div className="bg-white">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Choose your payment method
                        </h2>

                        {/* Payment Method Selector */}
                        <div className="flex mb-6">
                            <button
                                onClick={() => setPaymentMethod('card')}
                                className={`px-12 py-6 text-sm font-medium rounded-l-md border transition-colors ${paymentMethod === 'card'
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                Card
                            </button>
                            <button
                                onClick={() => setPaymentMethod('transfer')}
                                className={`px-12 py-6 text-sm font-medium rounded-r-md border-t border-r border-b transition-colors ${paymentMethod === 'transfer'
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

                                <Input
                                    label="Cardholder Name"
                                    id="cardholder-name"
                                    placeholder="John Doe"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                />
                                <Input
                                    label="Email Address"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    label="Card No."
                                    id="card-no"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    maxLength={19}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="CVV"
                                        id="cvv"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={handleCvvChange}
                                        maxLength={4}
                                    />
                                    <Input
                                        label="Expiry Date"
                                        id="expiryDate"
                                        placeholder="MM/YY"
                                        value={expiryDate}
                                        onChange={handleExpiryChange}
                                        maxLength={5}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Transfer Instructions */}
                        {paymentMethod === 'transfer' && (
                            <div className="p-4 bg-gray-50 rounded-md text-sm text-gray-700 space-y-2">
                                <p className="font-semibold">Bank Transfer Details:</p>
                                <p>Bank: Access Bank</p>
                                <AccountNumber accountNumber="0032567894" />
                                <p>Account Name: TaskAssigner Ltd</p>
                                <p className="text-xs text-gray-500">
                                    After making payment, send your proof of payment to payments@taskassigner.com
                                </p>
                            </div>
                        )}

                        {/* Pay Button */}
                        <button className="w-full bg-black text-white py-3 mt-6 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                            Pay
                        </button>
                    </div>

                    {/* Right Panel - Receipt/Summary */}
                    <div className="bg-gray-50 rounded-md p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <span>Task Assigner</span>
                                <span>Fabunmi George</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Service</span>
                                <span>Computer Science Project</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>2 days</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-semibold text-black">
                                <span>Total</span>
                                <span>N 2000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
