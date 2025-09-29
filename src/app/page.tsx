"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/test");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error("获取待办事项失败:", err);
      setError("获取待办事项失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello World</h1>

      <Button onClick={fetchTodos} disabled={loading}>
        {loading ? "加载中..." : "Get Todos"}
      </Button>

      {error && <p className="text-red-500">{error}</p>}

      {todos.length > 0 && (
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">待办事项列表:</h2>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li key={todo.id} className="p-3 border rounded">
                <span className={todo.done ? "line-through text-gray-500" : ""}>
                  {todo.text}
                </span>
                <span className={`ml-2 px-2 py-1 text-xs rounded ${
                  todo.done ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {todo.done ? "已完成" : "进行中"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
