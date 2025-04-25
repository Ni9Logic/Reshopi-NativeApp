exports.handler = async (event) => {
    try {
        // Get the name from the event, default to 'World' if not provided
        const name = event.name || 'World';
        
        // Create response
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString()
            })
        };
        
        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal server error',
                error: error.message
            })
        };
    }
}; 