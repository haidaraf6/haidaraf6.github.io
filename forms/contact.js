
export async function handler(event) {
    const data = JSON.parse(event.body);
  
    
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  }
  