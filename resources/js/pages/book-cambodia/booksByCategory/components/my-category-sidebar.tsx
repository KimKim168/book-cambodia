import React from "react";

const treeData = [
  {
    id: "csharp",
    title: "C#",
    children: [
      {
        id: "csharp-essentials",
        title: "C# Essentials",
        children: [
          { id: "cs-ess-1", title: "Getting Started" },
          { id: "cs-ess-2", title: "Variables & Data Types" },
        ],
      },
      {
        id: "csharp-advanced",
        title: "C# Advanced",
        children: [
          { id: "cs-adv-1", title: "LINQ" },
          { id: "cs-adv-2", title: "Async/Await" },
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    children: [
      { id: "js-basics", title: "JS Basics" },
      { id: "js-advanced", title: "Advanced JS" },
      {
        id: "js-frameworks",
        title: "Frameworks",
        children: [
          { id: "react", title: "React" },
          { id: "vue", title: "Vue.js" },
        ],
      },
    ],
  },
  {
    id: "python",
    title: "Python",
    // This category has no children.
  },
  {
    id: "java",
    title: "Java",
    children: [
      {
        id: "java-core",
        title: "Core Java",
        children: [
            { id: "java-core-1", title: "Syntax and Basics" },
            { id: "java-core-2", title: "Object-Oriented Programming" },
        ],
      },
      {
        id: "java-spring",
        title: "Spring Framework",
        children: [
            { id: "java-spring-1", title: "Spring Boot" },
            { id: "java-spring-2", title: "Spring MVC" },
        ]
      },
    ],
  },
  {
    id: "sql",
    title: "SQL",
    children: [
      { id: "sql-basics", title: "SQL Basics" },
      { id: "sql-advanced", title: "Advanced SQL" },
      { id: "sql-nosql", title: "NoSQL Databases" },
    ],
  },
    {
    id: "go",
    title: "Go (Golang)",
    children: [
      { id: "go-start", title: "Getting Started" },
      { id: "go-concurrency", title: "Concurrency" },
    ],
  },
];

const TreeChevronIcon = () => (
  <svg
    className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-90"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

const TreeItem = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;
  if (hasChildren) {
    return (
      <li>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md py-1.5 pr-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
            <TreeChevronIcon />
            <span>{item.title}</span>
          </summary>
          {/* The nested list with indentation and a connecting line */}
          <ul className="mt-1 space-y-1 border-l-2 border-blue-200 pl-4 dark:border-gray-700">
            {item.children.map((child) => (
              <TreeItem key={child.id} item={child}/>
            ))}
          </ul>
        </details>
      </li>
    );
  }

  // If the item has no children, it's a "leaf" (a direct link).
  return (
    <li>
      <a
        href="#"
        className="flex items-center gap-2 rounded-md py-1.5 pl-6 pr-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      >
        {/* The pl-6 aligns the text with the text of the branch items above */}
        <span>{item.title}</span>
      </a>
    </li>
  );
};

// --- Main Sidebar Component ---
const TreeViewSidebar = () => {
  return (
    <div className="hidden md:block w-full max-w-xs rounded-lg border bg-gray-50 p-3 font-sans dark:border-gray-700 dark:bg-gray-900">
      <h2 className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Our Category
      </h2>
      <nav>
        <ul className="space-y-1">
          {treeData.map((item) => (
            <TreeItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TreeViewSidebar;