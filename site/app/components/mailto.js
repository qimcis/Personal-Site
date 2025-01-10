import React from "react";
import Link from "next/link";

const MailTo = ({ mailto, label }) => {
    return (
        <div className="bg-black text-2xl text-white p-2 rounded-md w-fit">
            <Link href={`mailto:${mailto}`}>
                {label}
            </Link>
        </div>
    );
}

export default MailTo;