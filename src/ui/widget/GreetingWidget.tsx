import React, { useEffect, useState } from 'react'
import { getGreeting } from '../../core/infra/adapters/ApiRepository';
import { GreetingContent } from './GreetingWidget.types';


const GreetingWidget = () => {
    const [content, setContent] = useState<GreetingContent>({} as GreetingContent);
    useEffect( () => {
        getGreeting().then(data => {
            setContent(data);
        }).catch(error => console.error(error));
    }, [])

  return (
    <div>
        <h1>Greeting</h1>
        <p>{content.content}</p>
    </div>
  )
}

export default GreetingWidget