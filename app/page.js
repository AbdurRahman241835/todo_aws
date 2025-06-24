import TodoItem from "./components/TodoItem";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}
    >
      <TodoItem />
    </div>
  );
}
