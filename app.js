function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return { error: `Invalid JSON: ${error.message}` };    
    }
}

const jsonString1 = '{"name": "Lusi", "age": "30", "city": "Los Angeles"}';
const jsonString2 = '{"name": "Michael", "age": "twenty", "city": "Chicago"}';

console.log(parseJSON(jsonString1));

console.log(parseJSON(jsonString2));
