import { GreetingContent } from "../../../ui/widget/GreetingWidget.types";

export async function getGreeting(): Promise<GreetingContent>{
    const response = await fetch('http://localhost:8080/greeting');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}