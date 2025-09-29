import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export async function GET(request: Request) {
  try {
    const todos = await db.select().from(todo);

    console.log("todos", todos);
    return Response.json(todos);
  } catch (error) {
    console.error("获取待办事项失败:", error);
    return Response.json({ error: "获取数据失败" }, { status: 500 });
  }
}
