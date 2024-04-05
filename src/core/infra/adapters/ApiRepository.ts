import { GreetingContent } from "../../../ui/widget/GreetingWidget.types";

export async function getGreeting(name?: string): Promise<GreetingContent>{
    let response;
    if(!name) {
       response = await fetch('http://localhost:8080/greeting');
    } else {
         response = await fetch(`http://localhost:8080/greeting?name=${name}`);
    }

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}