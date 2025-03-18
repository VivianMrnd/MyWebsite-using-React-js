import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <div className="container py-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-purple-600 hover:text-purple-700 transition-colors dark:text-purple-400 dark:hover:text-purple-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none rounded-full px-6 shadow-md dark:from-purple-500 dark:to-pink-500"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-0 dark:bg-slate-800">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 dark:from-purple-400 dark:via-pink-400 dark:to-amber-400">
              Full-Stack Developer
            </h1>
            <p className="text-slate-500 mt-2 dark:text-slate-400">
              JavaScript | TypeScript | React | Node.js | MongoDB | SQL
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900">
              Professional Summary
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Full-Stack Developer with experience in building and optimizing web applications and APIs. Skilled in
              problem-solving and improving system performance to deliver efficient solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-xl dark:bg-purple-900/20">
                <h3 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Languages:</h3>
                <p className="text-slate-600 dark:text-slate-300">JavaScript, TypeScript</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl dark:bg-pink-900/20">
                <h3 className="font-medium mb-2 text-pink-700 dark:text-pink-300">Frontend:</h3>
                <p className="text-slate-600 dark:text-slate-300">React.js, Next.js, Bootstrap, Tailwind</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl dark:bg-amber-900/20">
                <h3 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Backend:</h3>
                <p className="text-slate-600 dark:text-slate-300">Node.js, Fastify, Express.js, Nest.js</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl dark:bg-blue-900/20">
                <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Databases:</h3>
                <p className="text-slate-600 dark:text-slate-300">MongoDB, SQL</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl dark:bg-green-900/20">
                <h3 className="font-medium mb-2 text-green-700 dark:text-green-300">DevOps:</h3>
                <p className="text-slate-600 dark:text-slate-300">Docker, Kubernetes, Postman, Git, Jenkins</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900">
              Work Experience
            </h2>

            <div className="mb-6 border-l-4 border-purple-400 pl-4 dark:border-purple-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-purple-700 dark:text-purple-300">Full-Stack Developer</h3>
                  <p className="text-purple-600 dark:text-purple-400">Verteré Global Solutions, Inc.</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">April 2024 – March 2025</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                <li>Developed and optimized RESTful APIs using Nest.js and Fastify for Prulife UK.</li>
                <li>Developed full stack application using next.js and fastify framework for Prulife UK.</li>
                <li>Utilized MongoDB aggregation and relational queries (Mongoose, SQL).</li>
                <li>Deployed updates and managed images for CI/CD pipelines (Docker, Kubernetes, Git, Jenkins).</li>
                <li>Utilized Jira for issue tracking and GitHub and Bitbucket for version control.</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-400 pl-4 dark:border-pink-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-pink-700 dark:text-pink-300">Web and App Developer</h3>
                  <p className="text-pink-600 dark:text-pink-400">Euodoó Technologies Inc.</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">February 2023 – April 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                <li>Developed MERN stack applications.</li>
                <li>Used SQL and mongoDB and deployed apps using cPanel.</li>
                <li>Led development of a company website (Node.js, scheduling, email).</li>
                <li>Designed system architecture for a ride-hailing app.</li>
                <li>Conducted software testing and debugging (POS, GPS devices).</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-xl dark:bg-purple-900/20">
                <h3 className="font-medium text-purple-700 dark:text-purple-300">Pulse (PruLife UK)</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Auto-payments, Partial withdrawal, Document viewing, Policy linking.
                </p>
              </div>

              <div className="bg-pink-50 p-4 rounded-xl dark:bg-pink-900/20">
                <h3 className="font-medium text-pink-700 dark:text-pink-300">Pulse Adoption (PruLife UK)</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Data analytics, User management, Reports & extract with download feature, Restart Pruservices.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl dark:bg-amber-900/20">
                <h3 className="font-medium text-amber-700 dark:text-amber-300">Fare Collection System (Euodoó)</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Passenger discounts, Fare computation, Destination list, Receipt printing, Admin web (reports,
                  downloads, user management, client route filtering).
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl dark:bg-blue-900/20">
                <h3 className="font-medium text-blue-700 dark:text-blue-300">Event Management System (Euodoó)</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Event scheduling, QR code generation & scanning, Email notifications, Guest & user management, Admin
                  dashboard.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900">
              Education
            </h2>
            <div className="flex justify-between items-start bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl dark:from-purple-900/20 dark:to-pink-900/20">
              <div>
                <h3 className="font-medium text-purple-700 dark:text-purple-300">
                  Bachelor's Degree in Information Technology
                </h3>
                <p className="text-purple-600 dark:text-purple-400">Centro Escolar University</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">August 2022</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

