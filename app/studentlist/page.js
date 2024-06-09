import Link from "next/link";

export default function StudentList() {
  return (
    <div className="flex flex-col">
      <h1 className =" font-bold" >List</h1>
      <ul>
        <li>
            <Link href="/studentlist/shivangi">shivangi</Link>
        </li>
        <li>
        <Link href="/studentlist/gupta">gupta</Link>
        </li>
        <li>
        <Link href="/studentlist/56">56</Link>
        </li>
      </ul>
    </div>
  );
}
