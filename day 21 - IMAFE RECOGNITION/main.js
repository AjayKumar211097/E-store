const express = require("express");
const fileUpload = require("express-fileupload");
const cv = require("opencv4nodejs");

const app = express();
app.use(fileUpload());

// Endpoint for image upload
app.post("/detect-walls", async (req, res) => {
    if (!req.files || !req.files.image) {
        return res.status(400).send("No image uploaded");
    }

    const imageFile = req.files.image;
    const img = cv.imdecode(imageFile.data);

    // Convert to grayscale and apply Canny edge detection
    const grayImg = img.bgrToGray();
    const edges = grayImg.canny(50, 150);

    // Detect lines using Hough Transform
    const lines = edges.houghLinesP(1, Math.PI / 180, 50, 50, 10);

    const walls = lines.map((line) => {
        const [x1, y1, x2, y2] = line.getPoints().flat();
        return { lineCoordinates: { x1, y1, x2, y2 }, type: "wall" };
    });

    const responseJson = { akitaWalls: walls };
    return res.json(responseJson);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
