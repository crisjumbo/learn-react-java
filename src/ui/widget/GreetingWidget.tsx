import React, { useEffect, useState } from 'react'
import { getGreeting } from '../../core/infra/adapters/ApiRepository';
import { GreetingContent } from './GreetingWidget.types';


const GreetingWidget = () => {
    const [content, setContent] = useState<GreetingContent>({} as GreetingContent);
    const [name, setName] = useState<string>('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleClick = () => getGreeting(name).then(data => setContent(data)).catch(error => console.error(error));

    useEffect( () => {
          getGreeting().then(data => {
              setContent(data);
          }).catch(error => console.error(error));
    }, [])

  return (
    <div>
        <h1>Greeting</h1>
        <input type="text" value={name} onChange={handleNameChange} placeholder='Enter your name' />
        <button onClick={handleClick}>Get Greeting</button>
        <p>{content.content}</p>
    </div>
  )
}

export default GreetingWidget