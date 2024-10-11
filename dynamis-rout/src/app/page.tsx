import Link from "next/link";

export default function Homepage() {
    return (
        <div className="home">
        <h1><b><i>Welcome to Country Page</i></b></h1>
        <hr />
            <h3><i>To explore more about countries click on next button</i></h3>
            <button> <Link href="/country">Next</Link> </button>
        </div>
    )
}