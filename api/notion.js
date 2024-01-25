// /api/notion.js
const { NotionAPI } = require('notion-client');

module.exports = async (req, res) => {
    const notion = new NotionAPI();
    const { pageId } = req.query; // Extract pageId from query parameters

    if (!pageId) {
        return res.status(400).json({ message: 'Page ID is required' });
    }

    try {
        const recordMap = await notion.getPage(pageId);
        res.status(200).json(recordMap);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
