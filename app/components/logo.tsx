import Image from "next/image";

export default function Logo() {
    return (
        <div className="h-8">
            <Image src="/logo.png" className="h-full w-full" alt={""} width={80} height={20} />
        </div>
    )
}