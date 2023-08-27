'use client'
import { useState, useEffect } from 'react';

// components/MyComponent.js

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/proxy'); // Use the comments API route
                const responseData = await response.json();
                setData(responseData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MyComponent;
