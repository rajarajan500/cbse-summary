import React from "react";
import { Link } from "react-router-dom";

function G12cs() {
  return (
    <div>
      <div className="border p-3 text-2xl">
        <h1>COMPUTER SCIENCE CBSE BOOK SUMMARY (Chapter wise): </h1>
      </div>
      <div className="p-5 text-lg flex flex-col gap-4">
        <h1 className="text-center">
          Computer Science – Class 12 CBSE (Python – Sumita Arora)
        </h1>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 1: Revision of Python Basics:
        </h1>
        <h2>
          Recaps Class 11 topics—data types, operators, control structures, and
          functions. You reinforce foundational syntax and logic before diving
          deeper.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 2: File Handling:
        </h1>
        <h2>
          Covers reading and writing text and binary files. You learn file modes
          (`r`, `w`, `a`, `rb`, `wb`), and how to use `open()`, `read()`,
          `write()`, and `with` statements.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 3: Recursion:
        </h1>
        <h2>
          Explains recursive functions, base cases, and stack behavior. You
          learn how to solve problems like factorial, Fibonacci, and tower of
          Hanoi using recursion.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 4: Data Structures – Stacks and Queues:
        </h1>
        <h2>
          Introduces linear data structures using lists. You learn stack
          operations (`push`, `pop`) and queue operations (`enqueue`, `dequeue`)
          with Python implementation.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 5: Data Structures – Searching and Sorting:
        </h1>
        <h2>
          Covers linear and binary search algorithms, and sorting techniques
          like bubble sort, insertion sort, and selection sort. You analyze time
          complexity and performance.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 6: Database Concepts:
        </h1>
        <h2>
          Introduces relational databases, DBMS, and SQL basics. You learn about
          tables, keys, and how data is stored and retrieved efficiently.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 7: Structured Query Language (SQL):
        </h1>
        <h2>
          Covers SQL commands—`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `WHERE`,
          `ORDER BY`, `GROUP BY`. You learn how to query and manipulate
          relational data.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 8: Interface Python with SQL:
        </h1>
        <h2>
          Teaches how to connect Python programs with MySQL using
          `mysql.connector`. You learn to execute queries, fetch results, and
          handle exceptions.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 9: Computer Networks:
        </h1>
        <h2>
          Explains types of networks (LAN, MAN, WAN), protocols (TCP/IP, HTTP),
          and transmission media. You study IP addressing, DNS, and
          cybersecurity basics.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 10: Data Communication and Security:
        </h1>
        <h2>
          Covers encryption, firewalls, digital signatures, and cyber threats.
          You learn how data is protected during transmission and stored
          securely.
        </h2>

        <h1 className="text-xl font-bold flex flex-col">
          Chapter 11: Project Work and Practical Guidelines:
        </h1>
        <h2>
          Offers guidance for building a complete project—planning, coding,
          testing, and documentation. You apply all concepts in a real-world
          application.
        </h2>
      </div>
      <div className="p-5  gap">
        <Link className="text-black-500 " to="/">
          <button className="border border-black px-4 py-2 bg-red-500/90 rounded m-4">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default G12cs;
