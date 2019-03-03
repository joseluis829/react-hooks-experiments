import React, { useState } from "react";

function ExampleWithManyStates() {
    // Declare multiple state vatiables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState("banana");
    const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
}
