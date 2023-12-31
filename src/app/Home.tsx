"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Authenticator } from "@aws-amplify/ui-react";
import { Avatar } from "flowbite-react";

export default function Home() {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => (
        <div className="h-screen flex flex-col bg-white dark:bg-blue-800">
          <header className="flex items-center justify-between py-2 px-4 border-b border-gray-200 dark:border-blue-700 bg-white dark:bg-blue-900">
            <div className="flex items-center gap-2">
              <svg
                className=" h-6 w-6 text-gray-800 dark:text-blue-50"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
              <span className="font-semibold text-gray-800 dark:text-blue-50">
                Hokla
              </span>
            </div>
            <Button
              className="rounded-full"
              size="icon"
              variant="ghost"
              data-dropdown-toggle="dropdown"
            >
              <Avatar rounded />
              <span className="sr-only">Toggle user menu</span>
            </Button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    onClick={() => signOut?.()}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="flex flex-grow">
            <div className="w-64 border-r border-gray-200 dark:border-blue-700 bg-white dark:bg-blue-900 overflow-auto">
              <nav className="p-4 space-y-2">
                <h2 className="text-gray-800 dark:text-blue-50">Channels</h2>
                <Link
                  className="block text-gray-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                  href="#"
                >
                  <svg
                    className=" h-5 w-5 text-gray-600 dark:text-blue-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="4" x2="20" y1="9" y2="9" />
                    <line x1="4" x2="20" y1="15" y2="15" />
                    <line x1="10" x2="8" y1="3" y2="21" />
                    <line x1="16" x2="14" y1="3" y2="21" />
                  </svg>
                  Channel 1
                </Link>
                <Link
                  className="block text-gray-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                  href="#"
                >
                  <svg
                    className=" h-5 w-5 text-gray-600 dark:text-blue-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="4" x2="20" y1="9" y2="9" />
                    <line x1="4" x2="20" y1="15" y2="15" />
                    <line x1="10" x2="8" y1="3" y2="21" />
                    <line x1="16" x2="14" y1="3" y2="21" />
                  </svg>
                  Channel 2
                </Link>
                <h2 className="text-gray-800 dark:text-blue-50">
                  Direct Messages
                </h2>
                <Link
                  className="block text-gray-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                  href="#"
                >
                  <img
                    alt="User 1"
                    className="rounded-full"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                  User 1
                </Link>
                <Link
                  className="block text-gray-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                  href="#"
                >
                  <img
                    alt="User 2"
                    className="rounded-full"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                  User 2
                </Link>
              </nav>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex-grow overflow-auto p-4">
                <div className="p-2 rounded bg-gray-200 dark:bg-blue-600 mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      alt="User 1"
                      className="rounded-full"
                      height="24"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                      }}
                      width="24"
                    />
                    <h3 className="font-bold text-gray-800 dark:text-blue-200">
                      User 1
                    </h3>
                  </div>
                  <p className="text-gray-800 dark:text-blue-200">
                    Hello, how are you?
                  </p>
                  <p className="text-xs text-gray-500 dark:text-blue-300">
                    Oct 27, 2023
                  </p>
                </div>
                <div className="p-2 rounded bg-gray-200 dark:bg-blue-600 mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      alt="User 2"
                      className="rounded-full"
                      height="24"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                      }}
                      width="24"
                    />
                    <h3 className="font-bold text-gray-800 dark:text-blue-200">
                      User 2
                    </h3>
                  </div>
                  <p className="text-gray-800 dark:text-blue-200">
                    Im good, thank you!
                  </p>
                  <p className="text-xs text-gray-500 dark:text-blue-300">
                    Oct 28, 2023
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-blue-700 bg-white dark:bg-blue-900 p-4">
                <form className="flex gap-2">
                  <Input
                    className="flex-grow rounded"
                    placeholder="Type a message..."
                    type="text"
                  />
                  <Button
                    className="bg-blue-500 dark:bg-blue-500 text-white"
                    variant="default"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
}
