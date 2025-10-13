export default function page() {
    return (
        <>
        <div className="flex flex-col items-center justify-center py-2 px-4 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-100 to-purple-100">
            <h1 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow">
                Add ToDo
            </h1>
            <p className="text-lg text-center mb-8 text-gray-600">
                This is a simple ToDo app built with Next.js, TypeScript and Redux Toolkit.
            </p>
            <div className="rounded-xl p-8 w-full max-w-md bg-white shadow-lg mx-auto border border-blue-100">
                <label htmlFor="todo-input" className="block text-sm font-medium text-gray-700 mb-2">
                    Task Name
                </label>
                <input
                    id="todo-input"
                    type="text"
                    placeholder="Add a new task"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-3 mt-6 font-semibold shadow transition">
                    Add Task
                </button>
            </div>
        </div>
        </>
    );
}
