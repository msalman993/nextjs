import Link from "next/link";
export default function countryName() {
    return (
        <div>
            <br />
            <ul>
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <br />
                <li><Link href="/country/india">India</Link></li>
                <br />
                <li><Link href="/country/bangladesh">Bangladesh</Link></li>
                <br />
                <li><Link href="/country/iran">Iran</Link></li>
            </ul>
         </div>
     )
 }
