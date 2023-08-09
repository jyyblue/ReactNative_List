export const getData = async () => {
    const API_URL = 'http://de-coding-test.s3.amazonaws.com/books.json';
    try {
        const result = await fetch(API_URL, {
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (result.status === 200) {
            let json = await result.json()
            return json;
        }
        return null;
    } catch (error) {
        console.log("Error", error);
    }
}