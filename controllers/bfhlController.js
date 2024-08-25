// controllers/bfhlController.js

const handlePostRequest = (req, res) => {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    // Process each item in the input data
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                if (item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        }
    });

    // Send the response
    res.json({
        is_success: true,
        user_id: "john_doe_17091999",  // Replace with actual user_id logic
        email: "john@xyz.com",  // Replace with actual email
        roll_number: "ABCD123",  // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
};

const handleGetRequest = (req, res) => {
    res.json({
        operation_code: 1
    });
};

module.exports = {
    handlePostRequest,
    handleGetRequest
};
